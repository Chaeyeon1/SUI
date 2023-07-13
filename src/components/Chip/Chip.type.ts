export interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
    variant?: 'contained' | 'outlined';
    removable?: boolean;
    color?: 'primary' | 'secondary';
    disabled?: boolean;
    text?: string;
  }