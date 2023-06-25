import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Accordion, AccordionSummary } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: AccordionSummary,
} as Meta;

const Template: Story = (args) => (
  <AccordionSummary
    className={args.className}
    color={args.color}
    size={args.size}
    disabled={args.disabled}
    onClick={args.onClick}
  >
    {args.text}
  </AccordionSummary>
);

export const ABC = () => {
  return (
    <div className="w-64">
      <Accordion>
        <AccordionSummary title={'assadfdf'}></AccordionSummary>
      </Accordion>
    </div>
  );
};
