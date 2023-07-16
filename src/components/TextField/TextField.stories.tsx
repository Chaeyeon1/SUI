import * as React from 'react';
import { TextField } from './TextField';
import { TextFieldProps } from './TextField.type';
import { ComponentLayout, Layout } from '../Layout';

export default {
  title: 'Components/TextField',
  component: TextField,
};

export const Preview = (args: TextFieldProps) => <TextField {...args} />;

export const TextFieldVariationsStory = () => {
  return (
    <Layout title="TextField">
      <ComponentLayout title="outlined TextFields">
        <div className="flex items-end gap-4">
          <TextField
            variant="outlined"
            color="primary"
            label="label"
            placeholder="sudol"
          >
            Primary
          </TextField>
          <TextField
            variant="outlined"
            color="secondary"
            placeholder="sinddong"
          >
            Secondary
          </TextField>
          <TextField variant="outlined" disabled>
            Disabled
          </TextField>
        </div>
      </ComponentLayout>

      <ComponentLayout title="underline TextFields">
        <div className="flex items-end gap-4">
          <TextField
            variant="underline"
            color="primary"
            label="label"
            placeholder="very"
          >
            Primary
          </TextField>
          <TextField variant="underline" color="secondary" placeholder="good">
            Secondary
          </TextField>
          <TextField variant="underline" disabled>
            Disabled
          </TextField>
        </div>
      </ComponentLayout>

      <ComponentLayout title="Sizes">
        <div className="mt-1">
          <div className="flex items-end gap-4">
            <TextField
              variant="outlined"
              color="primary"
              size="small"
              placeholder="small"
            >
              Small
            </TextField>
            <TextField
              className="ml-2"
              variant="outlined"
              color="primary"
              size="medium"
              placeholder="medium"
            >
              Medium
            </TextField>
            <TextField
              className="ml-2"
              variant="outlined"
              color="primary"
              size="large"
              placeholder="large"
            >
              Large
            </TextField>
          </div>
        </div>
      </ComponentLayout>
    </Layout>
  );
};
