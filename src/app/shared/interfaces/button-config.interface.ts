export interface ButtonConfig {
  type: 'primary' | 'secondary' | 'danger';
  text: string;
  icon?: string;
  link?: string;
  action?: () => void;
}
