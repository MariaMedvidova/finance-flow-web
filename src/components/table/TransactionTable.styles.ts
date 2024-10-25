import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #003366;
  color: #fff;
  padding: 10px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const Thead = styled.thead`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Tbody = styled.tbody`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
