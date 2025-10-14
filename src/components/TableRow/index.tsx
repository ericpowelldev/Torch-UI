// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues, TableSectionVariantValues } from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

import TableCell, { TableCellProps } from "@components/TableCell";

// PROPS ---------------------------------------------------------------- //

export interface TableRowProps {
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
  variant?: TableSectionVariantValues;
  zIndex?: number;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const TableRow = ({
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
  variant = `body`,
  zIndex = 0,

  // HTML Properties //

  ...rest
}: TableRowProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, { stickyHeader, variant, zIndex }, [
    classes?.root,
    className,
  ]);

  // Return Component
  return (
    <tr className={rootStyles} {...props?.root} {...rest}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TableCell) {
          return React.cloneElement(child as React.ReactElement<TableCellProps>, {
            paddingHorizontal,
            paddingVertical,
            sortUIEnabled,
            variant,
            zIndex: zIndex + 1,
          });
        }
        return child;
      })}
    </tr>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default TableRow;
