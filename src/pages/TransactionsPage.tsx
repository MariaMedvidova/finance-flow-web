import React, { useState } from "react";
import styled from "styled-components";
import AddTransaction from "../components/create-transaction/AddTransaction";
import TransactionTable from "../components/table/TransactionTable";
import { Transaction } from "../types";
import logo from "../assets/logo.png";
import CategoryManagement from "../components/category-management/CategoryManagement";

const PageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 50px;
`;

const Button = styled.button`
  background-color: #003366;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 5px;

  &:hover {
    background-color: #004080;
  }
`;

const TransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isManagingCategories, setIsManagingCategories] =
    useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([
    "Groceries",
    "Rent",
    "Entertainment",
  ]);

  const addCategory = (newCategory: string) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  const editCategory = (oldCategory: string, newCategory: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category === oldCategory ? newCategory : category
      )
    );
  };

  const deleteCategory = (categoryToDelete: string) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category !== categoryToDelete)
    );
  };

  const handleAddTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction]);
    setIsAdding(false);
  };

  const handleAddCategory = (newCategory: string) => {
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

  return (
    <PageWrapper>
      <Header>
        <Logo src={logo} alt="FinanceFlow Logo" />
      </Header>
      <Button onClick={() => setIsAdding(!isAdding)}>
        {isAdding ? "Cancel" : "+ Add New Transaction"}
      </Button>
      {isAdding && (
        <AddTransaction
          onAddTransaction={handleAddTransaction}
          categories={categories}
          onAddCategory={handleAddCategory}
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

export default TransactionsPage;
