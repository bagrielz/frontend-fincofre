import { Method } from '../../shared/enums/method.enum';
import { Pill } from '../../shared/models/pill.model';

export const PillMethodConfig: Record<Method, Pill> = {
  [Method.BOLETO]: { type: 'billet', text: 'Boleto' },
  [Method.CREDITO]: { type: 'credit', text: 'Crédito' },
  [Method.DEBITO]: { type: 'debit', text: 'Débito' },
  [Method.DINHEIRO]: { type: 'money', text: 'Dinheiro' },
  [Method.PIX]: { type: 'pix', text: 'PIX' },
};
