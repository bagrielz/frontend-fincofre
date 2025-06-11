import { Validators } from '@angular/forms';
import { FormConfig } from '../shared/models/form-config.interface';

export function getAddSpentFormConfig(): FormConfig {
  return {
    title: 'Gastos >',
    highlight: 'Adicionar gasto',
    subtitle: 'Novo gasto',
    description: 'Adicione um novo gasto preenchendo todos os campos abaixo.',
    fields: [
      {
        label: 'Nome do gasto',
        formControlName: 'spent',
        type: 'text',
        required: true,
        errorMessages: {
          required: 'Nome do gasto é um campo obrigatório',
        },
        placeholder: 'Escolha um nome para o gasto',
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
        validators: [Validators.required],
        options: [
          { label: 'Agendado', value: 'agendado' },
          { label: 'Concluído', value: 'concluido' },
          { label: 'Cancelado', value: 'cancelado' },
        ],
        width: 'full',
      },
    ],
  };
}
