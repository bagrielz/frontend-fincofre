import { Method } from '../../shared/enums/method.enum';

export const MethodConfig: Record<Method, { label: string }> = {
  [Method.BOLETO]: { label: 'billet' },
  [Method.CREDITO]: { label: 'credit' },
  [Method.DEBITO]: { label: 'debit' },
  [Method.DINHEIRO]: { label: 'money' },
  [Method.PIX]: { label: 'pix' },
};
