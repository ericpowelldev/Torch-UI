// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues } from "../../utils/types";

import { useTUI } from "../../TUI";
import { useOptionStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface OptionProps {
  // General Properties //

  props?: {
    option?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    option?: string;
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
  const { theme } = useTUI();

  // Styles
  const optionStyles = useOptionStyles(theme, { disabled }, [classes?.option, className]);

  // Return Component
  if (hidden) return null;
  return (
    <option
      className={optionStyles}
      disabled={disabled ? true : false}
      {...props?.option}
      {...rest}
    >
      {children}
    </option>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Option;
