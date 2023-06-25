import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Accordion } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Template: Story = (args) => (
  <Accordion
    className={args.className}
    variant={args.variant}
    color={args.color}
    size={args.size}
    disabled={args.disabled}
    onClick={args.onClick}
  >
    {args.text}
  </Accordion>
);

export const ABC = () => {
  return <Accordion>assadfdf</Accordion>;
};
