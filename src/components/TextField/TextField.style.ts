export const baseStyles = 'font-medium rounded  focus:outline-none ';

export const sizeStyles = {
  small: 'text-xs px-2.5 py-1.5',
  medium: 'text-sm leading-4 px-3 py-2',
  large: 'text-sm px-4 py-2',
};

export const variantStyles = {
  underline: 'text-black focus:border-solid focus:border-2',
  outlined:
    'text-black border border-gray-500 focus:border-solid focus:border-2',
};

export const colorStyles = {
  underline: {
    primary:
      'text-black focus:border-primary-500 bg-white border-b-4 border-primary-500',
    secondary:
      'text-black focus:border-secondary-500 bg-white border-b-4 border-secondary-500',
  },
  outlined: {
    primary: 'focus:border-primary-500',
    secondary: 'focus:border-secondary-500',
  },
};

export const disabledStyles = 'cursor-default pointer-events-none';

export const disabledVariantStyles = {
  underline: 'text-gray-300 bg-gray-100 ',
  outlined: 'border-gray-300 bg-gray-200',
};