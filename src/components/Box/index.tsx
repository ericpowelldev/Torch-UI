// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import {
  BGColorValues,
  BoxComponentValues,
  ColorValues,
  FGColorValues,
  InverseTintValues,
  TintValues,
} from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

export interface BoxProps {
  // General Properties //

  props?: {
    root?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    root?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  component?: BoxComponentValues;

  // Specialized Properties //

  backdropBlur?: boolean;
  color?: `inherit` | ColorValues | BGColorValues | FGColorValues;
  height?: number | string;
  radius?: number | string;
  shadow?: boolean;
  tint?: TintValues | InverseTintValues;
  visualize?: boolean;
  width?: number | string;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Box = ({
  // General Properties //

  props,
  classes,
  className,
  children,
  component,

  // Specialized Properties //

  backdropBlur = false,
  color = "inherit",
  height,
  radius,
  shadow = false,
  tint = 500,
  visualize,
  width,

  // HTML Properties //

  ...rest
}: BoxProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(
    theme,
    { backdropBlur, color, height, radius, shadow, tint, visualize, width },
    [classes?.root, className],
  );

  // Return Component
  return React.createElement(
    component || `div`,
    { className: rootStyles, ...props?.root, ...rest },
    children,
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Box;
