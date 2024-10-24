export interface Transaction {
  id: string;
  amount: number;
  category: string;
  description?: string;
  date: string;
  type: "income" | "expense";
}

export type Category = {
  id: string;
  name: string;
};

export interface AggregatedCategory {
  category: string;
  totalAmount: number;
}
  