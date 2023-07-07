import React, { useState } from 'react';
import clsx from 'clsx';

interface MenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  text?: string;
}

const baseStyles = 'bg-white w-full shadow-md shadow-gray-300 p-4';

const colorStyles = {
  primary:
    'text-black shadow-md shadow-gray-300 hover:bg-primary-50 active:bg-primary-100',
  secondary:
    'text-black shadow-md shadow-gray-300 hover:bg-secondary-50 active:bg-secondary-100',
};

const disabledSyles = 'cursor-default pointer-events-none bg-gray-300';

export const Menu = ({
  className,
  color = 'primary',
  disabled = false,
  children,
  text: title,
  ...props
}: MenuProps) => {
  const menuClass = disabled
    ? clsx(className, 'min-w-fit', disabledSyles)
    : clsx(className, 'min-w-fit', colorStyles[color]);

  return (
    <div {...props} className={menuClass}>
      {children}
    </div>
  );
};
