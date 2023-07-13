import React, { useState } from 'react';
import clsx from 'clsx';
import Up from '../../assets/up.svg';
import Down from '../../assets/down.svg';
import { baseStyles, colorStyles, disabledStyles } from './Accordion.style';
import { AccordionProps, AccordionSummaryProps } from './Accordion.type';

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
    ? clsx(className, 'min-w-fit', disabledStyles)
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
  text,
  ...props
}: AccordionSummaryProps) => {
  const accordionClass = disabled
    ? clsx(className, baseStyles, disabledStyles)
    : clsx(className, baseStyles, colorStyles[color]);

  return (
    <div className={accordionClass} {...props}>
      <div className="flex justify-start font-semibold text-base">
        <div className="mr-2">{text}</div>
        {children}
      </div>
      {value ? <img src={Up} alt="Up" /> : <img src={Down} alt="Down" />}
    </div>
  );
};

export const AccordionDetail = ({
  className,
  color = 'primary',
  size = 'medium',
  disabled = false,
  children,
  value,
  ...props
}: AccordionProps) => {
  return (
    <>
      {value && (
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
