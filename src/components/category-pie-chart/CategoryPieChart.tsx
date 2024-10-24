import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { aggregateByCategory } from "../../utils/aggregation";
import { Transaction } from "../../utils/types";
import { CATEGORY_PIE_CHART_COLORS } from "../../utils/constant";
import { ChartContainer, Description } from "./CatgeoryPieChart.styles";

export const CategoryPieChart: React.FC<{ transactions: Transaction[] }> = ({
  transactions,
}) => {
  const data = aggregateByCategory(transactions);

  return (
    <ChartContainer>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="totalAmount"
          nameKey="category"
          outerRadius={150}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                CATEGORY_PIE_CHART_COLORS[
                  index % CATEGORY_PIE_CHART_COLORS.length
                ]
              }
            />
          ))}
        </Pie>
        <Tooltip/>
        <Legend
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{ paddingTop: "20px" }}
        />
      </PieChart>
      <Description>
        This pie chart displays your expenses categorized by type. Each slice
        represents a category's share of total expenses.
      </Description>
    </ChartContainer>
  );
};
