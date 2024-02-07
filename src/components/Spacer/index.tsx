// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../TUI";

import { BoolValues, SizeValuesExtended, SpacerComponentValues, SpacerDirectionValues } from "../../utils/types";

import { useSpacerStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface SpacerProps {
  // Generic props
  className?: string;
  classes?: {
    spacer?: string;
  };
  style?: React.CSSProperties;
  props?: {
    spacer?: React.HTMLAttributes<HTMLDivElement> | React.HTMLAttributes<HTMLSpanElement>;
  };
  children?: React.ReactNode;
  component?: SpacerComponentValues;

  // Specialized props
  size?: SizeValuesExtended | number;
  direction?: SpacerDirectionValues;
  visualize?: BoolValues;

  // Default HTML props
  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Spacer = ({
  // Generic props
  className,
  classes,
  props,
  children,
  component,

  // Specialized props
  size = 4,
  direction = "horizontal",
  visualize = false,

  // Default HTML props
  ...rest
}: SpacerProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const spacerStyles = useSpacerStyles(theme, { size, direction, visualize });

  // CLASSNAMES //

  const clsxSpacer = clsx(spacerStyles, classes?.spacer, className) || undefined;

  // RENDER //

  return React.createElement(component || `div`, { className: clsxSpacer, ...props?.spacer, ...rest });
};

// EXPORT ---------------------------------------------------------------- //

export default Spacer;
