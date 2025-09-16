import { Status } from '../../shared/enums/status.enum';
import { Pill } from '../../shared/models/pill.model';

export const PillStatusConfig: Record<Status, Pill> = {
  [Status.AGUARDANDO]: { type: 'waiting', text: 'Aguardando' },
  [Status.CONCLUIDO]: { type: 'completed', text: 'Concluído' },
  [Status.AGENDADO]: { type: 'scheduled', text: 'Agendado' },
  [Status.CANCELADO]: { type: 'canceled', text: 'Cancelado' },
};
