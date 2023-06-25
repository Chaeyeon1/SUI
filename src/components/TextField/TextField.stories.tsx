import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextField } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
    <TextField
      className={args.className}
      variant={args.variant}
      color={args.color}
      size={args.size}
      disabled={args.disabled}
      onClick={args.onClick}
    >
      {args.text}
    </TextField>
  );
  
  export const TextFieldStory = Template.bind({});
  TextFieldStory.storyName = 'TextField';
  TextFieldStory.args = {
    className: '',
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    disabled: false,
    text: 'TextField',
  };
  
  export const TextFieldVariationsStory = () => {
    return (
      <div className="card max-w-800 p-3">

        <h1 className="text-2xl font-medium mb-2">TextFields</h1>
        <h2 className="text-xl mt-6 ">outlined TextFields</h2>
            <div className="flex items-end gap-4">
            <TextField  color= 'primary' label='label' >
                Primary
            </TextField>
            <TextField  color= 'secondary'>
                Secondary
            </TextField>
            <TextField  disabled>
                Disabled
            </TextField>
            </div>
  
        {/* <h2 className="text-xl mt-6">underline TextFields</h2>
        <div className="mt-1">
          <TextField variant="outlined">Default</TextField>
          <TextField className="ml-2" variant="outlined" color="primary">
            Primary
          </TextField>
          <TextField className="ml-2" variant="outlined" color="secondary">
            Secondary
          </TextField>
          <TextField className="ml-2" variant="outlined" disabled>
            Disabled
          </TextField>
        </div> */}
  
  <h2 className="text-xl mt-6">Sizes</h2>
        <div className="mt-1">
          <div className="flex items-end gap-4">
          <TextField variant="outlined" color="primary" size="small">
            Small
          </TextField>
          <TextField
            className="ml-2"
            variant="outlined"
            color="primary"
            size="medium"
          >
            Medium
          </TextField>
          <TextField
            className="ml-2"
            variant="outlined"
            color="primary"
            size="large"
          >
            Large
          </TextField>
          </div>
        </div>
        {/* <div className="mt-2">
          <TextField variant="underline" color="primary" size="small">
            Small
          </TextField>
          <TextField
            className="ml-2"
            variant="underline"
             color="primary"
            size="medium"
          >
            Medium
          </TextField>
          <TextField
            className="ml-2"
            variant="underline"
             color="primary"
            size="large"
          >
            Large
          </TextField>
        </div> */}
  

      </div>
    );
  };
  TextFieldVariationsStory.storyName = 'TextField Variations';