import * as React from 'react';
import { Select } from './Select';
import { SelectProps } from './Select.type';

export default {
  title: 'Components/Select',
  component: Select,
};

export const Preview = (args: SelectProps) => <Select {...args} />;
