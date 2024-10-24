import React, { useState } from 'react';
import { Category, Transaction } from '../../utils/types';
import { Button, FormContainer, Input, Select } from './AddTransaction.styles';
import { v4 as uuid } from 'uuid';

interface AddTransactionFormProps {
  onAddTransaction: (newTransaction: Transaction) => void;
  categories: Category[];
}

const AddTransactionForm: React.FC<AddTransactionFormProps> = ({ onAddTransaction, categories }) => {
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 16));
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount <= 0 || !category) return;

    const newTransaction: Transaction = {
      id: uuid(),
      amount,
      category,
      date,
      description: description.trim() ? description : undefined,
      type: 'expense'
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
          <option key={cat.id} value={cat.name}>
            {cat.name}
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
