export interface ButtonConfig {
  type: 'primary' | 'secondary' | 'danger';
  text: string;
  icon?: string;
  action?: () => void;
}
