export interface FormFieldBase {
  label: string;
  formControlName: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  icon?: string;
  validators?: any[];
  width?: 'full' | 'half';
}
