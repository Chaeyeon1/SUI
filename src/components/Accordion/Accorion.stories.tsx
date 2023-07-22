import * as React from 'react';
import { Accordion, AccordionDetail, AccordionSummary } from './Accordion';
import { ComponentLayout, Layout } from '../Layout';
import { AccordionProps } from './Accordion.type';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

export const Preview = (args: AccordionProps) => <Accordion auto {...args} />;

export const AccordionVariations = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <Layout title="Accordion">
      <ComponentLayout title="Primary">
        <div>
          <Accordion className="w-96 mb-4" value={open}>
            <AccordionSummary
              color="primary"
              onClick={() => setOpen(!open)}
              value={open}
              text={'아코디언'}
            />
            <AccordionDetail value={open}>아코디언입니다.</AccordionDetail>
          </Accordion>

          <Accordion auto className="w-96" text="자동 아코디언">
            아코디언입니다.
          </Accordion>
        </div>
      </ComponentLayout>
      <ComponentLayout title="Secondary">
        <div>
          <Accordion color="secondary" className="w-96 mb-4" value={open2}>
            <AccordionSummary
              color="secondary"
              onClick={() => setOpen2(!open2)}
              value={open2}
              text={'아코디언'}
            />
            <AccordionDetail value={open2}>아코디언입니다.</AccordionDetail>
          </Accordion>
          <Accordion
            color="secondary"
            auto
            className="w-96 mb-4"
            text="자동 아코디언"
          >
            아코디언입니다.
          </Accordion>
        </div>
      </ComponentLayout>
      <ComponentLayout title="Disabled">
        <Accordion
          color="secondary"
          disabled
          auto
          className="w-96"
          text="자동 아코디언"
        >
          아코디언입니다.
        </Accordion>
      </ComponentLayout>
    </Layout>
  );
};
