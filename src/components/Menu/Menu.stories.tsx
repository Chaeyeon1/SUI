import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Menu, MenuItem } from './Menu';
import Star from '../../assets/star.svg';

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

export const MenuVariations = () => {
  return (
    <div className="card max-w-800 p-3">
      <h1 className="text-2xl font-medium mb-2">Menu</h1>

      <h2 className="text-xl mt-6">Contained Chips</h2>
      <div className="mt-1">
        <MenuItem icon={<img src={Star} />} text="Menu" />
      </div>
    </div>
  );
};

export const MenuItemVariations = () => {
  return (
    <div className="card max-w-800 p-3">
      <h1 className="text-2xl font-medium mb-2">Menu Item</h1>

      <h2 className="text-xl mt-6">Icon</h2>
      <div className="mt-1 flex gap-4">
        <MenuItem text={'Hello'} />
        <MenuItem icon={<img src={Star} />} text={'Hello'} />
      </div>

      <h2 className="text-xl mt-6">Color</h2>
      <div className="mt-1 flex gap-4">
        <MenuItem icon={<img src={Star} />} color="primary" text={'Primary'} />
        <MenuItem
          icon={<img src={Star} />}
          color="secondary"
          text={'Secondary'}
        />
      </div>
    </div>
  );
};
