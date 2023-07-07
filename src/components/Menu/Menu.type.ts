import { ReactNode } from 'react';

export interface MenuProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary';
  text?: string;
  array?: any;
}

export interface MenuItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary';
  text?: string;
  icon?: ReactNode;
}
