// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import {
  AlphaTintValues,
  BGColorValues,
  BoxComponentValues,
  ColorValues,
  FGColorValues,
  InverseTintValues,
  TintValues,
} from "@utils/types";

import { useTui } from "@tui";
import { useBoxStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface BoxProps {
  // General Properties //

  props?: {
    box?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    box?: string;
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
  tint?: TintValues | InverseTintValues | AlphaTintValues;
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
  radius = 0,
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
  const boxStyles = useBoxStyles(
    theme,
    { backdropBlur, color, height, radius, shadow, tint, visualize, width },
    [classes?.box, className]
  );

  // Return Component
  return React.createElement(
    component || `div`,
    { className: boxStyles, ...props?.box, ...rest },
    children
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Box;
