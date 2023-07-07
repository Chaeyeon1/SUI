import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Menu } from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <Menu className={args.className} color={args.color}>
    {args.text}
  </Menu>
);

export const MenuStory = Template.bind({});
MenuStory.storyName = 'Menu';
MenuStory.args = {
  className: '',
  color: 'primary',
  disabled: false,
  text: 'Chip',
};

export const Preview = () => {
  return (
    <div className="card max-w-800 p-3">
      <h1 className="text-2xl font-medium mb-2">Chips</h1>

      <h2 className="text-xl mt-6">Contained Chips</h2>
      <div className="mt-1">
        <div className="flex items-end gap-4">
          <Menu className="ml-2" color="primary" text="primary"></Menu>
          <Menu className="ml-2" color="secondary" text="secondary"></Menu>
          <Menu className="ml-2" disabled text="disabled"></Menu>
        </div>
      </div>
    </div>
  );
};
