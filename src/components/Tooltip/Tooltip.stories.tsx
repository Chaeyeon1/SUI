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
  return;
};
