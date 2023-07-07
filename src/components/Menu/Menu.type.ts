import { ReactNode } from 'react';

export interface MenuProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary';
  array?: { id: number; content: string }[];
}

export interface MenuItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary';
  text?: string;
  icon?: ReactNode;
}
