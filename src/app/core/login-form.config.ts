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
    ],
  };
}
