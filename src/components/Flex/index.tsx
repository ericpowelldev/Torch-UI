// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues, FlexComponentValues } from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

export interface FlexProps {
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
  component?: FlexComponentValues;

  // Specialized Properties //

  alignContent?: React.CSSProperties["alignContent"];
  alignItems?: React.CSSProperties["alignItems"];
  alignSelf?: React.CSSProperties["alignSelf"];
  basis?: number | string;
  columnGap?: number;
  container?: BoolValues;
  containerInline?: BoolValues;
  direction?: React.CSSProperties["flexDirection"];
  gap?: number;
  grow?: number;
  justifyContent?: React.CSSProperties["justifyContent"];
  justifyItems?: React.CSSProperties["justifyItems"];
  justifySelf?: React.CSSProperties["justifySelf"];
  rowGap?: number;
  shrink?: number;
  visualize?: BoolValues;
  wrap?: React.CSSProperties["flexWrap"];

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Flex = ({
  // General Properties //

  props,
  classes,
  className,
  children,
  component,

  // Specialized Properties //

  alignContent,
  alignItems,
  alignSelf,
  basis,
  columnGap,
  container,
  containerInline,
  direction,
  gap,
  grow,
  justifyContent,
  justifyItems,
  justifySelf,
  rowGap,
  shrink,
  visualize = false,
  wrap,

  // HTML Properties //

  ...rest
}: FlexProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(
    theme,
    {
      alignContent,
      alignItems,
      alignSelf,
      basis,
      columnGap,
      container,
      containerInline,
      direction,
      gap,
      grow,
      justifyContent,
      justifyItems,
      justifySelf,
      rowGap,
      shrink,
      visualize,
      wrap,
    },
    [classes?.root, className]
  );

  // Return Component
  return React.createElement(
    component || `div`,
    { className: rootStyles, ...props?.root, ...rest },
    children
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Flex;
