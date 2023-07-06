import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Dialog } from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <Dialog
    className={args.className}
    size={args.size}
    color={args.color}
    open={args.open}
    title={args.title}
    content={args.content}
    action1={args.action1}
    action2={args.action2}
  ></Dialog>
);

export const DialogStory = Template.bind({});
DialogStory.storyName = 'Dialog';
DialogStory.args = {
  className: '',
  color: 'primary',
  size: 'medium',
  open: false,
  title: 'title',
  content: 'content',
  action1: 'action',
  action2: 'action',
};

export const ChipStory = Template.bind({});
ChipStory.storyName = 'Dialog';
ChipStory.args = {
  className: '',
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  disabled: false,
  text: 'Chip',
};

export const DialogVariationsStory = () => {
  return <div></div>;
};

DialogVariationsStory.storyName = 'Dialog Variations';
