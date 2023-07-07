import React from 'react';
import clsx from 'clsx';
import { MenuItemProps, MenuProps } from './Menu.type';
import { baseStyles, colorStyles } from './Menu.style';
import { hoverStyles } from '../util/commonStyle';

export const Menu = ({
  className,
  color = 'primary',
  children,
  text,
  ...props
}: MenuProps) => {
  const menuClass = clsx(className, 'min-w-fit', colorStyles[color]);

  return (
    <div {...props} className={menuClass}>
      {children}
    </div>
  );
};

export const MenuItem = ({
  className,
  color = 'primary',
  icon,
  text,
  ...props
}: MenuItemProps) => {
  const menuItemClass = clsx(
    className,
    hoverStyles[color],
    baseStyles,
    colorStyles[color]
  );
  return (
    <div className={menuItemClass} {...props}>
      <div className={'flex items-center gap-2'}>
        {icon} {text}
      </div>
    </div>
  );
};
