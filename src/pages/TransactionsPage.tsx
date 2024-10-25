import React, { useState } from "react";
import AddTransaction from "../components/add-transaction/AddTransaction";
import { TransactionTable } from "../components/table/TransactionTable";
import { CategoryManagement } from "../components/category-management/CategoryManagement";
import { useTransactionContext } from "../context/TransactionContext";
import { AddItemButton, ButtonContainer, PageWrapper, FormWrapper } from "./pages.styles";
import { useCategoryContext } from "../context/CategoryContext";
import { Transaction } from "../utils/types";

export const TransactionsPage: React.FC = () => {
  const { transactions, addTransaction } = useTransactionContext();
  const { categories, addCategory, editCategory, deleteCategory } =
    useCategoryContext();
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isManagingCategories, setIsManagingCategories] =
    useState<boolean>(false);

  const handleAddTransaction = (newTransaction: Transaction) => {
    addTransaction(newTransaction);
    setIsAdding(false);
  };

  return (
    <PageWrapper>
      <ButtonContainer>
        <AddItemButton onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? "Cancel" : "+ Add New Transaction"}
        </AddItemButton>
        <AddItemButton
          onClick={() => setIsManagingCategories(!isManagingCategories)}
        >
          {isManagingCategories ? "Cancel" : "Manage Categories"}
        </AddItemButton>
      </ButtonContainer>

      <FormWrapper>
        {isAdding && (
          <AddTransaction
            onAddTransaction={handleAddTransaction}
            categories={categories}
          />
        )}

        {isManagingCategories && (
          <CategoryManagement
            categories={categories}
            onAddCategory={addCategory}
            onEditCategory={editCategory}
            onDeleteCategory={deleteCategory}
          />
        )}
      </FormWrapper>
      <TransactionTable transactions={transactions} />
    </PageWrapper>
  );
};
