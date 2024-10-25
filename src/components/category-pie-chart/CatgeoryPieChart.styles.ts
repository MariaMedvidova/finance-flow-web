import styled from "styled-components";

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16 / 9;
  height: auto;

  @media (max-width: 480px) {
    max-width: 400px;
    aspect-ratio: 4 / 3;
  }
`;

export const Description = styled.p`
  margin-top: 15px;
  color: #555;
  font-size: 16px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;