import { Status } from '../../shared/enums/status.enum';
import { PillConfig } from '../../shared/models/pill-config.model';

export const PillStatus: Record<Status, PillConfig> = {
  [Status.AGUARDANDO]: { type: 'waiting', text: 'Aguardando' },
  [Status.CONCLUIDO]: { type: 'completed', text: 'Concluído' },
  [Status.AGENDADO]: { type: 'scheduled', text: 'Agendado' },
  [Status.CANCELADO]: { type: 'canceled', text: 'Cancelado' },
};
