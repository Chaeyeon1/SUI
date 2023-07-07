import React, { useState } from 'react';
import clsx from 'clsx';

interface AccordionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  value?: boolean;
  auto?: boolean;
  text?: string;
}

interface AccordionSummaryProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color: 'primary' | 'secondary';
  disabled?: boolean;
  text?: string;
  value: boolean;
}

const baseStyles =
  'flex align-middle w-full justify-between cursor-pointer rounded-t font-medium shadow-gray-300 items-center p-4';

const colorStyles = {
  primary:
    'text-black shadow-md shadow-gray-300 hover:bg-primary-50 active:bg-primary-100',
  secondary:
    'text-black shadow-md shadow-gray-300 hover:bg-secondary-50 active:bg-secondary-100',
};

const disabledSyles = 'cursor-default pointer-events-none bg-gray-300';

export const Accordion = ({
  className,
  children,
  text,
  auto,
  value,
  color = 'primary',
  disabled,
  ...props
}: AccordionProps) => {
  const [open, setOpen] = useState(false);

  const accordionClass = disabled
    ? clsx(className, 'min-w-fit', disabledSyles)
    : clsx(className, 'min-w-fit', colorStyles[color]);

  return (
    <div className={accordionClass} {...props}>
      {auto ? (
        <>
          <AccordionSummary
            text={text}
            color={color}
            onClick={() => setOpen(!open)}
            value={open}
          />
          <AccordionDetail value={open}>{children}</AccordionDetail>
        </>
      ) : (
        children
      )}
    </div>
  );
};

export const AccordionSummary = ({
  className,
  color = 'primary',
  disabled = false,
  value,
  children,
  text: title,
  ...props
}: AccordionSummaryProps) => {
  const accordionClass = disabled
    ? clsx(className, baseStyles, disabledSyles)
    : clsx(className, baseStyles, colorStyles[color]);

  return (
    <div className={accordionClass} {...props}>
      <div className="flex justify-start font-semibold text-base">
        <div className="mr-2">{title}</div>
        {children}
      </div>
      {value ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z"
            fill="#9099AE"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
            fill="#9099AE"
          />
        </svg>
      )}
    </div>
  );
};

export const AccordionDetail = ({
  className,
  color = 'primary',
  size = 'medium',
  disabled = false,
  children,
  text: title,
  value,
  ...props
}: AccordionProps) => {
  return (
    <>
      {!value ? (
        <></>
      ) : (
        <div
          {...props}
          className="bg-white w-full shadow-md shadow-gray-300 p-4"
        >
          {children}
        </div>
      )}
    </>
  );
};
