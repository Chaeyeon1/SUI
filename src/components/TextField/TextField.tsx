import * as React from 'react';
import clsx from 'clsx';
import {
  baseStyles,
  sizeStyles,
  variantStyles,
  colorStyles,
  disabledStyles,
  disabledVariantStyles,
} from './TextField.style';
import { TextFieldProps } from './TextField.type';

export function TextField({
  className,
  variant = 'outlined',
  color = 'primary',
  size = 'medium',
  label,
  disabled = false,
  children,
  ...props
}: TextFieldProps) {
  const inputClass = disabled
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
    <div>
      {label && <div>{label}</div>}
      <input className={inputClass} disabled={disabled} {...props}></input>
    </div>
  );
}
