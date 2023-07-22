import * as React from 'react';
import { Chip } from './Chip';
import { ChipProps } from './Chip.type';
import { ComponentLayout } from '../Layout';

export default {
  title: 'Components/Chip',
  component: Chip,
};

export const Preview = (args: ChipProps) => <Chip {...args} />;

export const ChipVariationsStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <ComponentLayout title="Contained Chips">
        <div className="mt-1">
          <div className="flex items-end gap-4">
            <Chip
              className="ml-2"
              color="primary"
              variant="contained"
              text="primary"
            ></Chip>
            <Chip
              className="ml-2"
              color="secondary"
              variant="contained"
              text="secondary"
            ></Chip>
            <Chip
              className="ml-2"
              variant="contained"
              disabled
              text="disabled"
            ></Chip>
          </div>
        </div>
      </ComponentLayout>

      <ComponentLayout title="Outlined Chips">
        <div className="mt-1">
          <div className="flex items-end gap-4">
            <Chip
              className="ml-2"
              variant="outlined"
              color="primary"
              text="primary"
            ></Chip>
            <Chip
              className="ml-2"
              variant="outlined"
              color="secondary"
              text="secondary"
            ></Chip>
            <Chip
              className="ml-2"
              variant="outlined"
              disabled
              text="disabled"
            ></Chip>
          </div>
        </div>
      </ComponentLayout>

      <ComponentLayout title="removable">
        <div className="mt-1">
          <div className="flex items-end gap-4">
            <Chip
              className="ml-2"
              variant="contained"
              color="primary"
              text="primary"
              removable={true}
            ></Chip>
            <Chip
              className="ml-2"
              variant="outlined"
              color="secondary"
              text="secondary"
              removable={true}
            ></Chip>
            <Chip
              className="ml-2"
              variant="outlined"
              disabled
              text="disabled"
              removable={true}
            ></Chip>
          </div>
        </div>
      </ComponentLayout>
    </div>
  );
};
