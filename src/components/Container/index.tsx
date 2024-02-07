// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../TUI";

import { useContainerStyles } from "./styles";

import { BoolValues, ContainerComponentValues, SizeValues } from "../../utils/types";

// PROPS ---------------------------------------------------------------- //

interface ContainerProps {
  // Generic props
  className?: string;
  classes?: {
    container?: string;
  };
  style?: React.CSSProperties;
  props?: {
    container?: React.HTMLAttributes<HTMLDivElement> | React.HTMLAttributes<HTMLSpanElement>;
  };
  children?: React.ReactNode;
  component?: ContainerComponentValues;

  // Specialized props
  maxWidth?: SizeValues;
  disablePadding?: BoolValues;
  visualize?: BoolValues;

  // Default HTML props
  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Container = ({
  // Generic props
  className,
  classes,
  props,
  children,
  component,

  // Specialized props
  maxWidth = "max",
  disablePadding = false,
  visualize = false,

  // Default HTML props
  ...rest
}: ContainerProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const containerStyles = useContainerStyles(theme, { maxWidth, disablePadding, visualize });

  // CLASSNAMES //

  const clsxContainer = clsx(containerStyles, classes?.container, className) || undefined;

  // RENDER //

  return React.createElement(
    component || `div`,
    { className: clsxContainer, ...props?.container, ...rest },
    visualize ? (
      <div style={{ width: "100%", borderLeft: "2px dashed red", borderRight: "2px dashed red" }}>{children}</div>
    ) : (
      children
    )
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Container;
