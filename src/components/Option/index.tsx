// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues } from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface OptionProps {
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
  hidden?: BoolValues;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Option = ({
  // General Properties //

  props,
  classes,
  className,
  children,

  // Specialized Properties //

  disabled = false,
  hidden = false,

  // HTML Properties //

  ...rest
}: OptionProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, { disabled }, [classes?.root, className]);

  // Return Component
  if (hidden) return null;
  return (
    <option
      className={rootStyles}
      disabled={disabled ? true : false}
      {...props?.root}
      {...rest}
    >
      {children}
    </option>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Option;
