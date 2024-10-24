import React from "react";
import { CategoryPieChart } from "../components/category-pie-chart/CategoryPieChart";
import { MonthlyBarChart } from "../components/monthly-bar-chart/MonthlyBarChart";
import { useTransactionContext } from "../context/TransactionContext";
import { PageWrapperWide, DashboardContainer, Section, Title } from "./pages.styles";

export const DashboardPage = () => {
  const { transactions } = useTransactionContext();

  return (
    <PageWrapperWide>
      <DashboardContainer>
        <Section>
          <Title>Expenses by Category</Title>
          <CategoryPieChart transactions={transactions} />
        </Section>
        <Section>
          <Title>Expenses by Month</Title>
          <MonthlyBarChart transactions={transactions} />
        </Section>
      </DashboardContainer>
    </PageWrapperWide>
  );
};
