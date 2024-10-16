# Vishwapreneur - Decentralized Crowdfunding Platform for EDI Projects

## Project Overview
**Vishwapreneur** is a decentralized crowdfunding platform designed for the students of **Vishwakarma Institute of Technology**. The platform supports student-led "Engineering Design and Innovation" (EDI) semester projects by enabling students to pitch their ideas and receive funding from a wide range of backers, including alumni, faculty, corporates, and the general public. Students can submit their projects with a clear funding goal and multiple contribution levels. Backers can contribute funds securely using a decentralized system, ensuring transparency and accountability.

This platform aims to:
- Help students access necessary funding to complete their innovative projects.
- Promote collaboration between students and backers from the wider community.
- Foster innovation and entrepreneurship at Vishwakarma Institute of Technology.

---

## Project Structure

The project is structured into two main components:
1. **Frontend** (located in the `client` folder)
2. **Smart Contracts** (located in the `contract` folder)

### 1. Frontend (`client` folder)
The frontend is built using modern web technologies to provide an easy-to-use interface for students and backers. The `client` folder contains the entire codebase for the web app, including components for project submission, funding, and project tracking.

- **Tech Stack**: React, HTML, CSS, Typescript.
- **Project Forms**: Allow students to submit projects, backers to contribute, and admins to review proposals.

Refer to the **README** file inside the `client` folder for instructions on how to run the frontend locally.

### 2. Smart Contracts and Deployment (`contract` folder)
The core logic of the platform, including the management of funds, tiers (contribution levels), and student project submissions, is handled by smart contracts. These contracts ensure the decentralized nature of the platform by managing contributions, tracking milestones, and releasing funds in a secure and transparent manner.

- **Tech Stack**: Solidity for smart contracts, Hardhat for development and testing.
- **Contracts**: Define the logic for project creation, funding, milestone tracking, and fund release.
- **Deployment Script**: Automates the deployment of the contracts to the blockchain.

Refer to the **README** file inside the `contract` folder for detailed instructions on how to deploy the contracts.

---

## How to Run the Project Locally

### 1. Frontend (Client)
Navigate to the `client` folder and refer to the **README** inside that folder for instructions on how to run the frontend. It contains the necessary steps to install dependencies, start the development server, and build the project for production.

### 2. Smart Contracts and Deployment (Contract)
The smart contracts reside in the `contract` folder. To deploy the contracts to a blockchain network (e.g., local, testnet, or mainnet), refer to the **README** file inside the `contract` folder. It contains detailed instructions on how to compile, test, and deploy the contracts.


---

## Key Features

- **Project Submission**: Students can submit their EDI projects with a detailed description, required funding amount, and predefined contribution levels.
- **Contribution Levels**: Backers can choose different levels of support, each offering a unique contribution level for the projects.
- **Smart Contract-Backed Transparency**: Smart contracts ensure that funds are only released when predefined milestones are achieved, offering transparency and trust.
- **Milestone Tracking**: Project owners update backers on their progress by achieving specific milestones before the next set of funds is released.
- **Decentralized Governance**: Alumni, faculty, and other stakeholders can help guide projects through their votes and participation in the funding process.

---

## Future Plans
- Integration with industry sponsors to attract more significant contributions.
- Expansion of features to allow project feedback and mentorship from backers.
- Development of a mobile app for easier access to the platform.

---

## Contribution
Feel free to contribute to the development of this platform! If you find any issues or have ideas for new features, create an issue or submit a pull request.

---

## License
This project is licensed under the MIT License.