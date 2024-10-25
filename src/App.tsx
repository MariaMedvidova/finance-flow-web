import React from 'react';
import { TransactionProvider } from './context/TransactionContext';
import { CategoryProvider } from './context/CategoryContext';
import { TransactionsPage } from './pages/TransactionsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { Navigation } from './components/navigation/Navigation';
import { GlobalStyles } from './GlobalStyles';

const App: React.FC = () => {
  return (
    <TransactionProvider>
      <CategoryProvider>
        <Router>
          <GlobalStyles/>
          <Navigation />
          <Routes>
            <Route path='/' element={<TransactionsPage />} />
            <Route path='/transactions' element={<TransactionsPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
          </Routes>
        </Router>
      </CategoryProvider>
    </TransactionProvider>
  );
};

export default App;
