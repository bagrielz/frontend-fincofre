export interface FormFieldBase {
  label: string;
  formControlName: string;
  type: string;
  required?: boolean;
  errorMessages?: { [key: string]: string };
  placeholder?: string;
  icon?: string;
  validators?: any[];
  width?: 'full' | 'half';
}
