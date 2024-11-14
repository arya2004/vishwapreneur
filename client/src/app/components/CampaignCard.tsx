import { getContract } from "thirdweb";
import { client } from "../client";
import { sepolia } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";
import Link from "next/link";

type CampaignCardProps = {
    campaignAddress: string;
};

export default function CampaignCard({ campaignAddress }: CampaignCardProps) {
    
    const contract = getContract({
        client: client,
        chain: sepolia,
        address: campaignAddress,
    });

    const {data: campaignName, isLoading} = useReadContract({
        contract,
        method: "function name() view returns (string)",
        params: []
    });

    const { data: campaignDescription } = useReadContract({
        contract,
        method: "function description() view returns (string)",
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

      // Calculate the total funded balance percentage
      const totalBalance = balance?.toString();
      const totalGoal = goal?.toString();
      let balancePercentage = (parseInt(totalBalance as string) / parseInt(totalGoal as string)) * 100;
  
      // If balance is greater than or equal to goal, percentage should be 100
      if (balancePercentage >= 100) {
          balancePercentage = 100;
      }
      
    return (
        <div className="flex flex-col items-center text-center justify-center max-w-sm p-6 bg-gray-900 border border-gray-800 rounded-lg shadow-lg">
            <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">{campaignName || "Campaign Name"}</h5>
                {!isPendingBalance && (
                    <div className="mb-4">
                        <div >
                            <div  style={{ width: `${balancePercentage?.toString()}%` }}>
                                <p className="text-white text-xs p-1">${balance?.toString()}</p>
                            </div>
                            <p className="absolute top-0 right-0 text-white text-xs p-1">
                                {balancePercentage >= 100 ? "" : `${balancePercentage?.toString()}%`}
                            </p>
                        </div>
                    </div>
                )}
                
                <p className="mb-3 font-normal text-gray-300">{campaignDescription || "Campaign description goes here."}</p>
            </div>
            
            <Link href={`/campaign/${campaignAddress}`} passHref={true}>
                <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500">
                    Details
                    
                </p>
            </Link>
        </div>
    );
}
