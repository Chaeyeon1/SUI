import React from 'react';
import clsx from 'clsx';

interface AccordionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export const Accordion = (props: AccordionProps) => {
  return <div {...props}>{props.children}</div>;
};
