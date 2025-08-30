import { Validators } from '@angular/forms';
import { FormConfig } from '../../shared/models/form-config.model';

export function getUpdateSpentFormConfig(): FormConfig {
  return {
    title: 'Gastos >',
    highlight: 'Editar gasto',
    subtitle: 'Editar gasto',
    description: 'Edite o gasto conforme a sua necessidade.',
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
          { label: 'Agendado', value: 'agendado' },
          { label: 'Concluído', value: 'concluido' },
          { label: 'Cancelado', value: 'cancelado' },
          { label: 'Aguardando', value: 'aguardando' },
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
          { label: 'Internet', value: 'internet' },
          { label: 'Entretenimento', value: 'entretenimento' },
          { label: 'Casa', value: 'casa' },
          { label: 'Educação', value: 'educação' },
          { label: 'Saúde', value: 'saúde' },
          { label: 'Ferramenta', value: 'ferramenta' },
          { label: 'Cartão', value: 'cartão' },
          { label: 'Roupas', value: 'roupas' },
          { label: 'Transporte', value: 'transporte' },
          { label: 'Alimentação', value: 'alimentação' },
        ],
        width: 'full',
      },
      {
        label: 'Banco',
        formControlName: 'bank',
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
        formControlName: 'spentType',
        type: 'select',
        required: true,
        errorMessages: {
          required: 'Tipo de gasto é um campo obrigatório',
        },
        placeholder: 'Escolha o tipo de gasto',
        icon: 'icons/chevron-down.svg',
        validators: [Validators.required],
        options: [
          { label: 'Fixo', value: 'fixo' },
          { label: 'Variável', value: 'variavel' },
        ],
        width: 'full',
      },
      {
        label: 'Forma de pagamento',
        formControlName: 'status',
        type: 'select',
        required: true,
        errorMessages: {
          required: 'Forma de pagamento é um campo obrigatório',
        },
        placeholder: 'Escolha a forma de pagamento',
        icon: 'icons/chevron-down.svg',
        validators: [Validators.required],
        options: [
          { label: 'Crédito', value: 'credito' },
          { label: 'Débito', value: 'debito' },
          { label: 'Boleto', value: 'boleto' },
          { label: 'PIX', value: 'pix' },
          { label: 'Dinheiro', value: 'dinheiro' },
        ],
        width: 'full',
      },
    ],
  };
}
