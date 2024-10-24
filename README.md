# FinanceFlow

FinanceFlow is a finance tracking application that allows users to track their transactions and categorize them according to their own needs. The app is divided into web and mobile parts, implemented in React and React Native.

## Content

- [Architecture Overview](#Architecture-Overview)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)
- [Application](#application)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Architecture Overview
This project uses a simple architecture that centers around React's Context API and custom hooks for state management. Local storage (localStorage) is used as the primary means for persisting user data, allowing transactions and categories to be stored locally within the browser.

### Technology

- React (web)
- React Native (mobile)
- TypeScript
- Styled Components
- Node.js
- npm

### Key Components

1. Context API:
    - Manages global state for transactions and categories, allowing all components to access and modify transactions.

2. Hooks:

    - A custom hooks that abstracts the logic of fetching, storing, and updating transactions and categories in localStorage.

3. LocalStorage Utilities:

    - All interactions with localStorage are abstracted into utils/localStorage.ts, where we centralize saving and loading of transactions and categories

### Data Flow Overview
```plaintext
Components
   |
   V
Custom Hooks (useTransactions, useCategories)
   |
   V
Context Providers (TransactionContext, CategoryContext)
   |
   V
LocalStorage Utils (load/save transactions, load/save categories)
   |
   V
Browser localStorage
```

1. Components like forms or graphs interact with the app state by using hooks or consuming contexts.
2. State Management: These hooks and contexts manage the app's state and automatically persist changes to localStorage (via the helper functions in localStorage.ts).
3. LocalStorage Interaction: All read and write operations to localStorage are handled by utility functions, ensuring a centralized and clean approach to data persistence.

``` By keeping localStorage operations within utility functions and managing state through React's context and hooks, the architecture remains scalable and easy to extend in the future (e.g., migrating to a backend). ```

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/tvoje-uzivatelske-meno/finance-flow.git
cd finance-flow
```

2. **Installing dependencies**:

For the web part:

```bash
cd finance-flow-web
npm install
```

For the mobile part:

```bash
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