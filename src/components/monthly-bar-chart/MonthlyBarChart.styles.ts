import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16 / 9;
  height: auto;

  @media (max-width: 480px) {
    max-width: 400px;
    aspect-ratio: 4 / 3;
  }
`;