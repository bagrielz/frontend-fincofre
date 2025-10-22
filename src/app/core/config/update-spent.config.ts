import { Validators } from '@angular/forms';
import { FormConfig } from '../../shared/models/form-config.model';
import { Status } from '../../shared/enums/status.enum';
import { Category } from '../../shared/enums/category.enum';
import { Type } from '../../shared/enums/type.enum';
import { Method } from '../../shared/enums/method.enum';

export function getUpdateSpentFormConfig(): FormConfig {
  return {
    title: 'Gastos >',
    highlight: 'Editar gasto',
    subtitle: 'Editar gasto',
    description: 'Edite o gasto conforme a sua necessidade.',
    buttons: [
      { type: 'primary', text: 'Atualizar' },
      { type: 'secondary', text: 'Voltar' },
    ],
    fields: [
      {
        label: 'Nome do gasto',
        formControlName: 'spent',
        type: 'text',
        required: true,
        errorMessages: {
          required: 'Nome do gasto é um campo obrigatório',
        },
        placeholder: 'Escolha o nome para o gasto',
        validators: [Validators.required],
        width: 'full',
      },
      {
        label: 'Data',
        formControlName: 'date',
        type: 'date',
        required: true,
        errorMessages: {
          required: 'Data é um campo obrigatório',
        },
        placeholder: 'Selecione a data',
        validators: [Validators.required],
        width: 'full',
      },
      {
        label: 'Status',
        formControlName: 'status',
        type: 'select',
        required: true,
        errorMessages: {
          required: 'Status é um campo obrigatório',
        },
        placeholder: 'Escolha o status',
        icon: 'icons/chevron-down.svg',
        validators: [Validators.required],
        options: [
          { label: 'Agendado', value: Status.AGENDADO },
          { label: 'Concluído', value: Status.CONCLUIDO },
          { label: 'Cancelado', value: Status.CANCELADO },
          { label: 'Aguardando', value: Status.AGUARDANDO },
        ],
        width: 'full',
      },
      {
        label: 'Valor',
        formControlName: 'value',
        type: 'number',
        required: true,
        errorMessages: {
          required: 'Valor é um campo obrigatório',
        },
        placeholder: 'Digite o valor do gasto',
        validators: [Validators.required],
        width: 'full',
        step: '0.01',
        min: '0',
      },
      {
        label: 'Categoria',
        formControlName: 'category',
        type: 'select',
        required: true,
        icon: 'icons/chevron-down.svg',
        errorMessages: {
          required: 'Categoria é um campo obrigatório',
        },
        placeholder: 'Escolha a categoria',
        validators: [Validators.required],
        options: [
          { label: 'Internet', value: Category.INTERNET },
          { label: 'Entretenimento', value: Category.ENTRETENIMENTO },
          { label: 'Casa', value: Category.CASA },
          { label: 'Educação', value: Category.EDUCACAO },
          { label: 'Saúde', value: Category.SAUDE },
          { label: 'Ferramenta', value: Category.FERRAMENTA },
          { label: 'Cartão', value: Category.CARTAO },
          { label: 'Roupas', value: Category.ROUPAS },
          { label: 'Transporte', value: Category.TRANSPORTE },
          { label: 'Alimentação', value: Category.ALIMENTACAO },
        ],
        width: 'full',
      },
      {
        label: 'Banco',
        formControlName: 'account',
        type: 'text',
        required: true,
        errorMessages: {
          required: 'Banco é um campo obrigatório',
        },
        placeholder: 'Digite o nome do banco',
        validators: [Validators.required],
        width: 'full',
      },
      {
        label: 'Tipo de gasto',
        formControlName: 'type',
        type: 'select',
        required: true,
        errorMessages: {
          required: 'Tipo de gasto é um campo obrigatório',
        },
        placeholder: 'Escolha o tipo de gasto',
        icon: 'icons/chevron-down.svg',
        validators: [Validators.required],
        options: [
          { label: 'Fixo', value: Type.FIXO },
          { label: 'Variável', value: Type.VARIAVEL },
        ],
        width: 'full',
      },
      {
        label: 'Forma de pagamento',
        formControlName: 'method',
        type: 'select',
        required: true,
        errorMessages: {
          required: 'Forma de pagamento é um campo obrigatório',
        },
        placeholder: 'Escolha a forma de pagamento',
        icon: 'icons/chevron-down.svg',
        validators: [Validators.required],
        options: [
          { label: 'Crédito', value: Method.CREDITO },
          { label: 'Débito', value: Method.DEBITO },
          { label: 'Boleto', value: Method.BOLETO },
          { label: 'PIX', value: Method.PIX },
          { label: 'Dinheiro', value: Method.DINHEIRO },
        ],
        width: 'full',
      },
    ],
  };
}
