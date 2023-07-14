import * as React from 'react';
import { Button } from './Button';
import { ComponentLayout } from '../Layout';
import { ButtonProps } from './Button.type';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Preview = (args: ButtonProps) => <Button {...args} />;

export const ButtonVariationsStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <ComponentLayout title="Color">
        <Button className="ml-2" color="primary" variant="contained">
          Primary
        </Button>
        <Button className="ml-2" color="secondary" variant="contained">
          Secondary
        </Button>
        <Button className="ml-2" variant="contained" disabled>
          Disabled
        </Button>
      </ComponentLayout>

      <ComponentLayout title="Outlined Buttons">
        <Button className="ml-2" variant="outlined" color="primary">
          Primary
        </Button>
        <Button className="ml-2" variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button className="ml-2" variant="outlined" disabled>
          Disabled
        </Button>
      </ComponentLayout>

      <ComponentLayout title="Text Buttons">
        <Button className="ml-2" variant="text" color="primary">
          Primary
        </Button>
        <Button className="ml-2" variant="text" color="secondary">
          Secondary
        </Button>
        <Button className="ml-2" variant="text" disabled>
          Disabled
        </Button>
      </ComponentLayout>

      <ComponentLayout title="Sizes">
        <div>
          <div className="mt-1">
            <Button variant="contained" color="primary" size="small">
              Small
            </Button>
            <Button
              className="ml-2"
              variant="contained"
              color="primary"
              size="medium"
            >
              Medium
            </Button>
            <Button
              className="ml-2"
              variant="contained"
              color="primary"
              size="large"
            >
              Large
            </Button>
          </div>
          <div className="mt-2">
            <Button variant="outlined" color="primary" size="small">
              Small
            </Button>
            <Button
              className="ml-2"
              variant="outlined"
              color="primary"
              size="medium"
            >
              Medium
            </Button>
            <Button
              className="ml-2"
              variant="outlined"
              color="primary"
              size="large"
            >
              Large
            </Button>
          </div>
        </div>
      </ComponentLayout>
    </div>
  );
};
