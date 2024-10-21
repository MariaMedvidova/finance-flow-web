import { useState } from 'react';

type Transaction = {
  id: string;
  amount: number;
  category: string;
  description?: string;
  date: string;
};

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return {
    transactions,
    addTransaction,
  };
};
