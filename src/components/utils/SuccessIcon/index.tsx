//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled, { keyframes } from "styled-components";

import { cls } from "utils/helpers";
import { BoolValues, ExtendedColorValues, TintValues } from "utils/types";

import useColors from "hooks/useColors";

import { MdCheckCircle } from "react-icons/md";

//////////////////////// PROPS ////////////////////////

interface SuccessIconProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
  };
  style?: React.CSSProperties;

  type?: `bg` | `fg`;
  color?: ExtendedColorValues;
  tint?: TintValues;
  size?: number;
  speed?: number;

  blink?: BoolValues;

  disabled?: BoolValues;

  [x: string]: any; // Handle default HTML props
}

interface ComponentIconProps {
  className?: string;

  [x: string]: any; // Handle default HTML props
}

//////////////////////// STYLED-COMPONENTS ////////////////////////

const blinkKeyframes = keyframes`
  0% {
    opacity: 0.5;
  }
  45% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

//////////////////////// COMPONENT ////////////////////////

const SuccessIcon = ({
  children,
  className,
  classes,
  type = `bg`,
  color = `utility`,
  tint = `500`,
  size = 40,
  speed = 800,
  blink,
  disabled,
  ...rest
}: SuccessIconProps) => {
  // HOOKS //
  const { getColorBg, getColorFg } = useColors();

  // BASE COMPONENT //
  const Icon = ({ className }: ComponentIconProps) => (
    <MdCheckCircle className={cls(classes, `root`, className)} {...rest} />
  );

  // DYNAMIC STYLED-COMPONENTS //
  const MyIcon = styled(Icon)`
    position: relative;
    display: block;
    width: ${size}px;
    height: ${size}px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    margin: 0;
    line-height: 1;
    user-select: none;
    animation: ${blinkKeyframes} ${blink ? speed : 0}ms infinite;
    color: ${type === `bg` ? getColorBg(color, tint, disabled, `fg`) : getColorFg(color, tint, disabled)};
  `;

  // RETURN //
  return <MyIcon {...rest} />;
};

//////////////////////// EXPORT ////////////////////////

export default SuccessIcon;
