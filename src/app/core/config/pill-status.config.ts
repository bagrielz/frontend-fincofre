import { PillConfig } from '../../shared/models/pill-config.model';

export const PillStatus: PillConfig[] = [
  { type: 'waiting', text: 'Aguardando' },
  { type: 'completed', text: 'Concluído' },
  { type: 'scheduled', text: 'Agendado' },
  { type: 'canceled', text: 'Cancelado' },
];
