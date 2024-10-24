import { Transaction } from "./types";
import { CATEGORIES_KEY, TRANSACTIONS_KEY } from "./constant";

// This file handles all interactions with localStorage.
// It centralizes the logic for saving and loading transactions and categories,
// so that other parts of the app don't directly manipulate localStorage.

const saveToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const saveTransactions = (transactions: Transaction[]) => {
  saveToLocalStorage(TRANSACTIONS_KEY, transactions);
};

export const loadTransactions = (): Transaction[] => {
  return loadFromLocalStorage(TRANSACTIONS_KEY) || [];
};

export const saveCategories = (categories: string[]) => {
  saveToLocalStorage(CATEGORIES_KEY, categories);
};

export const loadCategories = (): string[] => {
  return loadFromLocalStorage(CATEGORIES_KEY) || [];
};
