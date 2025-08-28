import { Category } from '../enums/category.enum';
import { Status } from '../enums/status.enum';

export interface Spent {
  id: number;
  userId: number;
  date: Date;
  spent: string;
  statusValue: Status;
  value: number;
  category: Category;
  type: string;
  account: string;
  method: string;
}
