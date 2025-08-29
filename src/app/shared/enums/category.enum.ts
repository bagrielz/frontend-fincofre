export enum Category {
  INTERNET = 'INTERNET',
  TRANSPORTE = 'TRANSPORTE',
  ENTRETENIMENTO = 'ENTRETENIMENTO',
  EDUCACAO = 'EDUCAÇÃO',
  CARTAO = 'CARTÃO',
  SAUDE = 'SAÚDE',
  FERRAMENTA = 'FERRAMENTA',
  CASA = 'CASA',
  COMPRAS = 'COMPRAS',
  ROUPAS = 'ROUPAS',
  ALIMENTACAO = 'ALIMENTAÇÃO',
}

export const CategoryLabel: Record<Category, string> = {
  [Category.INTERNET]: 'Internet',
  [Category.TRANSPORTE]: 'Transporte',
  [Category.ENTRETENIMENTO]: 'Entretenimento',
  [Category.EDUCACAO]: 'Educação',
  [Category.CARTAO]: 'Cartão',
  [Category.SAUDE]: 'Saúde',
  [Category.FERRAMENTA]: 'Ferramenta',
  [Category.CASA]: 'Casa',
  [Category.COMPRAS]: 'Compras',
  [Category.ROUPAS]: 'Roupas',
  [Category.ALIMENTACAO]: 'Alimentação',
};
