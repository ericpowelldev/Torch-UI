// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTUI } from "../../TUI";

import { BoolValues, FlexComponentValues } from "../../utils/types";

import { useFlexStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface FlexProps {
  // General Properties //

  props?: {
    flex?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    flex?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  component?: FlexComponentValues;

  // Specialized Properties //

  alignContent?: React.CSSProperties["alignContent"];
  alignItems?: React.CSSProperties["alignItems"];
  alignSelf?: React.CSSProperties["alignSelf"];
  columnGap?: number;
  container?: BoolValues;
  containerInline?: BoolValues;
  direction?: React.CSSProperties["flexDirection"];
  gap?: number;
  justifyContent?: React.CSSProperties["justifyContent"];
  justifyItems?: React.CSSProperties["justifyItems"];
  justifySelf?: React.CSSProperties["justifySelf"];
  rowGap?: number;
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
  columnGap = 0,
  container,
  containerInline,
  direction,
  gap = 0,
  justifyContent,
  justifyItems,
  justifySelf,
  rowGap = 0,
  visualize = false,
  wrap,

  // HTML Properties //

  ...rest
}: FlexProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const flexStyles = useFlexStyles(
    theme,
    {
      alignContent,
      alignItems,
      alignSelf,
      columnGap,
      container,
      containerInline,
      direction,
      gap,
      justifyContent,
      justifyItems,
      justifySelf,
      rowGap,
      visualize,
      wrap,
    },
    [classes?.flex, className]
  );

  // Return Component
  return React.createElement(component || `div`, { className: flexStyles, ...props?.flex, ...rest }, children);
};

// EXPORT ---------------------------------------------------------------- //

export default Flex;
