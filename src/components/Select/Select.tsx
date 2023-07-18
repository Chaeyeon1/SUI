import clsx from 'clsx';
import * as React from 'react';
import { baseStyles, optionStyles } from './Select.style';
import { SelectProps } from './Select.type';

export function Select({ className, children, color, ...props }: SelectProps) {
  const SelectOptoinClass = clsx(className, baseStyles, optionStyles[color]);

  return (
    <div className="select-wrapper" data-role="selectbox">
      <h2 className="hidden">select</h2>

      <div className="selectbox">
        <h2 className="hidden">selectbox</h2>
        <button type="button" className="toggle-btn">
          최애 프로그래밍 언어
          <img src="./img/icon-Triangle-down.svg" alt="" className="ico-down" />
        </button>
        <ul className="selectbox-option hide">
          <li>
            <button type="button" className={SelectOptoinClass}>
              Python
            </button>
          </li>
          <li>
            <button type="button" className={SelectOptoinClass}>
              Java
            </button>
          </li>
          <li>
            <button type="button" className={SelectOptoinClass}>
              JavaScript
            </button>
          </li>
          <li>
            <button type="button" className={SelectOptoinClass}>
              C#
            </button>
          </li>
          <li>
            <button type="button" className={SelectOptoinClass}>
              C/C++
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

Select.defaultProps = {
  color: 'primary',
};
