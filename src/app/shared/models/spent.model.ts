import { Category } from '../enums/category.enum';
import { Method } from '../enums/method.enum';
import { Status, StatusLabel } from '../enums/status.enum';
import { Type } from '../enums/type.enum';

export interface Spent {
  id: number;
  userId: number;
  date: Date;
  spent: string;
  status: Status;
  value: number;
  category: Category;
  type: Type;
  account: string;
  method: Method;
}
