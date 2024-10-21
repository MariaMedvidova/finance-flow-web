import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  background: #ffffff;
  padding: 8px;
  border-radius: 4px;
`;

export const CategoryInput = styled.input`
  padding: 4px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const NewCategoryInput = styled(CategoryInput)`
  width: calc(100% - 16px);
  margin-bottom: 8px;
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 4px 8px;
  margin-left: 4px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AddButton = styled(ActionButton)`
  width: 100%;
  margin-top: 8px;
`;
