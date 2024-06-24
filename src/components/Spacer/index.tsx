// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues, SizeValuesExtended, SpacerComponentValues, SpacerDirectionValues } from "../../utils/types";

import { useTUI } from "../../TUI";
import { useSpacerStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface SpacerProps {
  // General Properties //

  props?: {
    spacer?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    spacer?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  component?: SpacerComponentValues;

  // Specialized Properties //

  direction?: SpacerDirectionValues;
  size?: SizeValuesExtended | number;
  visualize?: BoolValues;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Spacer = ({
  // General Properties //

  props,
  classes,
  className,
  children,
  component,

  // Specialized Properties //

  direction = "horizontal",
  size = 4,
  visualize = false,

  // HTML Properties //

  ...rest
}: SpacerProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const spacerStyles = useSpacerStyles(theme, { direction, size, visualize }, [classes?.spacer, className]);

  // Return Component
  return React.createElement(component || `div`, { className: spacerStyles, ...props?.spacer, ...rest });
};

// EXPORT ---------------------------------------------------------------- //

export default Spacer;
