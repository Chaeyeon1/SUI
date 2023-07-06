import clsx from 'clsx';
import * as React from 'react';

interface DialogProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary' | 'basic';
  title?: string;
  content?: string;
  action1?: string;
  action2?: string;
  size?: 'small' | 'medium' | 'large';
  open?: boolean;
}

const baseStyles = '';

const colorStyles = {
  primary: '',
  secondary: '',
  basic: '',
};

const sizeStyles = {
  small: '',
  medium: '',
  large: '',
};

export function Dialog({
  className,
  color = 'primary',
  title,
  content,
  action1,
  action2,
  size = 'medium',
  open = true,
  ...props
}: DialogProps) {
  const dialogClass = clsx(
    className,
    baseStyles,
    colorStyles[color],
    sizeStyles[size]
  );

  return (
    <div className={dialogClass} {...props}>
      <div>{title}</div>
      <div>{content}</div>
      <div>
        <div>{action1}</div>
        <div>{action2}</div>
      </div>
    </div>
  );
}
