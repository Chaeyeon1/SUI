import * as React from 'react';
import clsx from 'clsx';
import {
  colorStyles,
  baseStyles,
  directionStyles,
  xButtonStyles,
} from './Tooltip.style';
import { TooltipProps } from './Tooltip.type';

export function Tooltip({
  className,
  color = 'primary',
  direction = 'top',
  children,
  open = true,
  setOpen,
  xButton = false,
  ...props
}: TooltipProps) {
  const TooltipClass = clsx(className, colorStyles[color], baseStyles);

  const TooltipToggle = () => {
    setOpen && setOpen(!open);
  };

  return (
    <>
      {open && (
        <div className={TooltipClass} {...props}>
          {children}
          <div className={clsx(directionStyles[direction][color])}></div>
          {xButton && (
            <div className={clsx(xButtonStyles)} onClick={TooltipToggle}>
              X
            </div>
          )}
        </div>
      )}
    </>
  );
}
