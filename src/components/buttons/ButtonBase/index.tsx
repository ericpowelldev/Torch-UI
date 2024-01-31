// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "providers/TUI";

import { useButtonStyles, useLabelStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface ButtonBaseProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    button?: string;
    label?: string;
  };
  style?: React.CSSProperties;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT ---------------------------------------------------------------- //

const ButtonBase = ({ children, className, classes, ...rest }: ButtonBaseProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const buttonStyles = useButtonStyles(theme);
  const labelStyles = useLabelStyles(theme);

  // CLASSNAMES //

  const clsxButton = clsx(buttonStyles, classes?.button, className) || undefined;
  const clsxLabel = clsx(labelStyles, classes?.label) || undefined;

  // RENDER //

  return (
    <button className={clsxButton} {...rest}>
      <span className={clsxLabel}>{children}</span>
    </button>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default ButtonBase;
