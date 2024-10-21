# FinanceFlow

FinanceFlow is a finance tracking application that allows users to track their transactions and categorize them according to their own needs. The app is divided into web and mobile parts, implemented in React and React Native.

## Content

- [Technology](#technology)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)
- [Application](#application)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Technology

- React (web)
- React Native (mobile)
- TypeScript
- Styled Components
- Node.js
- Yarn / npm

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/tvoje-uzivatelske-meno/finance-flow.git
   cd finance-flow

2. **Installing dependencies**:

For the web part:

    ```bash
    cd finance-flow-web
    npm install
    ```

For the mobile part:

    ````bash
    cd finance-flow-mobile
    npm install
    ```

3. **Start the application**:

    ```bash
    npm start
    ```

## Project Structure
The project is divided into two parts: finance-flow-web and finance-flow-mobile.

finance-flow-web: contains the React application for the web part of the project.
finance-flow-mobile: Contains a React Native application for mobile devices.
Each component has its own component structure and stylesheet.


## Features

- Add Transaction: users can add a new transaction with amount, description, date and category.
- Categories.
- Reporting: Transactions are displayed in a spreadsheet format for an easy overview of expenses.
- Using Styled Components: components are styled using styled-components for better maintainability and clarity.

## Usage

1. Adding a Transaction: Fill out the form with the transaction information (amount, date, description, and category). The date is preset to the current day, but can be modified.

2. Category Management.

3. View Overview: The list of transactions is organized by date and category, allowing you to keep track of your expenses.

## Development
To contribute or start a project locally, follow these steps:

Make sure you have Node.js and npm (or Yarn) installed.
Clone the repository and install the dependencies.
Run the project using the commands listed in the Installation section.

### Development Commands
- npm start: starts the development server for the web application.
- npm run lint: Checks the code for errors and flaws.
- npm run build: Creates an optimized build of the application for production.

## Contributing
To contribute to the project:

1. Create a new fork of the repository.
2. Create a new branch (git checkout -b feature-name-feature).
3. Make the necessary changes and commits (git commit -m 'Description of change').
4. Push the changes to the branch (git push origin feature-nazov-feature).
5. Open a Pull Request.

## License
FinanceFlow is an open-source project.