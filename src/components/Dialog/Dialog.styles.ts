export const baseStyles =
  'z-200 drop-shadow-lg flex flex-col justify-between bg-opacity-100';

export const brightnessStyles = {
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

export const sizeStyles = {
  small: 'min-w-[250px] w-fit h-24 py-3 px-5 ',
  medium: 'min-w-[350px] w-fit h-36 p-6',
  large: 'min-w-[450px] w-fit h-44 p-8',
};

export const titleStyles = {
  small: 'text-lg font-bold',
  medium: 'text-xl font-bold',
  large: 'text-2xl font-bold',
};

export const textStyles = {
  small: 'text-base',
  medium: 'text-lg',
  large: 'text-xl',
};

export const actionBaseStyles = {
  small: 'cursor-pointer text-base',
  medium: 'cursor-pointer text-lg',
  large: 'cursor-pointer text-xl',
};

export const confirmStyles = {
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

export const cancelStyles = {
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