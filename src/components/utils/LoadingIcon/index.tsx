//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled, { keyframes } from "styled-components";

import { BoolValues, ExtendedColorValues, TintValues } from "utils/types";

import useColors from "hooks/useColors";
import useLoadingIcon from "./useLoadingIcon";

//////////////////////// PROPS ////////////////////////

interface LoadingIconProps {
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
  thickness?: number;
  speed?: number;

  disabled?: BoolValues;
}

//////////////////////// STYLED-COMPONENTS ////////////////////////

const spinKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const MyBase = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0;
  border: 0;
  margin: 0;
  line-height: 1;
  user-select: none;
`;

//////////////////////// COMPONENT ////////////////////////

const LoadingIcon = ({
  children,
  className,
  classes,
  type = `bg`,
  color = `default`,
  tint = `500`,
  size = 40,
  thickness = 0,
  speed = 800,
  disabled,
  ...rest
}: LoadingIconProps) => {
  // HOOKS //
  const { getColorBg, getColorFg } = useColors();
  const { getTrackSize } = useLoadingIcon();

  // DYNAMIC STYLED-COMPONENTS //
  const MyTrack = styled.div`
    position: relative;
    width: ${size}px;
    height: ${size}px;
    border: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid
      ${type === `bg` ? getColorBg(color, tint, disabled, `fg`) : getColorFg(color, tint, disabled)};
    border-radius: 50%;
    background-color: transparent;
    opacity: 25%;
  `;

  const MyBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${size}px;
    height: ${size}px;
    border: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid transparent;
    border-top: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid
      ${type === `bg` ? getColorBg(color, tint, disabled, `fg`) : getColorFg(color, tint, disabled)};
    border-radius: 50%;
    background-color: transparent;
    animation: ${spinKeyframes} ${speed}ms linear infinite;
  `;

  // CLASSNAMES ROOT //
  const getClassNames_root = (name: string) => {
    let classNames = [];
    if (className) classNames.push(className);
    if (classes && classes.root) classNames.push(classes.root);
    if (classes && name && classes[name]) classNames.push(classes[name]);
    return classNames.join(` `);
  };

  // CLASSNAMES //
  const getClassNames = (name: string) => {
    let classNames = [];
    if (classes && name && classes[name]) classNames.push(classes[name]);
    return classNames.join(` `);
  };

  // RETURN //
  return (
    <MyBase className={getClassNames_root(`base`)} {...rest}>
      <MyTrack className={getClassNames(`track`)} />
      <MyBar className={getClassNames(`bar`)} />
    </MyBase>
  );
};

//////////////////////// EXPORT ////////////////////////

export default LoadingIcon;
