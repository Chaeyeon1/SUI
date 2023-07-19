import * as React from 'react';
import { Tooltip } from './Tooltip';
import { TooltipProps } from './Tooltip.type';
import { ComponentLayout, Layout } from '../Layout';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export const Preview = (args: TooltipProps) => <Tooltip {...args} />;

export const ToastVariationsStory = () => {
  return (
    <Layout title="Tooltip">
      <ComponentLayout title="color">
        <div className="flex items-end gap-4">
          <Tooltip color="primary" direction="top">
            primary
          </Tooltip>
          <Tooltip color="secondary" direction="top">
            secondary
          </Tooltip>
          <Tooltip color="basic" direction="top">
            basic
          </Tooltip>
        </div>
      </ComponentLayout>
      <ComponentLayout title="direction">
        <Tooltip color="primary" direction="top">
          top
        </Tooltip>
        <Tooltip color="primary" direction="bottom">
          bottom
        </Tooltip>
        <Tooltip color="primary" direction="right">
          right
        </Tooltip>
        <Tooltip color="primary" direction="left">
          left
        </Tooltip>
      </ComponentLayout>
    </Layout>
  );
};
