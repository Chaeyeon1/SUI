import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Accordion, AccordionDetail, AccordionSummary } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: AccordionSummary,
} as Meta;

const Template: Story = (args) => (
  <AccordionSummary
    value={args.value}
    className={args.className}
    color={args.color}
    disabled={args.disabled}
    onClick={args.onClick}
  >
    {args.text}
  </AccordionSummary>
);

export const AccordionStory = Template.bind({});
AccordionStory.storyName = 'Button';
AccordionStory.args = {
  className: '',
  color: 'primary',
  disabled: false,
  title: 'Accordion',
};

export const Preview = () => {
  const [open, setOpen] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  return (
    <>
      <div className="mb-4">
        <h2>Primary</h2>
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
        <h2>Secondary</h2>
        <Accordion color="secondary" className="w-96 mb-4" value={open3}>
          <AccordionSummary
            color="secondary"
            onClick={() => setOpen3(!open3)}
            value={open3}
            title={'아코디언'}
          />
          <AccordionDetail value={open3}>아코디언입니다.</AccordionDetail>
        </Accordion>
        <Accordion
          color="secondary"
          auto
          className="w-96 mb-4"
          title="자동 아코디언"
        >
          아코디언입니다.
        </Accordion>
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
