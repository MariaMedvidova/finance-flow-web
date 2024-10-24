import { Transaction } from "./types";

// Aggregates transactions by category
export const aggregateByCategory = (transactions: Transaction[]) => {
    const aggregatedData = transactions.reduce((acc, transaction) => {
    const { category, amount } = transaction;
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {} as Record<string, number>);

  // Convert the aggregated data object to an array of objects
  return Object.entries(aggregatedData).map(([category, totalAmount]) => ({
    category,
    totalAmount,
  }));
};

// Aggregates transactions by month
export const aggregateByMonth = (transactions: Transaction[]) => {
  const aggregatedData = transactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
    acc[month] = (acc[month] || 0) + transaction.amount;
    return acc;
  }, {} as Record<string, number>);

  // Convert the aggregated data object to an array of objects
  return Object.entries(aggregatedData).map(([month, totalAmount]) => ({
    month,
    totalAmount,
  }));
};
