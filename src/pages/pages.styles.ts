import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const PageWrapperWide = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Button = styled.button`
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

export const DashboardContainer = styled.div`
  display: flex; /* Use flexbox for layout */
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Section = styled.div`
  flex: 1;
  min-width: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  color: #003366;
  font-size: 24px;
  text-align: center;
`;
