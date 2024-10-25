import styled from "styled-components";

export const PageWrapper = styled.div`
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const PageWrapperWide = styled.div`
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }

`;

export const AddItemButton = styled.button`
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

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
    width: 50%;
  }

`;

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const Section = styled.div`
  flex: 1;
  min-width: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  color: #003366;
  font-size: 24px;
  text-align: center;

  @media (max-width: 990px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;