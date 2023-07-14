export const baseStyles = 'font-medium rounded';

export const sizeStyles = {
    small: 'text-xs px-2.5 py-1.5',
    medium: 'text-sm leading-4 px-3 py-2',
    large: 'text-sm px-4 py-2',
  };
  
export  const variantStyles = {
    contained: 'border border-transparent',
    outlined: 'bg-transparent border',
    text: 'bg-transparent border-transparent',
  };
  
export const colorStyles = {
    text: {
      primary:
        'text-black bg-transparent hover:bg-primary-50 active:bg-primary-100',
      secondary:
        'text-black bg-transparent hover:bg-secondary-50 active:bg-secondary-100',
    },
    contained: {
      primary:
        'text-white bg-primary-default hover:bg-primary-600 active:bg-primary-500 rounded-lg',
      secondary:
        'text-white bg-secondary-default hover:bg-secondary-600 active:bg-secondary-500 rounded-lg',
    },
    outlined: {
      primary:
        'text-primary-default border-primary-default hover:bg-primary-50 active:bg-primary-100',
      secondary:
        'text-secondary-500 border-secondary-500 hover:bg-secondary-50 active:bg-secondary-100',
    },
  };
  
export const disabledStyles = 'cursor-default pointer-events-none';

export const disabledVariantStyles = {
    contained: 'text-gray-300 bg-gray-100',
    outlined: 'text-gray-300 border-gray-300',
    text: 'text-gray-300 bg-gray-100',
  };