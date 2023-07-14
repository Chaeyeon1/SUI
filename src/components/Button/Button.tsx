import * as React from 'react';
import clsx from 'clsx';
import {
  baseStyles,
  sizeStyles,
  variantStyles,
  colorStyles,
  disabledStyles,
  disabledVariantStyles,
} from './Button.style';
import { ButtonProps } from './Button.type';

export function Button({
  className,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  const buttonClass = disabled
    ? clsx(
        className,
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledStyles,
        disabledVariantStyles[variant]
      )
    : clsx(
        className,
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        colorStyles[variant][color]
      );

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
