import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 50%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 16px;
`;

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  background: #ffffff;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CategoryInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  margin-left: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const InputWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
 
  svg {
    color: #666;
  }
`;