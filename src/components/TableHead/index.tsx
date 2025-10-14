// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues } from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

import TableRow, { TableRowProps } from "@components/TableRow";

// PROPS ---------------------------------------------------------------- //

export interface TableHeadProps {
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

  // Specialized Properties //

  paddingHorizontal?: number;
  paddingVertical?: number;
  sortUIEnabled?: BoolValues;
  stickyHeader?: BoolValues;
  zIndex?: number;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const TableHead = ({
  // General Properties //

  props,
  classes,
  className,
  children,

  // Specialized Properties //

  paddingHorizontal = 3,
  paddingVertical = 2,
  sortUIEnabled = true,
  stickyHeader = false,
  zIndex = 0,

  // HTML Properties //

  ...rest
}: TableHeadProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, { zIndex }, [classes?.root, className]);

  // Return Component
  return (
    <thead className={rootStyles} {...props?.root} {...rest}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TableRow) {
          return React.cloneElement(child as React.ReactElement<TableRowProps>, {
            paddingHorizontal,
            paddingVertical,
            sortUIEnabled,
            stickyHeader,
            variant: `header`,
            zIndex: zIndex + 1,
          });
        }
        return child;
      })}
    </thead>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default TableHead;
