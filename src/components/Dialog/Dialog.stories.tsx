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
  />
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

export const DialogVariationsStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <h1 className="text-2xl font-medium mb-2">Dialog</h1>
      <h2 className="text-xl mt-6 ">color style</h2>
      <div className="flex items-end gap-4">
        <Dialog
          color="primary"
          size="small"
          title="title"
          content="primary"
          action1="action1"
          action2="action2"
        ></Dialog>
        <Dialog
          color="secondary"
          size="small"
          title="title"
          content="secondary"
          action1="action1"
          action2="action2"
        ></Dialog>
        <Dialog
          color="lightPrimary"
          size="small"
          title="title"
          content="light primary"
          action1="action1"
          action2="action2"
        ></Dialog>
        <Dialog
          color="lightSecondary"
          size="small"
          title="title"
          content="light secondary"
          action1="action1"
          action2="action2"
        ></Dialog>
        <Dialog
          color="basic"
          size="small"
          title="title"
          content="basic"
          action1="action1"
          action2="action2"
        ></Dialog>
      </div>
      <h2 className="text-xl mt-6 ">size</h2>
      <div className="flex items-end gap-4">
        <Dialog
          color="lightSecondary"
          size="small"
          title="title"
          content="small"
          action1="action1"
          action2="action2"
        ></Dialog>
        <Dialog
          color="lightSecondary"
          size="medium"
          title="title"
          content="medium"
          action1="action1"
          action2="action2"
        ></Dialog>
        <Dialog
          color="lightSecondary"
          size="large"
          title="title"
          content="large"
          action1="action1"
          action2="action2"
        ></Dialog>
      </div>
    </div>
  );
};

DialogVariationsStory.storyName = 'Dialog Variations';
