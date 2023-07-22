import * as React from 'react';
import { Dialog } from './Dialog';
import { Button } from '../Button';
import { DialogProps } from './Dialog.type';
import { ComponentLayout, Layout } from '../Layout';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: { onClick: { action: 'clicked' } },
};

export const Preview = (args: DialogProps) => <Dialog {...args} />;

export const DialogVariationsStory = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isOpen4, setIsOpen4] = React.useState(false);
  const [isOpen5, setIsOpen5] = React.useState(false);
  const [isOpen6, setIsOpen6] = React.useState(false);
  const [isOpen7, setIsOpen7] = React.useState(false);
  const [isOpen8, setIsOpen8] = React.useState(false);
  const [isOpen9, setIsOpen9] = React.useState(false);

  return (
    <Layout title="Dialog">
      <ComponentLayout title="dark">
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          click me
        </Button>
        <Dialog
          color="primary"
          brightness="dark"
          size="small"
          open={isOpen}
          setOpen={setIsOpen}
          title="title"
          content="primary"
          confirm="confirm"
          cancel="cancel"
        />
        <Button
          color="secondary"
          onClick={() => {
            setIsOpen2(true);
          }}
        >
          click me
        </Button>
        <Dialog
          color="secondary"
          brightness="dark"
          size="small"
          open={isOpen2}
          setOpen={setIsOpen2}
          title="title"
          content="secondary"
          confirm="confirm"
          cancel="cancel"
        />
      </ComponentLayout>
      <ComponentLayout title="light">
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            setIsOpen3(true);
          }}
        >
          click me
        </Button>
        <Dialog
          color="primary"
          brightness="light"
          size="small"
          open={isOpen3}
          setOpen={setIsOpen3}
          title="title"
          content="primary"
          confirm="confirm"
          cancel="cancel"
        />
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            setIsOpen4(true);
          }}
        >
          click me
        </Button>
        <Dialog
          color="secondary"
          brightness="light"
          size="small"
          open={isOpen4}
          setOpen={setIsOpen4}
          title="title"
          content="secondary"
          confirm="confirm"
          cancel="cancel"
        />
      </ComponentLayout>
      <ComponentLayout title="white">
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            setIsOpen5(true);
          }}
        >
          click me
        </Button>
        <Dialog
          color="primary"
          brightness="white"
          size="small"
          open={isOpen5}
          setOpen={setIsOpen5}
          title="title"
          content="primary"
          confirm="confirm"
          cancel="cancel"
        />
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            setIsOpen6(true);
          }}
        >
          click me
        </Button>
        <Dialog
          color="secondary"
          brightness="white"
          size="small"
          open={isOpen6}
          setOpen={setIsOpen6}
          title="title"
          content="secondary"
          confirm="confirm"
          cancel="cancel"
        />
      </ComponentLayout>
      <ComponentLayout title="sizes">
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            setIsOpen7(true);
          }}
        >
          click me
        </Button>
        <Dialog
          color="primary"
          brightness="white"
          size="small"
          open={isOpen7}
          setOpen={setIsOpen7}
          title="title"
          content="small"
          confirm="confirm"
          cancel="cancel"
        />
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            setIsOpen8(true);
          }}
        >
          click me
        </Button>
        <Dialog
          color="primary"
          brightness="white"
          size="medium"
          open={isOpen8}
          setOpen={setIsOpen8}
          title="title"
          content="medium"
          confirm="confirm"
          cancel="cancel"
        />
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            setIsOpen9(true);
          }}
        >
          click me
        </Button>
        <Dialog
          color="primary"
          brightness="white"
          size="large"
          open={isOpen9}
          setOpen={setIsOpen9}
          title="title"
          content="large"
          confirm="confirm"
          cancel="cancel"
        />
      </ComponentLayout>
    </Layout>
  );
};
