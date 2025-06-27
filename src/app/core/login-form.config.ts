import { Validators } from '@angular/forms';
import { FormConfig } from '../shared/models/form-config.interface';

export function getLoginForm(): FormConfig {
  return {
    title: 'Controle seu dinheiro, alcance seus objetivos.',
    highlight: 'Faça login na sua conta FinCofre',
    buttons: [
      {
        type: 'primary',
        text: 'Entrar',
      },
      {
        type: 'secondary',
        text: 'Criar uma conta gratuita',
      },
    ],
    fields: [
      {
        label: 'E-mail',
        formControlName: 'email',
        type: 'email',
        required: true,
        errorMessages: {
          required: 'E-mail é um campo obrigatório',
        },
        placeholder: 'Digite o seu e-mail',
        validators: [Validators.required],
      },
      {
        label: 'Senha',
        formControlName: 'password',
        type: 'password',
        required: true,
        errorMessages: {
          required: 'Senha é um campo obrigatório',
        },
        placeholder: 'Digite a sua senha',
        validators: [Validators.required],
      },
    ],
  };
}
