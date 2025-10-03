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

export function toSpentCreateDTO(spent: Spent) {
  return {
    date: formatDateToApi(spent.date),
    spent: spent.spent,
    status: spent.status,
    value: spent.value ? Number(spent.value) : 0,
    category: spent.category,
    type: spent.type,
    account: spent.account,
    method: spent.method,
  };
}
