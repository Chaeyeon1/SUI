import * as React from 'react';
import { Select } from './Select';
import { SelectProps } from './Select.type';
import { ComponentLayout, Layout } from '../Layout';

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

export const Color = () => {
  const options = [
    { id: 0, content: 'Suyeon' },
    { id: 1, content: 'Chaeyeon' },
    { id: 2, content: 'Sui' },
  ];

  return (
    <Layout title="select">
      <ComponentLayout title="primary">
        <Select color="primary" options={options} />
      </ComponentLayout>
      <ComponentLayout title="secondary">
        <Select color="secondary" options={options} />
      </ComponentLayout>
    </Layout>
  );
};
