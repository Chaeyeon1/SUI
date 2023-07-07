import * as React from 'react';
import { Menu, MenuItem } from './Menu';
import Star from '../../assets/star.svg';
import { ComponentLayout, Layout } from '../Layout';
import { MenuItemProps } from './Menu.type';

export default {
  title: 'Components/Menu',
  component: MenuItem,
};

export const Preview = (args: MenuItemProps) => <MenuItem {...args} />;

export const MenuVariations = () => {
  return (
    <Layout title="Menu">
      <ComponentLayout title="Color">
        <Menu
          color="primary"
          array={[
            { id: 0, content: 'chae' },
            { id: 1, content: 'yeon' },
            { id: 2, content: 'su' },
            { id: 3, content: 'yeon' },
          ]}
        />
        <Menu
          color="secondary"
          array={[
            { id: 0, content: 'chae' },
            { id: 1, content: 'yeon' },
            { id: 2, content: 'su' },
            { id: 3, content: 'yeon' },
          ]}
        />
      </ComponentLayout>
    </Layout>
  );
};

export const MenuItemVariations = () => {
  return (
    <Layout title="Menu Item">
      <ComponentLayout title="Icon">
        <MenuItem text={'Hello'} />
        <MenuItem icon={<img src={Star} />} text={'Hello'} />
      </ComponentLayout>

      <ComponentLayout title="Color">
        <MenuItem icon={<img src={Star} />} color="primary" text={'Primary'} />
        <MenuItem
          icon={<img src={Star} />}
          color="secondary"
          text={'Secondary'}
        />
      </ComponentLayout>
    </Layout>
  );
};
