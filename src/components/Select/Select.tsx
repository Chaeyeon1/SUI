import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import {
  baseStyles,
  inputBaseStyles,
  inputStyles,
  menuStyles,
  optionStyles,
} from './Select.style';
import { SelectProps } from './Select.type';
import { closeHandler } from '../util/closeHandler';

export const Select = ({
  className,
  children,
  options,
  color,
  ...rest
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [selectContent, setSelectContent] = useState('');
  const menuRef = useRef<HTMLUListElement>(null);

  const SelectOptionClass = clsx(className, baseStyles, optionStyles[color]);
  const InputOptionClass = clsx(
    inputBaseStyles,
    inputStyles[open ? 'open' : 'notOpen'][color]
  );

  useEffect(() => {
    document.addEventListener('mousedown', (e) =>
      closeHandler(e, menuRef, setOpen)
    );

    return () => {
      document.removeEventListener('mousedown', (e) =>
        closeHandler(e, menuRef, setOpen)
      );
    };
  }, []);

  return (
    <div {...rest}>
      <div>
        <div className={InputOptionClass} onClick={() => setOpen(!open)}>
          {selectContent}
        </div>
        <ul ref={menuRef} className={menuStyles[open ? 'notHidden' : 'hidden']}>
          {options?.map((option) => (
            <li
              key={option.id}
              className={SelectOptionClass}
              onClick={() => {
                setSelectContent(option.content);
                setOpen(false);
              }}
            >
              <button type="button">
                <span className="text-xs leading-6"> {option.content}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Select.defaultProps = {
  color: 'primary',
};
