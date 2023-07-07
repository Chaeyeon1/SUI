import clsx from 'clsx';
import * as React from 'react';

interface SwitchProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  variant?: 'thin' | 'normal' | 'bold';
  color?: 'primary' | 'secondary';
  state?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

const variantStyles = {
  thin: '',
  normal: '',
  bold: '',
};

const colorStyles = {
  primary: '',
  secondary: '',
};

const sizeStyles = {
  small: '',
  medium: '',
  large: '',
};

export function Switch({
  className,
  variant = 'thin',
  color = 'primary',
  state = true,
  label = 'label',
  ...props
}: SwitchProps) {
  const SwitchClass = clsx(className, variantStyles, colorStyles, sizeStyles);

  return <div className={SwitchClass} {...props}></div>;
}
