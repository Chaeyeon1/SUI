import * as React from 'react';
import clsx from 'clsx';
import {
  baseStyles,
  typeStyles,
  sizeStyles,
  borderStyles,
  containedBaseStyles,
  outlinedBaseStyles,
  outlinedIconStyles,
  containedIconStyles,
} from './Toast.style';
import { ToastProps } from './Toast.type';

export function Toast({
  className,
  type = 'success',
  variant = 'contained',
  size = 'small',
  open = false,
  children,
  ...props
}: ToastProps) {
  const ToastClass = clsx(
    className,
    baseStyles,
    typeStyles[type][variant],
    sizeStyles[size]
  );

  return (
    <>
      {open && (
        <div className={ToastClass} {...props}>
          <div className="flex items-center">
            {variant === 'contained' ? (
              <div className={clsx(containedBaseStyles, borderStyles[type])}>
                <img src={containedIconStyles[type].img} />
              </div>
            ) : (
              <div className={clsx(outlinedBaseStyles)}>
                <div className={outlinedIconStyles[type].className}>
                  <img src={outlinedIconStyles[type].img} />
                </div>
              </div>
            )}
            <div className="flex items-center">{children}</div>
            {variant === 'outlined' && (
              <div className="text-black w-10 flex justify-end cursor-pointer">
                x
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
