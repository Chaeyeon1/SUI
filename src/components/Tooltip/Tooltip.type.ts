export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary' | 'basic';
  size?: 'small' | 'medium' | 'large';
  direction?: 'top' | 'bottom' | 'right' | 'left';
  children?: string;
}