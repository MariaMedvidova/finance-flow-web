import React, { useState } from "react";
import AddTransaction from "../components/add-transaction/AddTransaction";
import { TransactionTable } from "../components/table/TransactionTable";
import { CategoryManagement } from "../components/category-management/CategoryManagement";
import { useTransactionContext } from "../context/TransactionContext";
import { Button, PageWrapper } from "./pages.styles";
import { useCategoryContext } from "../context/CategoryContext";
import { Transaction } from '../utils/types';

export const TransactionsPage: React.FC = () => {
  const { transactions, addTransaction } = useTransactionContext();
  const { categories, addCategory, editCategory, deleteCategory } = useCategoryContext();
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isManagingCategories, setIsManagingCategories] = useState<boolean>(false);

  const handleAddTransaction = (newTransaction: Transaction) => {
    addTransaction(newTransaction);
    setIsAdding(false);
  };

  return (
    <PageWrapper>
      <Button onClick={() => setIsAdding(!isAdding)}>
        {isAdding ? "Cancel" : "+ Add New Transaction"}
      </Button>
      {isAdding && (
        <AddTransaction
          onAddTransaction={handleAddTransaction}
          categories={categories}
        />
      )}
      <Button onClick={() => setIsManagingCategories(!isManagingCategories)}>
        {isManagingCategories ? "Cancel" : "Manage Categories"}
      </Button>
      {isManagingCategories && (
        <CategoryManagement
          categories={categories}
          onAddCategory={addCategory}
          onEditCategory={editCategory}
          onDeleteCategory={deleteCategory}
        />
      )}
      <TransactionTable transactions={transactions} />
    </PageWrapper>
  );
};
