export interface SwitchProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  variant?: 'thin' | 'normal' | 'bold';
  color?: 'primary' | 'secondary';
  state?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
}