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
    <div {...rest} className="select-wrapper" data-role="selectbox">
      <h2 className="hidden">select</h2>

      <div>
        <button
          type="button"
          className={inputStyles}
          onClick={() => setOpen(!open)}
        >
          {selectContent}
        </button>
        <ul ref={menuRef} className={menuStyles[open ? 'notHidden' : 'hidden']}>
          {options?.map((option, i) => {
            return (
              <li key={option.id} className={SelectOptionClass}>
                <button
                  onClick={() => {
                    setSelectContent(option.content);
                    setOpen(false);
                  }}
                  type="button"
                >
                  <span className="text-xs leading-6"> {option.content}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Select.defaultProps = {
  color: 'primary',
};
