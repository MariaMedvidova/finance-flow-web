import React, { useState } from 'react';
import styled from 'styled-components';
import { Transaction } from '../../types';

interface AddTransactionFormProps {
  onAddTransaction: (newTransaction: Transaction) => void;
  categories: string[];
  onAddCategory: (newCategory: string) => void;
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;

const AddTransactionForm: React.FC<AddTransactionFormProps> = ({ onAddTransaction, categories, onAddCategory }) => {
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 16));
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount <= 0 || !category) return;

    const newTransaction: Transaction = {
      amount,
      category,
      date,
      description: description.trim() ? description : undefined,
    };

    onAddTransaction(newTransaction);
    setAmount(0);
    setCategory('');
    setDate(new Date().toISOString().slice(0, 16));
    setDescription('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount"
        required
      />
      <Select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="" disabled>Select a category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Select>
      <Input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
      />
      <Button type="submit">Add Transaction</Button>
    </FormContainer>
  );
};

export default AddTransactionForm;
