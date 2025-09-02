import { Spent } from './spent.interface';

export interface SpentResponse {
  spents: Spent[];
  total: number;
}
