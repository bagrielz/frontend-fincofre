export enum Status {
  AGENDADO = 'AGENDADO',
  CONCLUIDO = 'CONCLUÍDO',
  AGUARDANDO = 'AGUARDANDO',
  CANCELADO = 'CANCELADO',
}

export const StatusLabel: Record<Status, string> = {
  [Status.AGENDADO]: 'Agendado',
  [Status.CONCLUIDO]: 'Concluído',
  [Status.AGUARDANDO]: 'Aguardando',
  [Status.CANCELADO]: 'Cancelado',
};
