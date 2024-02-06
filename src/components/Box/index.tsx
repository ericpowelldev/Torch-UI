// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../TUI";

import { AlphaTintValues, BGColorValues, ColorValues, FGColorValues, InverseTintValues, TintValues } from "utils/types";

import { useBoxStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface BoxProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    box?: string;
  };
  style?: React.CSSProperties;

  color?: `inherit` | ColorValues | BGColorValues | FGColorValues;
  tint?: TintValues | InverseTintValues | AlphaTintValues;

  width?: number | string;
  height?: number | string;
  radius?: number | string;

  shadow?: boolean;
  backdropBlur?: boolean;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT ---------------------------------------------------------------- //

const Box = ({
  children,
  className,
  classes,
  color = "utility",
  tint = 500,
  width,
  height,
  radius,
  shadow,
  backdropBlur,
  ...rest
}: BoxProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const boxStyles = useBoxStyles(theme, { color, tint, width, height, radius, shadow, backdropBlur });

  // CLASSNAMES //

  const clsxBox = clsx(boxStyles, classes?.box, className) || undefined;

  // RENDER //

  return (
    <div className={clsxBox} {...rest}>
      {children}
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Box;
