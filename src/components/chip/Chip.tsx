import * as React from 'react';
import clsx from 'clsx';
interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  variant?: 'contained' | 'outlined';
  type?: 'basic' | 'removable' |'thumbnail';
  color?: 'primary' | 'secondary';
//   size?: 'small' | 'medium' | 'large';
}
  
  const baseStyles = 'font-medium rounded';
  
//   const sizeStyles = {
//     small: 'text-xs px-2.5 py-1.5',
//     medium: 'text-sm leading-4 px-3 py-2',
//     large: 'text-sm px-4 py-2',
//   };
  
  const variantStyles = {
    contained: 'text-black focus:border-solid focus:border-2',
    // outlined: 'text-black border border-gray-500 focus:border-solid focus:border-2',
  };
  
  const colorStyles = {
    contained: {
      primary: 'text-white bg-primary-500',
      secondary: 'text-white bg-secondary-500',
    },
    // outlined: {
    //     primary:'focus:border-primary-500',
    //     secondary: 'focus:border-secondary-500',
    // },
  };
  
  const disabledSyles = 'cursor-default pointer-events-none';
  const disabledVariantSyles = {
    contained: 'text-gray-300 bg-gray-100 ',
    outlined: 'border-gray-300 bg-gray-200',
  };
  
  export function Chip({ //우리 컴포넌트 이름
    className,
    variant = 'contained',
    color = 'primary',
    // size = 'medium',
    disabled = false,
    children,
    ...props
  }:ChipProps) {
    const ChipClass = disabled
      ? clsx(
          className,
          baseStyles,
          variantStyles[variant],
        //   sizeStyles[size],
          disabledSyles,
          disabledVariantSyles[variant]
        )
      : clsx(
          className,
          baseStyles,
          variantStyles[variant],
        //   sizeStyles[size],
          colorStyles[variant][color]
        );
  
    return (
        <div className={ChipClass} disabled={disabled} {...props}> 
        </div>
    );
  }