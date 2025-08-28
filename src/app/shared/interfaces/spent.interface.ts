export interface Spent {
  id: number;
  userId: number;
  date: Date;
  spent: string;
  statusValue: string;
  value: number;
  category: string;
  type: string;
  account: string;
  method: string;
}
