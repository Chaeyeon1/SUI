import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Dialog } from './Dialog';
import { Button } from '../Button';

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
    confirm={args.confirm}
  ></Dialog>
);

export const DialogStory = Template.bind({});
DialogStory.storyName = 'Dialog';
DialogStory.args = {
  className: '',
  color: 'primary',
  brightness: 'dark',
  size: 'medium',
  open: false,
  title: 'title',
  content: 'content',
  confirm: 'confirm',
};

export const DialogVariationsStory = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const closeHandler = (e: any) => {
    if (!popupRef.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    // 4
    document.addEventListener('mousedown', closeHandler);
    return () => {
      document.removeEventListener('mousedown', closeHandler);
    };
  }, []);

  return (
    <div className="card max-w-800 p-3">
      <h1 className="text-2xl font-medium mb-2">Dialog</h1>
      <h2 className="text-xl mt-6 ">dark chip</h2>
      <div className="flex items-end gap-4">
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          click me
        </Button>
        <div onClick={(e) => e.stopPropagation()}>
          <Dialog
            color="primary"
            brightness="dark"
            size="small"
            open={isOpen}
            title="title"
            content="primary"
            confirm="confirm"
            ref={popupRef}
            cancel="cancel"
          ></Dialog>
        </div>
        <Dialog
          color="secondary"
          brightness="dark"
          size="small"
          // open={true}
          title="title"
          content="secondary"
          confirm="confirm"
          cancel="cancel"
        ></Dialog>
      </div>
      <h2 className="text-xl mt-6 ">light chip</h2>
      <div className="flex items-end gap-4">
        <Dialog
          color="primary"
          brightness="light"
          size="small"
          // open={true}
          title="title"
          content="primary"
          confirm="confirm"
          cancel="cancel"
        ></Dialog>
        <Dialog
          color="secondary"
          brightness="light"
          size="small"
          // open={true}
          title="title"
          content="secondary"
          confirm="confirm"
          cancel="cancel"
        ></Dialog>
      </div>
      <h2 className="text-xl mt-6 ">light chip</h2>
      <div className="flex items-end gap-4">
        <Dialog
          color="primary"
          brightness="white"
          size="small"
          // open={true}
          title="title"
          content="primary"
          confirm="confirm"
          cancel="cancel"
        ></Dialog>
        <Dialog
          color="secondary"
          brightness="white"
          size="small"
          // open={true}
          title="title"
          content="secondary"
          confirm="confirm"
          cancel="cancel"
        ></Dialog>
      </div>
      <h2 className="text-xl mt-6 ">sizes</h2>
      <div className="flex items-end gap-4">
        <Dialog
          color="secondary"
          brightness="light"
          size="small"
          // open={true}
          title="title"
          content="secondary"
          confirm="confirm"
          cancel="cancel"
        ></Dialog>
        <Dialog
          color="secondary"
          brightness="light"
          size="medium"
          // open={true}
          title="title"
          content="secondary"
          confirm="confirm"
          cancel="cancel"
        ></Dialog>
        <Dialog
          color="secondary"
          brightness="light"
          size="large"
          // open={true}
          title="title"
          content="secondary"
          confirm="confirm"
          cancel="cancel"
        ></Dialog>
      </div>
    </div>
  );
};

DialogVariationsStory.storyName = 'Dialog Variations';
