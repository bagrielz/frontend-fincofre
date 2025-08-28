import { FormConfig } from '../shared/interfaces/form-config.interface';

export function getProfileFormConfig(): FormConfig {
  return {
    title: 'Meu perfil >',
    highlight: 'Informações',
    subtitle: 'Deseja alterar suas informações?',
    description:
      'Aqui você pode alterar as suas informações pessoais e as suas informações de acesso.',
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
        placeholder: 'Digite sua nova senha',
      },
    ],
  };
}
