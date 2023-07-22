export const baseStyles =
  'text-sm p-3 cursor-pointer transition-[background-color] duration-[0.2s] ease-[ease-in] w-full py-1.5';

export const optionStyles = {
  primary: 'hover:bg-primary-50 active:bg-primary-100',
  secondary: 'hover:bg-secondary-50 active:bg-secondary-100',
};

export const menuStyles = {
  hidden:
    'z-50 absolute bg-white w-fit rounded-2xl hidden shadow-md shadow-gray-300 w-[220px]',
  notHidden:
    'bg-white w-fit rounded-2xl shadow-md shadow-gray-300 w-[220px] z-50 absolute',
};

export const inputBaseStyles =
  'pl-4 h-9 w-[220px] cursor-pointer mb-[8px] text-xs leading-6 pr-20 py-1 shadow-md shadow-gray-200 rounded-2xl';

export const inputStyles = {
  open: {
    primary:
      'border border-solid border-primary-500 hover:border-primary-500 active:border-primary-600',
    secondary:
      'border border-solid border-secondary-500 hover:border-secondary-500 active:border-secondary-600',
  },
  notOpen: {
    primary:
      'border border-solid hover:border-primary-500 active:border-primary-600',
    secondary:
      'border border-solid hover:border-secondary-500 active:border-secondary-600',
  },
};

export const positionAbsolute = {
  position: 'absolute',
  zIndex: 100,
};
