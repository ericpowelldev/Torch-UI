// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTUI } from "../../TUI";

import { useButtonStyles, useLabelStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface ButtonBaseProps {
  // General Properties //

  props?: {
    button?: React.HTMLAttributes<HTMLElement>;
    label?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    button?: string;
    label?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  tooltip?: React.ReactNode;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const ButtonBase = ({
  // General Properties //

  props,
  classes,
  className,
  children,
  tooltip,

  // HTML Properties //

  ...rest
}: ButtonBaseProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const buttonStyles = useButtonStyles(theme, undefined, [classes?.button, className]);
  const labelStyles = useLabelStyles(theme, undefined, [classes?.label]);

  // Return Component
  return (
    <button className={buttonStyles} {...props?.button} {...rest}>
      <span className={labelStyles} {...props?.label}>
        {children}
      </span>
    </button>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default ButtonBase;
