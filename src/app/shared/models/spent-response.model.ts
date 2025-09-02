import { Spent } from './spent.model';

export interface SpentResponse {
  spents: Spent[];
  total: number;
}
