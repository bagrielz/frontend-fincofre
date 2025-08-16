import { FormConfig } from '../shared/models/form-config.interface';

export function getProfileFormConfig(): FormConfig {
  return {
    title: 'Meu perfil >',
    highlight: 'Informações pessoais',
    subtitle: 'Deseja alterar suas informações?',
    description: 'Fique à vontade para alterar as informações que você quer.',
    buttons: [
      {
        type: 'primary',
        text: 'Salvar',
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
      },
      {
        label: 'Login',
        formControlName: 'login',
        type: 'text',
      },
      {
        label: 'E-mail',
        formControlName: 'email',
        type: 'email',
      },
      {
        label: 'Senha',
        formControlName: 'password',
        type: 'password',
      },
    ],
  };
}
