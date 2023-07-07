import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <Switch
    className={args.className}
    size={args.size}
    color={args.color}
    variant={args.variant}
    state={args.state}
    label={args.label}
  ></Switch>
);

export const SwitchStory = Template.bind({});
SwitchStory.storyName = 'Switch';
SwitchStory.args = {
  className: '',
  variant: 'thin',
  color: 'primary',
  size: 'medium',
  state: true,
  label: 'label',
};

export const SwitchVariationsStory = () => {
  return <div className="card max-w-800 p-3"></div>;
};

SwitchVariationsStory.storyName = 'Switch Variations';
