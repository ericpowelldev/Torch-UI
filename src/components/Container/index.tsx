// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues, ContainerComponentValues, SizeValues } from "../../utils/types";

import { useTUI } from "../../TUI";
import { useContainerStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface ContainerProps {
  // General Properties //

  props?: {
    container?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    container?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  component?: ContainerComponentValues;

  // Specialized Properties //

  disablePadding?: BoolValues;
  maxWidth?: SizeValues;
  visualize?: BoolValues;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Container = ({
  // General Properties //

  props,
  classes,
  className,
  children,
  component,

  // Specialized Properties //

  disablePadding = false,
  maxWidth = "max",
  visualize = false,

  // HTML Properties //

  ...rest
}: ContainerProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const containerStyles = useContainerStyles(theme, { disablePadding, maxWidth, visualize }, [
    classes?.container,
    className,
  ]);

  // Return Component
  return React.createElement(
    component || `div`,
    { className: containerStyles, ...props?.container, ...rest },
    visualize ? (
      <div style={{ width: "100%", borderLeft: "1px dashed red", borderRight: "1px dashed red" }}>
        {children}
      </div>
    ) : (
      children
    )
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Container;
