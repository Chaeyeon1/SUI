import * as React from 'react';
import clsx from 'clsx';
import { colorStyles, baseStyles, directionStyles } from './Tooltip.style';
import { TooltipProps } from './Tooltip.type';

export function Tooltip({
  className,
  color = 'primary',
  size = 'small',
  direction = 'top',
  children,
  ...props
}: TooltipProps) {
  const TooltipClass = clsx(className, colorStyles[color], baseStyles);
  return (
    <>
      <div className={TooltipClass} {...props}>
        {children}
        <div className={clsx(directionStyles[direction][color])}></div>
      </div>
    </>
  );
}
