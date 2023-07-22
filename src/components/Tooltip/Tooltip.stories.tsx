import * as React from 'react';
import { Tooltip } from './Tooltip';
import { TooltipProps } from './Tooltip.type';
import { ComponentLayout, Layout } from '../Layout';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export const Preview = (args: TooltipProps) => <Tooltip {...args} />;

export const ToastVariationsStory = () => {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);

  const [openTop, setOpenTop] = React.useState(false);
  const [openBottom, setOpenBottom] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);
  const [openLeft, setOpenLeft] = React.useState(false);

  const TooltipToggle0 = () => {
    setOpenTop(!openTop);
  };

  const TooltipToggle1 = () => {
    setOpenBottom(!openBottom);
  };

  const TooltipToggle2 = () => {
    setOpenRight(!openRight);
  };

  const TooltipToggle3 = () => {
    setOpenLeft(!openLeft);
  };

  const blackBox = 'relative w-[50px] h-[50px] bg-black';

  return (
    <Layout title="Tooltip">
      <ComponentLayout title="color">
        <Tooltip color="primary" direction="top">
          primary
        </Tooltip>
        <Tooltip color="secondary" direction="top">
          secondary
        </Tooltip>
        <Tooltip color="basic" direction="top">
          basic
        </Tooltip>
      </ComponentLayout>
      <ComponentLayout title="direction">
        <Tooltip color="primary" direction="top">
          top
        </Tooltip>
        <Tooltip color="primary" direction="bottom">
          bottom
        </Tooltip>
        <Tooltip color="primary" direction="right">
          right
        </Tooltip>
        <Tooltip color="primary" direction="left">
          left
        </Tooltip>
      </ComponentLayout>

      <ComponentLayout title="mouseOver">
        <div className="flex gap-4 pl-[100px] w-[500px] h-[400px] pt-[80px] pb-[80px]">
          <div
            className="relative w-[50px] h-[50px] bg-black"
            onMouseOver={TooltipToggle3}
            onMouseOut={TooltipToggle3}
          >
            <Tooltip
              color="primary"
              direction="left"
              className="absolute left-[-110px] top-[0px]"
              open={openLeft}
              setOpen={setOpenLeft}
            >
              left
            </Tooltip>
          </div>
          <div
            className={blackBox}
            onMouseOver={TooltipToggle0}
            onMouseOut={TooltipToggle0}
          >
            <Tooltip
              color="primary"
              direction="top"
              className="absolute top-[-65px]"
              open={openTop}
              setOpen={setOpenTop}
            >
              top
            </Tooltip>
          </div>
          <div
            className={blackBox}
            onMouseOver={TooltipToggle1}
            onMouseOut={TooltipToggle1}
          >
            <Tooltip
              color="primary"
              direction="bottom"
              className="absolute bottom-[-60px]"
              open={openBottom}
              setOpen={setOpenBottom}
            >
              bottom
            </Tooltip>
          </div>
          <div
            className={blackBox}
            onMouseOver={TooltipToggle2}
            onMouseOut={TooltipToggle2}
          >
            <Tooltip
              color="primary"
              direction="right"
              className="absolute  right-[-60px]"
              open={openRight}
              setOpen={setOpenRight}
            >
              right
            </Tooltip>
          </div>
        </div>
      </ComponentLayout>
      <ComponentLayout title="xButton">
        <div className="flex gap-4 pl-[100px] w-[500px] h-[100px]">
          <div className={blackBox}>
            <Tooltip
              color="primary"
              direction="left"
              className="absolute left-[-110px]"
              xButton={true}
              setOpen={setOpen4}
              open={open4}
            >
              left
            </Tooltip>
          </div>
          <div className={blackBox}>
            <Tooltip
              color="primary"
              direction="top"
              className="absolute top-[-65px]"
              xButton={true}
              setOpen={setOpen1}
              open={open1}
            >
              top
            </Tooltip>
          </div>
          <div className={blackBox}>
            <Tooltip
              color="primary"
              direction="bottom"
              className="absolute bottom-[-60px]"
              xButton={true}
              setOpen={setOpen2}
              open={open2}
            >
              bottom
            </Tooltip>
          </div>
          <div className="flex gap-[250px]">
            <div className={blackBox}>
              <Tooltip
                color="primary"
                direction="right"
                className="absolute right-[-60px]"
                xButton={true}
                setOpen={setOpen3}
                open={open3}
              >
                right
              </Tooltip>
            </div>
          </div>
        </div>
      </ComponentLayout>
    </Layout>
  );
};
