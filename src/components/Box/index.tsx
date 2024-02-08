// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTUI } from "../../TUI";

import {
  AlphaTintValues,
  BGColorValues,
  BoxComponentValues,
  ColorValues,
  FGColorValues,
  InverseTintValues,
  TintValues,
} from "utils/types";

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

  width?: number | string;
  height?: number | string;
  radius?: number | string;
  color?: `inherit` | ColorValues | BGColorValues | FGColorValues;
  tint?: TintValues | InverseTintValues | AlphaTintValues;
  shadow?: boolean;
  backdropBlur?: boolean;

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

  width = 0,
  height = 0,
  radius = 0,
  color = "inherit",
  tint = 500,
  shadow = false,
  backdropBlur = false,

  // HTML Properties //

  ...rest
}: BoxProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const boxStyles = useBoxStyles(theme, { width, height, radius, color, tint, shadow, backdropBlur }, [
    classes?.box,
    className,
  ]);

  // Return Component
  return React.createElement(component || `div`, { className: boxStyles, ...props?.box, ...rest }, children);
};

// EXPORT ---------------------------------------------------------------- //

export default Box;
