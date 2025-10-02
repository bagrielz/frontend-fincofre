import { Spent } from '../models/spent.model';
import { formatDateToApi } from '../utils/date-utils';

export function toSpentUpdateDTO(spent: Spent) {
  return {
    date: formatDateToApi(spent.date),
    spent: spent.spent,
    status: spent.status,
    value: spent.value,
    category: spent.category,
    type: spent.type,
    account: spent.account,
    method: spent.method,
  };
}
