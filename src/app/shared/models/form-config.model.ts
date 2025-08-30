import { ButtonConfig } from './button-config.model';
import { FormFieldBase } from './form-field-base.model';

export interface FormConfig {
  title?: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
  buttons?: ButtonConfig[];
  fields: FormFieldBase[];
}
