export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'underline' | 'outlined';
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
}