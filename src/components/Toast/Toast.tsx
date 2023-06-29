import * as React from 'react';
import clsx from 'clsx';

interface ToastProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  variant?: 'contained' | 'outlined';
  type?: 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
}

const baseStyles = 'font-medium rounded  h-9 rounded';

const variantStyles = {
  contained: 'text-black',
  outlined: 'text-black',
};

const type = {
  success: '',
  error: '',
  info: '',
  warning: '',
};

const size = {
  small: '',
  medium: '',
  large: '',
};

export function Toast({
  className,
  type = 'error',
  variant = 'contained',
  children,
  ...props
}: ToastProps) {
  const ToastClass = clsx(className, baseStyles);

  return (
    <div className={ToastClass} {...props}>
      <div className="flex gap-2 pt-0.5">{children}</div>
    </div>
  );
}
