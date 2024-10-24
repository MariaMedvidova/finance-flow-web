import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background-color: #e0e0e0;
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
`;

export const Logo = styled.img`
  height: 50px;
`;