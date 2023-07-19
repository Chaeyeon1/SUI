import * as React from 'react';
import { Select } from './Select';
import { SelectProps } from './Select.type';

export default {
  title: 'Components/Select',
  component: Select,
};

export const Preview = (args: SelectProps) => (
  <Select
    options={[
      { id: 0, content: 'Python' },
      { id: 1, content: 'Java' },
      { id: 2, content: 'JavaScript' },
    ]}
    {...args}
  />
);
