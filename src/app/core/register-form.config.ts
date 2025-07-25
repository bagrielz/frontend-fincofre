import { Validators } from '@angular/forms';
import { FormConfig } from '../shared/models/form-config.interface';

export function getRegisterForm(): FormConfig {
  return {
    title: 'Explore as melhores formas de controlar seu dinheiro.',
    highlight: 'Crie sua conta gratuitamente',
    buttons: [
      {
        type: 'primary',
        text: 'Criar',
      },
      {
        type: 'secondary',
        text: 'Cancelar',
      },
    ],
    fields: [
      {
        label: 'Nome',
        formControlName: 'name',
        type: 'text',
        required: true,
        errorMessages: {
          required: 'Nome é um campo obrigatório',
        },
        placeholder: 'Digite o seu nome completo',
        validators: [Validators.required],
      },
      {
        label: 'Usuário',
        formControlName: 'user',
        type: 'text',
        required: true,
        errorMessages: {
          required: 'Usuário é um campo obrigatório',
        },
        placeholder: 'Digite o seu usuário',
        validators: [Validators.required],
      },
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
      {
        label: 'Confirmar senha',
        formControlName: 'password',
        type: 'password',
        required: true,
        errorMessages: {
          required: 'Confirmar senha é um campo obrigatório',
        },
        placeholder: 'Confirme a sua senha',
        validators: [Validators.required],
      },
    ],
  };
}
