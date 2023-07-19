import { ReactNode } from "react";

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary' | 'basic';
  direction?: 'top' | 'bottom' | 'right' | 'left';
  children?: ReactNode;
  open?:boolean;
}