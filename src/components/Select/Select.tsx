import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import {
  baseStyles,
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
  const SelectOptionClass = clsx(className, baseStyles, optionStyles[color]);

  const [open, setOpen] = useState(false);
  const [selectContent, setSelectContent] = useState('');
  const menuRef = useRef<HTMLUListElement>(null);

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
        <button
          type="button"
          className={inputStyles}
          onClick={() => setOpen(!open)}
        >
          {selectContent}
        </button>
        <ul ref={menuRef} className={menuStyles[open ? 'notHidden' : 'hidden']}>
          {options?.map((option) => (
            <li
              key={option.id}
              className={SelectOptionClass}
              onClick={() => {
                console.log('클릭했는데 왜  안 되냐 죽을래?');
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
