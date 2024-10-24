import React from "react";
import { Logo, NavContainer, NavLink } from "./Navigation.styles";
import logo from "../../assets/logo.png";

export const Navigation: React.FC = () => {
  return (
      <NavContainer>
        <Logo src={logo} alt="FinanceFlow Logo" />
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </NavContainer>
  );
};
