import React, { useState } from 'react';
import { Button, Table, TableWrapper, Td, Th } from './TransactionTable.styles';
import { Transaction } from '../../utils/types';
import { format } from 'date-fns';

export const TransactionTable: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedTransactions = [...transactions].sort((a, b) => {
    const amountA = sortOrder === 'asc' ? a.amount : b.amount;
    const amountB = sortOrder === 'asc' ? b.amount : a.amount;
    return amountA - amountB;
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <Th>Date</Th>
            <Th>Category</Th>
            <Th>
              Amount
              <Button onClick={toggleSortOrder}>
                 {sortOrder === 'asc' ? '↑' : '↓'}
              </Button>
            </Th>
            <Th>Description</Th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((transaction, index) => (
            <tr key={index}>
              <Td>{format(new Date(transaction.date), "dd.MM.yyyy HH:mm")}</Td>
              <Td>{transaction.category}</Td>
              <Td>{transaction.amount}</Td>
              <Td>{transaction.description}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};
