import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Accordion, AccordionDetail, AccordionSummary } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Template: Story = (args) => (
  <Accordion
    value={args.value}
    className={args.className}
    color={args.color}
    disabled={args.disabled}
    onClick={args.onClick}
    title={args.title}
    auto
  />
);

export const AccordionStory = Template.bind({});
AccordionStory.storyName = 'Accordion';
AccordionStory.args = {
  className: '',
  color: 'primary',
  disabled: false,
  title: 'Accordion',
};

export const Preview = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl font-medium mb-2">Accordion</h1>
        <h2 className="text-xl mt-6">Primary</h2>
        <Accordion className="w-96 mb-4" value={open}>
          <AccordionSummary
            color="primary"
            onClick={() => setOpen(!open)}
            value={open}
            title={'아코디언'}
          />
          <AccordionDetail value={open}>아코디언입니다.</AccordionDetail>
        </Accordion>

        <Accordion auto className="w-96" title="자동 아코디언">
          아코디언입니다.
        </Accordion>
      </div>
      <div className="">
        <h2 className="text-xl mt-6">Secondary</h2>
        <Accordion color="secondary" className="w-96 mb-4" value={open2}>
          <AccordionSummary
            color="secondary"
            onClick={() => setOpen2(!open2)}
            value={open2}
            title={'아코디언'}
          />
          <AccordionDetail value={open2}>아코디언입니다.</AccordionDetail>
        </Accordion>
        <Accordion
          color="secondary"
          auto
          className="w-96 mb-4"
          title="자동 아코디언"
        >
          아코디언입니다.
        </Accordion>
        <h2 className="text-xl mt-6">Disable</h2>
        <Accordion
          color="secondary"
          disabled
          auto
          className="w-96"
          title="자동 아코디언"
        >
          아코디언입니다.
        </Accordion>
      </div>
    </>
  );
};
