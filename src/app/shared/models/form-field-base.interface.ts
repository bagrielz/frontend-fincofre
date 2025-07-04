export interface FormFieldBase {
  label: string;
  formControlName: string;
  type: string;
  required?: boolean;
  errorMessages?: { [key: string]: string };
  placeholder?: string;
  icon?: string;
  validators?: any[];
  options?: { label: string; value: string }[];
  width?: 'full' | 'half';
  step?: string;
  min?: string;
}
