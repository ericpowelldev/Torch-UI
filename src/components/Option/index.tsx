// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import { cx } from "@emotion/css";

import { useTUI } from "../../TUI";

import { BoolValues } from "../../utils/types";

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
  success?: BoolValues;
  loading?: BoolValues;

  [x: string]: any; 
}

// COMPONENT ---------------------------------------------------------------- //

const Option = ({ children, className, classes, hidden, disabled, error, warning, success, loading, ...rest }: OptionProps) => {
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

  const cxOption = cx(optionStyles, classes?.option, className) || undefined;

  // RENDER //

  return (
    <option className={cxOption} {...rest}>
      {children}
    </option>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Option;
