// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "providers/TUI";

import { BoolValues } from "utils/types";

import { useSpacerStyles } from "./styles";

// PROPS -------------------------------------------------- //

interface SpacerProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    spacer?: string;
  };
  style?: React.CSSProperties;

  size?: number | string;

  vertical?: BoolValues;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT -------------------------------------------------- //

const Spacer = ({ children, className, classes, size = 4, vertical, ...rest }: SpacerProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const spacerStyles = useSpacerStyles(theme, { size, vertical });

  // CLASSNAMES //

  const clsxSpacer = clsx(spacerStyles, classes?.spacer, className) || undefined;

  // RENDER //

  return <>{!vertical ? <div className={clsxSpacer} {...rest} /> : <div className={clsxSpacer} {...rest} />}</>;
};

// EXPORT -------------------------------------------------- //

export default Spacer;
