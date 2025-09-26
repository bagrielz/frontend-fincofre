export function formatDateToInput(date: string): string {
  if (!date) return '';
  const [day, month, year] = date.split('/');
  return `${year}-${month}-${day}`;
}

export function formatDateToApi(date: string): string {
  if (!date) return '';
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
}
