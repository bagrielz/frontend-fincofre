import { FormFieldBase } from './form-field-base.interface';

export interface FormConfig {
  title: string;
  highlight: string | '';
  subtitle: string;
  description: string;
  fields: FormFieldBase[];
}
