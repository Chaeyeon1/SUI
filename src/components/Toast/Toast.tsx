import * as React from 'react';
import clsx from 'clsx';

interface ToastProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  variant?: 'contained' | 'outlined';
  type?: 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  open?: boolean;
}

const baseStyles =
  'font-medium rounded rounded-lg py-3 drop-shadow-md w-fit pl-3 pr-5 z-100';

const typeStyles = {
  success: {
    contained: 'bg-success-100',
    outlined: 'bg-white border-2 border-success-500',
  },
  error: {
    contained: 'bg-error-100',
    outlined: 'bg-white border-2 border-error-500',
  },
  info: {
    contained: 'bg-info-100',
    outlined: 'bg-white border-2 border-info-500',
  },
  warning: {
    contained: 'bg-warning-100',
    outlined: 'bg-white border-2 border-warning-500',
  },
};

const sizeStyles = {
  small: 'h-30',
  medium: 'h-50',
  large: 'h-70',
};

const borderStyles = {
  success: 'border-success-500',
  error: ' border-error-500',
  info: ' border-info-500',
  warning: ' border-warning-500',
};

const containedBaseStyles = 'w-30 h-38 border-r-2 pr-2 mr-2';

const outlinedBaseStyles = 'w-30 h-38 pr-2 mr-2';

const outlinedIconStyles = {
  success: (
    <div className="bg-success-100 rounded-bl-lg rounded-t-full rounded-br-full w-9 h-9 flex justify-center items-center">
      <svg
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="AlertCheckCircle">
          <path
            id="Vector"
            d="M20.0466 8.84331L12.0837 16.5316L7.74574 12.355L6.04199 14L12.0837 19.8333L21.7503 10.5L20.0466 8.84331ZM14.5003 2.33331C7.83033 2.33331 2.41699 7.55998 2.41699 14C2.41699 20.44 7.83033 25.6666 14.5003 25.6666C21.1703 25.6666 26.5837 20.44 26.5837 14C26.5837 7.55998 21.1703 2.33331 14.5003 2.33331ZM14.5003 23.3333C9.15949 23.3333 4.83366 19.1566 4.83366 14C4.83366 8.84331 9.15949 4.66665 14.5003 4.66665C19.8412 4.66665 24.167 8.84331 24.167 14C24.167 19.1566 19.8412 23.3333 14.5003 23.3333Z"
            fill="#4CAF50"
          />
        </g>
      </svg>
    </div>
  ),
  error: (
    <div className="bg-error-100 rounded-bl-lg rounded-t-full rounded-br-full w-9 h-9 flex justify-center items-center">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.083 13.75H11.9163V15.5833H10.083V13.75ZM10.083 6.41665H11.9163V11.9166H10.083V6.41665ZM10.9905 1.83331C5.93051 1.83331 1.83301 5.93998 1.83301 11C1.83301 16.06 5.93051 20.1666 10.9905 20.1666C16.0597 20.1666 20.1663 16.06 20.1663 11C20.1663 5.93998 16.0597 1.83331 10.9905 1.83331ZM10.9997 18.3333C6.94801 18.3333 3.66634 15.0516 3.66634 11C3.66634 6.94831 6.94801 3.66665 10.9997 3.66665C15.0513 3.66665 18.333 6.94831 18.333 11C18.333 15.0516 15.0513 18.3333 10.9997 18.3333Z"
          fill="#F44336"
        />
      </svg>
    </div>
  ),
  info: (
    <div className="bg-info-100 rounded-bl-lg rounded-t-full rounded-br-full w-9 h-9 flex justify-center items-center">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.083 6.41665H11.9163V8.24998H10.083V6.41665ZM10.083 10.0833H11.9163V15.5833H10.083V10.0833ZM10.9997 1.83331C5.93967 1.83331 1.83301 5.93998 1.83301 11C1.83301 16.06 5.93967 20.1666 10.9997 20.1666C16.0597 20.1666 20.1663 16.06 20.1663 11C20.1663 5.93998 16.0597 1.83331 10.9997 1.83331ZM10.9997 18.3333C6.95717 18.3333 3.66634 15.0425 3.66634 11C3.66634 6.95748 6.95717 3.66665 10.9997 3.66665C15.0422 3.66665 18.333 6.95748 18.333 11C18.333 15.0425 15.0422 18.3333 10.9997 18.3333Z"
          fill="#2196F3"
        />
      </svg>
    </div>
  ),
  warning: (
    <div className="bg-warning-100 rounded-bl-lg rounded-t-full rounded-br-full w-9 h-9 flex justify-center items-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5.99L19.53 19H4.47L12 5.99ZM12 2L1 21H23L12 2ZM13 16H11V18H13V16ZM13 10H11V14H13V10Z"
          fill="#ED6C02"
        />
      </svg>
    </div>
  ),
};

