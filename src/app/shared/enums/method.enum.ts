export enum Method {
  CREDITO = 'CRÉDITO',
  DEBITO = 'DÉBITO',
  BOLETO = 'BOLETO',
  PIX = 'PIX',
  DINHEIRO = 'DINHEIRO',
}

export const MethodLabel: Record<Method, string> = {
  [Method.BOLETO]: 'Boleto',
  [Method.DEBITO]: 'Débito',
  [Method.CREDITO]: 'Crédito',
  [Method.PIX]: 'Pix',
  [Method.DINHEIRO]: 'Dinheiro',
};
