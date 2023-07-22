import { ReactNode } from 'react';

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'primary' | 'secondary';
  array?: { id: number; content: string }[];
}

export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'primary' | 'secondary';
  text?: string;
  icon?: ReactNode;
}