const containedIconStyles = {
  success: (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="AlertCheckCircle">
        <path
          id="Vector"
          d="M20.0466 8.84331L12.0837 16.5316L7.74574 12.355L6.04199 14L12.0837 19.8333L21.7503 10.5L20.0466 8.84331ZM14.5003 2.33331C7.83033 2.33331 2.41699 7.55998 2.41699 14C2.41699 20.44 7.83033 25.6666 14.5003 25.6666C21.1703 25.6666 26.5837 20.44 26.5837 14C26.5837 7.55998 21.1703 2.33331 14.5003 2.33331ZM14.5003 23.3333C9.15949 23.3333 4.83366 19.1566 4.83366 14C4.83366 8.84331 9.15949 4.66665 14.5003 4.66665C19.8412 4.66665 24.167 8.84331 24.167 14C24.167 19.1566 19.8412 23.3333 14.5003 23.3333Z"
          fill="#4CAF50"
        />
      </g>
    </svg>
  ),
  error: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.083 13.75H11.9163V15.5833H10.083V13.75ZM10.083 6.41665H11.9163V11.9166H10.083V6.41665ZM10.9905 1.83331C5.93051 1.83331 1.83301 5.93998 1.83301 11C1.83301 16.06 5.93051 20.1666 10.9905 20.1666C16.0597 20.1666 20.1663 16.06 20.1663 11C20.1663 5.93998 16.0597 1.83331 10.9905 1.83331ZM10.9997 18.3333C6.94801 18.3333 3.66634 15.0516 3.66634 11C3.66634 6.94831 6.94801 3.66665 10.9997 3.66665C15.0513 3.66665 18.333 6.94831 18.333 11C18.333 15.0516 15.0513 18.3333 10.9997 18.3333Z"
        fill="#F44336"
      />
    </svg>
  ),
  info: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.083 6.41665H11.9163V8.24998H10.083V6.41665ZM10.083 10.0833H11.9163V15.5833H10.083V10.0833ZM10.9997 1.83331C5.93967 1.83331 1.83301 5.93998 1.83301 11C1.83301 16.06 5.93967 20.1666 10.9997 20.1666C16.0597 20.1666 20.1663 16.06 20.1663 11C20.1663 5.93998 16.0597 1.83331 10.9997 1.83331ZM10.9997 18.3333C6.95717 18.3333 3.66634 15.0425 3.66634 11C3.66634 6.95748 6.95717 3.66665 10.9997 3.66665C15.0422 3.66665 18.333 6.95748 18.333 11C18.333 15.0425 15.0422 18.3333 10.9997 18.3333Z"
        fill="#2196F3"
      />
    </svg>
  ),
  warning: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.99L19.53 19H4.47L12 5.99ZM12 2L1 21H23L12 2ZM13 16H11V18H13V16ZM13 10H11V14H13V10Z"
        fill="#ED6C02"
      />
    </svg>
  ),
};

export function Toast({
  className,
  type = 'success',
  variant = 'contained',
  size = 'small',
  open = false,
  children,
  ...props
}: ToastProps) {
  const ToastClass = clsx(
    className,
    baseStyles,
    typeStyles[type][variant],
    sizeStyles[size]
  );

  return (
    <>
      {open && (
        <div className={ToastClass} {...props}>
          <div className="flex items-center">
            {variant === 'contained' ? (
              <div className={clsx(containedBaseStyles, borderStyles[type])}>
                {containedIconStyles[type]}
              </div>
            ) : (
              <div className={clsx(outlinedBaseStyles)}>
                {outlinedIconStyles[type]}
              </div>
            )}
            <div className="flex items-center">{children}</div>
            {variant === 'outlined' && (
              <div className="text-black w-10 flex justify-end cursor-pointer">
                x
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
