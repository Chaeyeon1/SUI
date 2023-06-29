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
      label={args.label}
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
            <TextField  variant='outlined' color= 'primary' label='label' placeholder='sudol'>
                Primary
            </TextField>
            <TextField  variant='outlined' color= 'secondary' placeholder='sinddong'>
                Secondary
            </TextField>
            <TextField variant='outlined' disabled>
                Disabled
            </TextField>
            </div>


        <h2 className="text-xl mt-6 ">underline TextFields</h2>
            <div className="flex items-end gap-4">
            <TextField  variant='underline' color= 'primary' label='label' placeholder='very'>
                Primary
            </TextField>
            <TextField  variant='underline' color= 'secondary' placeholder='good'>
                Secondary
            </TextField>
            <TextField  variant='underline' disabled>
                Disabled
            </TextField>
            </div>
  
  
  <h2 className="text-xl mt-6">Sizes</h2>
        <div className="mt-1">
          <div className="flex items-end gap-4">
          <TextField variant="outlined" color="primary" size="small" placeholder='small'>
            Small
          </TextField>
          <TextField
            className="ml-2"
            variant="outlined"
            color="primary"
            size="medium"
            placeholder='medium'
          >
            Medium
          </TextField>
          <TextField
            className="ml-2"
            variant="outlined"
            color="primary"
            size="large"
            placeholder='large'
          >
            Large
          </TextField>
          </div>
        </div>
        
  

      </div>
    );
  };
  TextFieldVariationsStory.storyName = 'TextField Variations';