// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import {
  BoolValues,
  SizeValuesExtended,
  SpacerComponentValues,
  SpacerDirectionValues,
} from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface SpacerProps {
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
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, { direction, size, visualize }, [
    classes?.root,
    className,
  ]);

  // Return Component
  return React.createElement(component || `div`, {
    className: rootStyles,
    ...props?.root,
    ...rest,
  });
};

// EXPORT ---------------------------------------------------------------- //

export default Spacer;
