// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTUI } from "../../TUI";

import { BoolValues, SizeValuesExtended, SpacerComponentValues, SpacerDirectionValues } from "../../utils/types";

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

  size?: SizeValuesExtended | number;
  direction?: SpacerDirectionValues;
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

  size = 4,
  direction = "horizontal",
  visualize = false,

  // HTML Properties //

  ...rest
}: SpacerProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const spacerStyles = useSpacerStyles(theme, { size, direction, visualize }, [classes?.spacer, className]);

  // Return Component
  return React.createElement(component || `div`, { className: spacerStyles, ...props?.spacer, ...rest });
};

// EXPORT ---------------------------------------------------------------- //

export default Spacer;
