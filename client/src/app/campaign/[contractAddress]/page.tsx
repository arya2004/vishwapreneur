'use client';
import { client } from "@/app/client";
import { TierCard } from "@/app/components/TierCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { getContract, prepareContractCall, ThirdwebContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { lightTheme, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";

export default function CampaignPage() {
    
    const account = useActiveAccount();
    const { contractAddress } = useParams();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const contract = getContract({
        client: client,
        chain: sepolia,
        address: contractAddress as string,
    });

    const {data: campaignName, isLoading: isPendingName} = useReadContract({
        contract,
        method: "function name() view returns (string)",
        params: []
    });

    const { data: campaignDescription } = useReadContract({
        contract,
        method: "function description() view returns (string)",
        params: []
    });

    const { data: deadline, isPending: isPendingDeadline } = useReadContract({
        contract,
        method: "function deadline() view returns (uint256)",
        params: []
      });

    const { data: goal, isPending: isPendingGoal} = useReadContract({
        contract,
        method: "function goal() view returns (uint256)",
        params: []
      });

      const { data: balance, isPending: isPendingBalance } = useReadContract({
        contract,
        method: "function getContractBalance() view returns (uint256)",
        params: []
      });

    const deadlineDate = new Date(parseInt(deadline?.toString() as string) * 1000);
    const deadlineDatePassed = deadlineDate < new Date();

    // Calculate the total funded balance percentage
    const totalBalance = balance?.toString();
    const totalGoal = goal?.toString();
    let balancePercentage = (parseInt(totalBalance as string) / parseInt(totalGoal as string)) * 100;
 
    if (balancePercentage >= 100) {
         balancePercentage = 100;
    }

    const { data: tiers, isPending: isPendingTiers } = useReadContract({
        contract,
        method: "function getTiers() view returns ((string name, uint256 amount, uint256 backers)[])",
        params: []
      });

    const { data: owner, isPending: isPendingOwner } = useReadContract({
        contract,
        method: "function owner() view returns (address)",
        params: []
      });
    
    const { data: status } = useReadContract({
        contract,
        method: "function state() view returns (uint8)",
        params: []
      });
    
    return (
        <div className="mx-auto max-w-7xl text-center justify-center px-2 mt-4 sm:px-6 lg:px-8 text-white">
            <div className="flex flex-row justify-between items-center">
                {!isPendingName && (
                    <p className="text-5xl font-semibold">{campaignName}</p>
                )}
                {owner === account?.address && (
                    <div className="flex flex-row">
                        {isEditing && (
                            <p className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2 text-lg">
                                Status:  
                                {status === 0 ? " Active" : 
                                status === 1 ? " Successful" :
                                status === 2 ? " Failed" : "Unknown"}
                            </p>
                        )}
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md text-lg"
                            onClick={() => setIsEditing(!isEditing)}
                        >{isEditing ? "Done" : "Edit"}</button>
                    </div>
                )}
            </div>
            <div className="my-4">
                <p className="text-2xl font-semibold">Disaster Impact:</p>
                <p className="text-lg">{campaignDescription}</p>
            </div>
            <div className="mb-4">
                <p className="text-2xl font-semibold">Deadline</p>
                {!isPendingDeadline && (
                    <p className="text-lg">{deadlineDate.toDateString()}</p>
                )}
            </div>
            {!isPendingBalance && (
                <div className="mb-4">
                    <p className="text-2xl font-semibold">Our Funding Goal: ${goal?.toString()}</p>
                    <div >
                        <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 text-right" style={{ width: `${balancePercentage?.toString()}%`}}>
                            <p className="text-white text-xl dark:text-white text-xs p-1">${balance?.toString()}</p>
                        </div>
                        
                    </div>
                </div>
            )}
            <div>
                <p className="text-2xl font-semibold">Let's make a contribution:</p>
                <div className="grid grid-cols-3 gap-4">
                    {isPendingTiers ? (
                        <p className="text-lg">Loading...</p>
                    ) : (
                        tiers && tiers.length > 0 ? (
                            tiers.map((tier, index) => (
                                <TierCard
                                    key={index}
                                    tier={tier}
                                    index={index}
                                    contract={contract}
                                    isEditing={isEditing}
                                />
                            ))
                        ) : (
                            !isEditing && (
                                <p className="text-lg">No contribution limits added</p>
                            )
                        )
                    )}
                    {isEditing && (
                        <button
                        className="w-1/4 h-1/4 flex flex-col text-center justify-center items-center font-semibold p-2 bg-green-600 text-white border border-green-700 rounded-md shadow hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 transition-transform duration-150 ease-in-out text-sm"
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Add Contributions
                    </button>
                    )}
                </div>
            </div>
            
            {isModalOpen && (
                <CreateCampaignModal
                    setIsModalOpen={setIsModalOpen}
                    contract={contract}
                />
            )}
        </div>
    )
}

type CreateTierModalProps = {
    setIsModalOpen: (value: boolean) => void
    contract: ThirdwebContract
}

const CreateCampaignModal = (
    { setIsModalOpen, contract }: CreateTierModalProps
) => {
    const [tierName, setTierName] = useState<string>("");
    const [tierAmount, setTierAmount] = useState<bigint>(1n);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center backdrop-blur-md">
            <div className="w-1/2 bg-slate-100 p-6 rounded-md">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-semibold">Create a Contribution</p>
                    <button
                        className="text-sm px-4 py-2 bg-slate-600 text-white rounded-md"
                        onClick={() => setIsModalOpen(false)}
                    >Close</button>
                </div>
                <div className="flex text-black flex-col">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={tierName}
                        onChange={(e) => setTierName(e.target.value)}
                        placeholder="Tier Name"
                        className="mb-4 px-4 py-2 bg-slate-200 rounded-md"
                    />
                    <label>Cost:</label>
                    <input 
                        type="number"
                        value={parseInt(tierAmount.toString())}
                        onChange={(e) => setTierAmount(BigInt(e.target.value))}
                        className="mb-4 px-4 py-2 bg-slate-200 rounded-md"
                    />
                    <TransactionButton
                        transaction={() => prepareContractCall({
                            contract: contract,
                            method: "function addTier(string _name, uint256 _amount)",
                            params: [tierName, tierAmount]
                        })}
                        onTransactionConfirmed={async () => {
                            alert("Tier added successfully!")
                            setIsModalOpen(false)
                        }}
                        onError={(error) => alert(`Error: ${error.message}`)}
                        theme={lightTheme()}
                    >Add Contribution</TransactionButton>
                </div>
            </div>
        </div>
    )
}
