import React, { useState } from 'react';
import styled from 'styled-components';

interface Transaction {
  date: string;
  category: string;
  amount: number;
  description?: string;
}

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #003366;
  color: #fff;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const TransactionTable: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
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
              <Td>{transaction.date}</Td>
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

export default TransactionTable;
