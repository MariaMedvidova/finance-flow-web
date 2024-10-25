import styled from 'styled-components';

export const FormContainer = styled.form`
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

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
`;

export const Button = styled.button`
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

export const InputWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
 
  svg {
    color: #666;
  }
`;