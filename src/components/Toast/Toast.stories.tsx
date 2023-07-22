import * as React from 'react';
import { Toast } from './Toast';
import { ToastProps } from './Toast.type';
import { ComponentLayout, Layout } from '../Layout';

export default {
  title: 'Components/Toast',
  component: Toast,
};

export const Preview = (args: ToastProps) => <Toast {...args} />;

export const ToastVariationsStory = () => {
  return (
    <Layout title="Toast">
      <ComponentLayout title="contained Toast">
        <Toast variant="contained" type="success" size="small" open={true}>
          성공했습니다.
        </Toast>
        <Toast variant="contained" type="error" size="small" open={true}>
          실패했습니다.
        </Toast>
        <Toast variant="contained" type="info" size="small" open={true}>
          알립니다.
        </Toast>
        <Toast variant="contained" type="warning" size="small" open={true}>
          위험합니다.
        </Toast>
      </ComponentLayout>

      <ComponentLayout title="outlined Toast">
        <Toast variant="outlined" type="success" size="small" open={true}>
          성공했습니다.
        </Toast>
        <Toast variant="outlined" type="error" size="small" open={true}>
          실패했습니다.
        </Toast>
        <Toast variant="outlined" type="info" size="small" open={true}>
          알립니다.
        </Toast>
        <Toast variant="outlined" type="warning" size="small" open={true}>
          위험합니다.
        </Toast>
      </ComponentLayout>
    </Layout>
  );
};
