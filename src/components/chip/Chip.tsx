import * as React from 'react';
import clsx from 'clsx';
interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  variant?: 'contained' | 'outlined';
  removable?: boolean;
  thumbnail?: boolean;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  text?: string;
}
  
  const baseStyles = 'font-medium rounded  h-8 rounded-full px-3 pt-1 fit-content';
  
  const variantStyles = {
    contained: 'text-black',
    outlined: 'text-black',
  };

  const removable = {
    
  };

  const thumbnail = {

  };
  
  const disabledSyles = 'cursor-default pointer-events-none';

  const colorStyles = {
    contained: {
      primary: 'text-white bg-primary-500',
      secondary: 'text-white bg-secondary-500',
    },
    outlined: {
        primary:'focus:border-primary-500',
        secondary: 'focus:border-secondary-500',
    },
  };


  

  
  export function Chip({ //우리 컴포넌트 이름
    className,
    variant = 'contained',
    color = 'primary',
    disabled = false,
    removable = true,
    thumbnail = false,
    text,
    children,
    ...props
  }:ChipProps) {
    const chipClass = disabled
    ? clsx(className, baseStyles, disabledSyles)
    : clsx(className, baseStyles, colorStyles[variant][color]);
  
    return (
        <div className={chipClass} {...props}>
            <div className='flex gap-3'>
                {thumbnail && <div>thumbnail</div>} 
                <div>{text&&<div>{text}</div>}</div>   
                {removable && <div className="bg-white rounded-full text-black w-6 pl-2">x</div>}
            </div>
        </div>
    );
  }