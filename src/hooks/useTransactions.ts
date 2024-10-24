import { useState, useEffect } from 'react';
import { Transaction } from '../utils/types';
import { loadTransactions, saveTransactions } from '../utils/localStorage';

// This hook manages the state of transactions within a component.
// It abstracts away the logic of fetching and storing transactions in localStorage,
// providing a clean interface for components to access and update transaction data.

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(() => loadTransactions());

  // synchronization with localStorage with every change of transactions
  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return {
    transactions,
    addTransaction,
  };
};
