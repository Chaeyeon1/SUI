import Success from '../../assets/success.svg';
import Error from '../../assets/error.svg';
import Info from '../../assets/info.svg';
import Warning from '../../assets/warning.svg';


export const baseStyles =
  'font-medium rounded rounded-lg py-3 drop-shadow-md w-fit pl-3 pr-5 z-100';

export const typeStyles = {
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

export const sizeStyles = {
  small: 'h-30',
  medium: 'h-50',
  large: 'h-70',
};

export const borderStyles = {
  success: 'border-success-500',
  error: ' border-error-500',
  info: ' border-info-500',
  warning: ' border-warning-500',
};

export const containedBaseStyles = 'w-30 h-38 border-r-2 pr-2 mr-2';

export const outlinedBaseStyles = 'w-30 h-38 pr-2 mr-2';

export const outlinedIconStyles = {
    success: {img : Success, className :"bg-success-100 rounded-bl-lg rounded-t-full rounded-br-full w-9 h-9 flex justify-center items-center"},
    error:{img : Error, className :"bg-error-100 rounded-bl-lg rounded-t-full rounded-br-full w-9 h-9 flex justify-center items-center"},
    info:{img : Info, className :"bg-info-100 rounded-bl-lg rounded-t-full rounded-br-full w-9 h-9 flex justify-center items-center"},
    warning:{img : Warning, className :"bg-warning-100 rounded-bl-lg rounded-t-full rounded-br-full w-9 h-9 flex justify-center items-center"}
};
export const containedIconStyles = {
    success: {img : Success},
    error:{img : Error},
    info:{img : Info},
    warning:{img : Warning}
};
