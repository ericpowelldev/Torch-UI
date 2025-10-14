// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { TableWrapperComponentValues } from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

export interface TableWrapperProps {
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
  component?: TableWrapperComponentValues;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const TableWrapper = ({
  // General Properties //

  props,
  classes,
  className,
  children,
  component,

  // HTML Properties //

  ...rest
}: TableWrapperProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, {}, [classes?.root, className]);

  // Return Component
  return React.createElement(
    component || `div`,
    { className: rootStyles, ...props?.root, ...rest },
    children
  );
};

// EXPORT ---------------------------------------------------------------- //

export default TableWrapper;
