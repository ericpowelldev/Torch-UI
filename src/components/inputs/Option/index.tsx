// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "providers/TUI";

import { BoolValues } from "utils/types";

import { useOptionStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface OptionProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    option?: string;
  };
  style?: React.CSSProperties;

  hidden?: BoolValues;
  disabled?: BoolValues;
  error?: BoolValues;
  warning?: BoolValues;
  loading?: BoolValues;
  success?: BoolValues;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT ---------------------------------------------------------------- //

const Option = ({ children, className, classes, hidden, disabled, error, warning, loading, success, ...rest }: OptionProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const optionStyles = useOptionStyles(theme, {
    hidden,
    disabled,
    error,
    warning,
    success,
  });

  // CLASSNAMES //

  const clsxOption = clsx(optionStyles, classes?.option, className) || undefined;

  // RENDER //

  return (
    <option className={clsxOption} {...rest}>
      {children}
    </option>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Option;
