import React, { HTMLProps } from "react";
import PropTypes from "prop-types";
import "./button.css";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  backgroundColor?: string;
  primary?: any;
}

const ButtonLayout = ({ backgroundColor, primary, ...rest }: ButtonProps) => {
  return <button {...rest} type="button"></button>;
};

export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <ButtonLayout
      // className={["storybook-button", `storybook-button--${size}`, mode].join(
      //   " "
      // )}
      // style={backgroundColor && { backgroundColor }}
      {...props}>
      {label}
    </ButtonLayout>
  );
};
