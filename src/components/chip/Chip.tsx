import clsx from 'clsx';
import * as React from 'react';
import { baseStyles, colorStyles, disabledStyles } from './Chip.style';
import { ChipProps } from './Chip.type';

export function Chip({
  className,
  variant = 'contained',
  color = 'primary',
  disabled = false,
  removable = false,
  text,
  children,
  ...props
}: ChipProps) {
  const chipClass = disabled
    ? clsx(className, baseStyles, disabledStyles)
    : clsx(className, baseStyles, colorStyles[variant][color]);

  return (
    <div className={chipClass} {...props}>
      <div className="flex gap-2 pt-0.5">
        <div>{text && <div>{text}</div>}</div>
        {removable && (
          <div
            className="bg-white rounded-xl text-center
                  text-black w-6 opacity-80 cursor-pointer"
          >
            x
          </div>
        )}
      </div>
    </div>
  );
}
