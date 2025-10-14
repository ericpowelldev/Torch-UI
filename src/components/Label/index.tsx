// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues } from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

export interface LabelProps {
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

  // Specialized Properties //

  disabled?: BoolValues;
  error?: BoolValues;
  info?: BoolValues;
  inverse?: BoolValues;
  required?: BoolValues;
  success?: BoolValues;
  warning?: BoolValues;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Label = ({
  // General Properties //

  props,
  classes,
  className,
  children,

  // Specialized Properties //

  disabled = false,
  error = false,
  info = false,
  inverse = false,
  required = false,
  success = false,
  warning = false,

  // HTML Properties //

  ...rest
}: LabelProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(
    theme,
    { disabled, error, info, inverse, success, warning },
    [classes?.root, className]
  );

  // Return Component
  return (
    <label className={rootStyles} {...props?.root} {...rest}>
      {children}
      {required && <span style={{ color: theme.color.error[500] }}> *</span>}
    </label>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Label;
