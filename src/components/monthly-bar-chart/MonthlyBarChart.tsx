import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { aggregateByMonth } from "../../utils/aggregation";
import { Transaction } from "../../utils/types";
import { ChartContainer } from "./MonthlyBarChart.styles";

export const MonthlyBarChart: React.FC<{ transactions: Transaction[] }> = ({
  transactions,
}) => {
  const data = aggregateByMonth(transactions);

  return (
    <ChartContainer>
      <ResponsiveContainer>
        <BarChart
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalAmount" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
