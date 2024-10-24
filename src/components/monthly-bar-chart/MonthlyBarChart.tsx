import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { aggregateByMonth } from '../../utils/aggregation';
import { Transaction } from '../../utils/types';

export const MonthlyBarChart: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  const data = aggregateByMonth(transactions);

  return (
    <BarChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="totalAmount" fill="#82ca9d" />
    </BarChart>
  );
};
