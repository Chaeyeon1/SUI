import clsx from 'clsx';
import * as React from 'react';

interface DialogProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary';
  brightness?: 'dark' | 'light' | 'white';
  title?: string;
  content?: string;
  confirm?: string;
  cancel?: string;
  size?: 'small' | 'medium' | 'large';
  open?: boolean;
  anchorEl?: any;
  setOpen?: any;
  confirmAction?: () => void;
}

const baseStyles =
  'z-100 drop-shadow-lg flex flex-col justify-between bg-opacity-100';

const brightnessStyles = {
  primary: {
    dark: 'bg-primary-500 text-white',
    light: 'bg-primary-50 text-black',
    white: 'bg-white text-black',
  },
  secondary: {
    dark: 'bg-secondary-500 text-white',
    light: 'bg-secondary-50 text-black',
    white: 'bg-white text-black',
  },
};

const sizeStyles = {
  small: 'min-w-[250px] w-fit h-24 py-3 px-5 ',
  medium: 'min-w-[350px] w-fit h-36 p-6',
  large: 'min-w-[450px] w-fit h-44 p-8',
};

const titleStyles = {
  small: 'text-lg font-bold',
  medium: 'text-xl font-bold',
  large: 'text-2xl font-bold',
};

const textStyles = {
  small: 'text-base',
  medium: 'text-lg',
  large: 'text-xl',
};

const actionBaseStyles = {
  small: 'cursor-pointer text-base',
  medium: 'cursor-pointer text-lg',
  large: 'cursor-pointer text-xl',
};

const confirmStyles = {
  primary: {
    dark: 'text-white hover:text-primary-100 active:text-primary-200',
    light: 'text-red-600 hover:bg-primary-100 active:bg-primary-200',
    white: 'text-red-600 hover:bg-primary-50 active:bg-primary-100',
  },
  secondary: {
    dark: 'text-white hover:text-secondary-100 active:text-secondary-200',
    light: 'text-red-600 hover:bg-secondary-100 active:bg-secondary-200',
    white: 'text-red-600 hover:bg-secondary-50 active:bg-secondary-100',
  },
};

const cancelStyles = {
  primary: {
    dark: 'text-white hover:text-primary-100 active:text-primary-200',
    light: 'text-green-700 hover:bg-primary-100 active:bg-primary-200',
    white: 'text-green-700 hover:bg-primary-50 active:bg-primary-100',
  },
  secondary: {
    dark: 'text-white hover:text-secondary-100 active:text-secondary-200',
    light: 'text-green-700 hover:bg-secondary-100 active:bg-secondary-200',
    white: 'text-green-700 hover:bg-secondary-50 active:bg-secondary-100',
  },
};

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
