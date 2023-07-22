import * as React from 'react';
import { Switch } from './Switch';
import { SwitchProps } from './Switch.type';
import { ComponentLayout, Layout } from '../Layout';

export default {
  title: 'Components/Switch',
  component: Switch,
};

export const Preview = (args: SwitchProps) => <Switch {...args} />;

export const SwitchVariationsStory = () => {
  return (
    <Layout title="SWitch">
      <ComponentLayout title="thin switch">
        <div className="flex items-end gap-7">
          <Switch
            variant="thin"
            color="primary"
            size="medium"
            label="primary"
          />
          <Switch
            variant="thin"
            color="secondary"
            size="medium"
            label="secondary"
          />
        </div>
      </ComponentLayout>
      <ComponentLayout title="normal switch">
        <div className="flex items-end gap-7">
          <Switch
            variant="normal"
            color="primary"
            size="medium"
            label="primary"
          />
          <Switch
            variant="normal"
            color="secondary"
            size="medium"
            label="secondary"
          />
        </div>
      </ComponentLayout>
      <ComponentLayout title="bold switch">
        <div className="flex items-end gap-7">
          <Switch
            variant="bold"
            color="primary"
            size="medium"
            label="primary"
          />
          <Switch
            variant="bold"
            color="secondary"
            size="medium"
            label="secondary"
          />
        </div>
      </ComponentLayout>
      <ComponentLayout title="sizes">
        <div className="flex items-end gap-7">
          <Switch variant="thin" color="primary" size="small" label="small" />
          <Switch variant="thin" color="primary" size="medium" label="medium" />
          <Switch variant="thin" color="primary" size="large" label="large" />
        </div>
      </ComponentLayout>
    </Layout>
  );
};
