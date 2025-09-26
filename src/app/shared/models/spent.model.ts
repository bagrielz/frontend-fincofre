import { Category } from '../enums/category.enum';
import { Method } from '../enums/method.enum';
import { Status } from '../enums/status.enum';
import { Type } from '../enums/type.enum';

export interface Spent {
  id: number;
  userId: number;
  date: string;
  spent: string;
  status: Status;
  value: number;
  category: Category;
  type: Type;
  account: string;
  method: Method;
}
