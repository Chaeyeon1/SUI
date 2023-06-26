import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Chip } from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
    <Chip
      className={args.className}
      color={args.color}
      disabled={args.disabled}
      onClick={args.onClick}
    >
      {args.text}
    </Chip>
  );

export const ChipStory = Template.bind({});
ChipStory.storyName = 'Chip';
ChipStory.args = {
  className: '',
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  disabled: false,
  text: 'Chip',
};



export const ChipVariationsStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <h1 className="text-2xl font-medium mb-2">Chips</h1>

      <h2 className="text-xl mt-6">Contained Chips</h2>
      <div className="mt-1">
      <div className="flex items-end gap-4">
        <Chip className="ml-2" color="primary" variant="contained" text='primary'>
        </Chip>
        <Chip className="ml-2" color="secondary" variant="contained" text='se'>
        </Chip>
        <Chip className="ml-2" variant="contained" disabled text='disabled'>
        </Chip>
        </div>
      </div>

      {/* <h2 className="text-xl mt-6">Outlined Chips</h2>
      <div className="mt-1">
        <Chip className="ml-2" variant="outlined" color="primary">
          Primary
        </Chip>
        <Chip className="ml-2" variant="outlined" color="secondary">
          Secondary
        </Chip>
        <Chip className="ml-2" variant="outlined" disabled>
          Disabled
        </Chip>
      </div> */}

      {/* <h2 className="text-xl mt-6">Sizes</h2>
      <div className="mt-1">
        <Chip variant="contained" color="primary" size="small">
          Small
        </Chip>
        <Chip
          className="ml-2"
          variant="contained"
          color="primary"
          size="medium"
        >
          Medium
        </Chip>
        <Chip
          className="ml-2"
          variant="contained"
          color="primary"
          size="large"
        >
          Large
        </Chip> */}
      {/* </div> */}
      
 
    </div>
  );
};
ChipVariationsStory.storyName = 'Chip Variations';