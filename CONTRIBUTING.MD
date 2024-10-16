# Contributing to Vishwapreneur

Thank you for considering contributing to **Vishwapreneur**, the decentralized crowdfunding platform for **Vishwakarma Institute of Technology**. We are excited to have you involved and appreciate your effort in helping us improve the platform. Below is a guide on how you can contribute to the project, submit issues, suggest new features, or work on existing ones.

## Getting Started

1. **Fork the repository**:
   Start by forking the repository on GitHub to your personal account.

2. **Clone your fork**:
   Clone the forked repository to your local machine for development.

   ```bash
   git clone https://github.com/arya2004/vishwapreneur.git
   cd vishwapreneur
   ```

3. **Create a branch**:
   Create a new branch for your work. Make sure to name it according to the feature or issue you're working on.

   ```bash
   git checkout -b your-branch-name
   ```

4. **Install dependencies**:
   Depending on which part of the project you're contributing to (frontend or smart contracts), you need to install the necessary dependencies.

   - For the **frontend** (`client` folder):
     ```bash
     cd client
     yarn install
     ```

   - For **smart contracts** (`contract` folder):
     ```bash
     cd contract
     yarn install
     ```

5. **Make your changes**:
   Develop your feature, fix a bug, or make your changes. Please ensure to write clean, modular, and well-commented code. If working on contracts, make sure you write tests to verify your changes.

6. **Run tests**:
   - If you've made changes to the **smart contracts**, make sure to run the tests before submitting your pull request.

     ```bash
     npx hardhat test
     ```

   - For the **frontend**, ensure the app is working correctly by running it locally and testing the UI changes.
   
     ```bash
     npm start
     ```

## Commit Guidelines

- **Write descriptive commit messages**: Each commit should have a clear and concise description of what was done.
- **Follow best practices**: Commit small, logical chunks of work and avoid large, single commits with unrelated changes.

Example:
```bash
git add .
git commit -m "Fix: Resolve smart contract issue with milestone validation"
git push origin your-branch-name
```

## Submitting a Pull Request

1. **Push your changes**:
   Push your changes to your forked repository on GitHub.

   ```bash
   git push origin your-branch-name
   ```

2. **Create a Pull Request (PR)**:
   Go to the original repository on GitHub, navigate to the **Pull Requests** tab, and create a new pull request. Please ensure your PR is well-documented with the following:
   - A clear description of what the PR does.
   - Any related issue numbers (if applicable).
   - Screenshots or test results if you've made UI changes or worked on contracts.

3. **Respond to feedback**:
   Your pull request will go through a review process. Please respond to feedback or requested changes in a timely manner.

## Reporting Issues

If you find bugs or have feature requests, you can open an issue in the repository. Please ensure the following when submitting an issue:
- **Title**: A clear and concise description of the issue or feature.
- **Description**: Detailed information about the issue, steps to reproduce, expected behavior, and environment details (if relevant).
- **Label**: Add the appropriate label to the issue (e.g., `bug`, `enhancement`, `question`).

## Feature Requests

If you have ideas for new features or improvements, we'd love to hear them! Please submit your idea as an issue, with the following details:
- **Feature description**: A clear explanation of what the feature would do and how it would benefit the platform.
- **Implementation ideas**: Any thoughts on how it could be implemented.
- **Alternative solutions**: If applicable, list any other ways this could be approached.

## Code Style Guidelines

- **Follow existing patterns**: When contributing to the codebase, try to follow the established structure and conventions of the project.
- **Code comments**: Always add comments where necessary, particularly for complex or non-obvious sections of code.
- **Clean code**: Ensure that your code is well-organized and easy to understand.

For frontend development, adhere to these principles:
- Use **semantic HTML** wherever possible.
- Write **responsive** and **accessible** code (keep in mind that the app will be used by various users on different devices).

For smart contract development:
- Follow best practices for Solidity development, including security considerations.
- Ensure contracts are well-tested before submitting.

## Tests and Documentation

- **Tests**: If you're contributing code that involves new functionality or fixing a bug, please write tests to cover your changes.
- **Documentation**: Ensure that the documentation is updated to reflect your changes. This includes comments in the code, user guides, or any changes to the deployment process.

## Code of Conduct

We are committed to fostering a welcoming and collaborative environment. Please read and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

Thank you for your contributions! We are excited to build **Vishwapreneur** together and appreciate your effort in helping students at Vishwakarma Institute of Technology realize their innovative ideas.

