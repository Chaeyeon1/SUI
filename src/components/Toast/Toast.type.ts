export interface ToastProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  variant?: 'contained' | 'outlined';
  type?: 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  open?: boolean;
}