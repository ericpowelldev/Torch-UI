// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues, ContainerComponentValues, SizeValues } from "@utils/types";

import { useTui } from "@tui";
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

  horizontalPadding?: BoolValues;
  verticalPadding?: BoolValues;
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

  horizontalPadding = true,
  verticalPadding = false,
  maxWidth = "max",
  visualize = false,

  // HTML Properties //

  ...rest
}: ContainerProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const containerStyles = useContainerStyles(
    theme,
    {
      horizontalPadding,
      verticalPadding,
      maxWidth,
      visualize,
    },
    [classes?.container, className]
  );

  // Return Component
  return React.createElement(
    component || `div`,
    { className: containerStyles, ...props?.container, ...rest },
    visualize ? (
      <div
        style={{
          width: "100%",
          borderTop: "1px dashed black",
          borderBottom: "1px dashed black",
          borderLeft: "1px dashed red",
          borderRight: "1px dashed red",
        }}
      >
        {children}
      </div>
    ) : (
      children
    )
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Container;
