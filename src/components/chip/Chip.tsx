import clsx from 'clsx';
import * as React from 'react';

interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  variant?: 'contained' | 'outlined';
  removable?: boolean;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  text?: string;
}
  const baseStyles = 'font-medium rounded  h-9 rounded-full px-3 pt-1 w-fit';
  
  const variantStyles = {
    contained: 'text-black',
    outlined: 'text-black',
  };

  const removable = {
  };

  
  const disabledSyles = 'cursor-default pointer-events-none';

  const colorStyles = {
    contained: {
      primary: 'text-white bg-primary-500',
      secondary: 'text-white bg-secondary-500',
    },
    outlined: {
        primary:'text-primary-500 bg-white border border-primary-500',
        secondary: 'text-secondary-500 bg-white border border-secondary-500',
    },
  };
  
  export function Chip({
    className,
    variant = 'contained',
    color = 'primary',
    disabled = false,
    removable = false,
    text,
    children,
    ...props
  }:ChipProps) {
    const chipClass = disabled
    ? clsx(className, baseStyles, disabledSyles)
    : clsx(className, baseStyles, colorStyles[variant][color]);
  
    return (
            <div className={chipClass} {...props}>
              <div className='flex gap-2 pt-0.5'>
                  <div>{text&&<div>{text}</div>}</div>
                  {removable && <div  className="bg-white rounded-xl text-center
                  text-black w-6 opacity-80 cursor-pointer">x</div>}
              </div>
            </div>
    );
  }