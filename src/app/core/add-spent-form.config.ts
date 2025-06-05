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
        icon: 'icons/calendar.svg',
        validators: [Validators.required],
        width: 'full',
      },
    ],
  };
}
