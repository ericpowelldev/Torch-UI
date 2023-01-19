//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled, { keyframes } from "styled-components";

import { BoolValues, ExtendedColorValues, TintValues } from "utils/types";

import useColors from "hooks/useColors";

import { MdCheckCircle } from "react-icons/md";

//////////////////////// PROPS ////////////////////////

interface SuccessIconProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
    icon: string;
  };
  style?: React.CSSProperties;

  type?: `bg` | `fg`;
  color?: ExtendedColorValues;
  tint?: TintValues;
  size?: number;
  speed?: number;

  blink?: BoolValues;

  disabled?: BoolValues;
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
  color = `default`,
  tint = `500`,
  size = 40,
  speed = 800,
  blink,
  disabled,
  ...rest
}: SuccessIconProps) => {
  // HOOKS //
  const { getColorBg, getColorFg } = useColors();

  // CLASSNAMES ROOT //
  const getClassNames_root = (name: string) => {
    let classNames = [];
    if (className) classNames.push(className);
    if (classes && classes.root) classNames.push(classes.root);
    if (classes && name && classes[name]) classNames.push(classes[name]);
    return classNames.join(` `);
  };

  // BASE COMPONENT //
  const Icon = ({ className }) => <MdCheckCircle className={className + ` ` + getClassNames_root(`icon`)} {...rest} />;

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
