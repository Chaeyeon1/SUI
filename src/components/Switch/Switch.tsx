import clsx from 'clsx';
import * as React from 'react';
import { SwitchProps } from './Switch.type';
import {
  sizeStyles,
  variantStyles,
  colorStyles,
  buttonBaseStyles,
  buttonStyles,
} from './Switch.style';

export function Switch({
  className,
  variant = 'thin',
  color = 'primary',
  // state = true,
  label = 'label',
  size = 'small',
  ...props
}: SwitchProps) {
  const SwitchClass = clsx(
    className,
    variantStyles[variant],
    colorStyles[color][variant],
    sizeStyles[size]
  );

  const [state, setState] = React.useState(true);

  const switching = () => {
    setState(!state);
  };

  return (
    <div>
      <div className={SwitchClass} {...props}>
        <div>
          {state && (
            <div
              className={clsx(
                buttonBaseStyles[size],
                buttonStyles[variant][color]
              )}
              onClick={switching}
            ></div>
          )}
        </div>
        <div>
          {!state && (
            <div
              className={clsx(
                buttonBaseStyles[size],
                buttonStyles[variant][color]
              )}
              onClick={switching}
            ></div>
          )}
        </div>
      </div>
      {label && (
        <div text-black text-lg>
          {label}
        </div>
      )}
    </div>
  );
}
