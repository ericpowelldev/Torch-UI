// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues } from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

import TableHead, { TableHeadProps } from "@components/TableHead";
import TableBody, { TableBodyProps } from "@components/TableBody";
import TableFooter, { TableFooterProps } from "@components/TableFooter";

// PROPS ---------------------------------------------------------------- //

export interface TableProps {
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

const Table = ({
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
}: TableProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, { zIndex }, [classes?.root, className]);

  // Return Component
  return (
    <table className={rootStyles} {...props?.root} {...rest}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TableHead) {
          return React.cloneElement(child as React.ReactElement<TableHeadProps>, {
            paddingHorizontal,
            paddingVertical,
            sortUIEnabled,
            stickyHeader,
            zIndex: zIndex + 3,
          });
        }

        if (React.isValidElement(child) && child.type === TableBody) {
          return React.cloneElement(child as React.ReactElement<TableBodyProps>, {
            paddingHorizontal,
            paddingVertical,
            zIndex: zIndex + 1,
          });
        }

        if (React.isValidElement(child) && child.type === TableFooter) {
          return React.cloneElement(child as React.ReactElement<TableFooterProps>, {
            paddingHorizontal,
            paddingVertical,
            zIndex: zIndex + 2,
          });
        }

        return child;
      })}
    </table>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Table;
