import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background-color: #e0e0e0;
  flex-wrap: wrap;

  @media (max-width: 400px) {
    gap: 10px;
  }

  @media (max-width: 340px) {
    gap: 5px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  color: #003366;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #004080;
    color: #fff;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }

  @media (max-width: 340px) {
    font-size: 14px;
  }
`;

export const Logo = styled.img`
  height: 40px;

  @media (max-width: 400px) {
    height: 30px;
  }

  @media (max-width: 340px) {
    height: 20px;
  }
`;