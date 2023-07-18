import * as React from 'react';
import { Switch } from './Switch';
import { SwitchProps } from './Switch.type';
import { ComponentLayout } from '../Layout';

export default {
  title: 'Components/Switch',
  component: Switch,
};

export const Preview = (args: SwitchProps) => <Switch {...args} />;

export const SwitchVariationsStory = () => {
  return (
    <Layout>
      <ComponentLayout title="thin switch">
        <div className="flex items-end gap-4">
          <Switch variant="thin" color="primary" size="medium" />
          <Switch variant="thin" color="secondary" size="medium" />
        </div>
      </ComponentLayout>
      <ComponentLayout title="normal switch">
        <div className="flex items-end gap-4">
          <Switch variant="normal" color="primary" size="medium" />
          <Switch variant="normal" color="primary" size="medium" />
        </div>
      </ComponentLayout>
      <ComponentLayout title="bold switch">
        <div className="flex items-end gap-4">
          <Switch variant="bold" color="primary" size="medium" />
          <Switch variant="bold" color="primary" size="medium" />
        </div>
      </ComponentLayout>
      <ComponentLayout title="sizes">
        <div className="flex items-end gap-4">
          <Switch variant="thin" color="primary" size="small" />
          <Switch variant="thin" color="primary" size="medium" />
          <Switch variant="thin" color="primary" size="large" />
        </div>
      </ComponentLayout>
    </Layout>
  );
};
