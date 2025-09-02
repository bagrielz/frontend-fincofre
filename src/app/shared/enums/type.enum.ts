export enum Type {
  FIXO = 'FIXO',
  VARIAVEL = 'VARIÁVEL',
}

export const TypeLabel: Record<Type, string> = {
  [Type.FIXO]: 'Fixo',
  [Type.VARIAVEL]: 'Variável',
};
