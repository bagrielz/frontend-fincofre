import { Validators } from '@angular/forms';
import { FormConfig } from '../../shared/models/form-config.model';

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
        link: '/cadastrar',
      },
    ],
    fields: [
      {
        label: 'Login',
        formControlName: 'login',
        type: 'text',
        required: true,
        errorMessages: {
          required: 'Login é um campo obrigatório',
        },
        placeholder: 'Digite o seu login',
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
