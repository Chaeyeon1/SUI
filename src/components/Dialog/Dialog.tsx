import clsx from 'clsx';
import * as React from 'react';
import { DialogProps } from './Dialog.type';
import {
  baseStyles,
  brightnessStyles,
  sizeStyles,
  titleStyles,
  textStyles,
  actionBaseStyles,
  confirmStyles,
  cancelStyles,
} from './Dialog.styles';

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({
    className,
    color = 'primary',
    brightness = 'dark',
    title,
    content,
    confirm = 'confirm',
    cancel = 'cancel',
    size = 'medium',
    open = false,
    children,
    setOpen,
    anchorEl,
    confirmAction,
    ...props
  }) => {
    const dialogClass = clsx(
      className,
      baseStyles,
      brightnessStyles[color][brightness],
      sizeStyles[size]
    );

    const popupRef = React.useRef<HTMLDivElement>(null);

    const closeHandler = (e: any) => {
      if (!popupRef.current?.contains(e.target)) {
        setOpen && setOpen(false);
      }
    };

    React.useEffect(() => {
      document.addEventListener('mousedown', closeHandler);
      return () => {
        document.removeEventListener('mousedown', closeHandler);
      };
    }, []);

    return (
      <>
        {open && (
          <div className="w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center absolute inset-0  backdrop-blur-md">
            <div className={dialogClass} ref={popupRef} {...props}>
              <div className={clsx(titleStyles[size])}>{title}</div>
              <div className={clsx(textStyles[size])}>{content}</div>
              {children}
              <div className="flex justify-end gap-4">
                {(confirm || confirmAction) && (
                  <div
                    className={clsx(
                      confirmStyles[color][brightness],
                      actionBaseStyles[size]
                    )}
                    onClick={confirmAction}
                  >
                    {confirm}
                  </div>
                )}
                {cancel && (
                  <div
                    className={clsx(
                      cancelStyles[color][brightness],
                      actionBaseStyles[size]
                    )}
                    onClick={() => setOpen && setOpen(false)}
                  >
                    {cancel}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);
