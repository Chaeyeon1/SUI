export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  value?: boolean;
  auto?: boolean;
  text?: string;
}
