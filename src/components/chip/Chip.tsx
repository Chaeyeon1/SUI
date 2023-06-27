import clsx from 'clsx';
import React, { useState } from 'react';

interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  variant?: 'contained' | 'outlined';
  removable?: boolean;
  thumbnail?: boolean;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  text?: string;
  open?: boolean;
}
  
  const baseStyles = 'font-medium rounded  h-9 rounded-full px-3 pt-1 fit-content  ';
  
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
    open = true,
    ...props
  }:ChipProps) {
    const chipClass = disabled
    ? clsx(className, baseStyles, disabledSyles)
    : clsx(className, baseStyles, colorStyles[variant][color]);

    const [close, setClose] = useState(true);
  
    return (
        <div>
          {close ? (
            <div className={chipClass} {...props}>
              <div className='flex gap-2 pt-0.5'>
                  {thumbnail && <div className="bg-white rounded-xl w-6 opacity-80 cursor-pointer"></div>} 
                  <div>{text&&<div>{text}</div>}</div>
                  {thumbnail && <div className="bg-white rounded-xl w-6 opacity-80 hidden cursor-pointer"></div>} 
                  {removable && <div onClick={() => setClose(!close)} className="bg-white rounded-xl text-center
                  text-black w-6 opacity-80 cursor-pointer">x</div>}
              </div>
            </div>
            ):(
              <div className="hidden"></div>
            )}
        </div>
    );
  }