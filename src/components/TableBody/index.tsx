// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

import TableRow, { TableRowProps } from "@components/TableRow";

// PROPS ---------------------------------------------------------------- //

export interface TableBodyProps {
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
  zIndex?: number;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const TableBody = ({
  // General Properties //

  props,
  classes,
  className,
  children,

  // Specialized Properties //

  paddingHorizontal = 3,
  paddingVertical = 2,
  zIndex = 0,

  // HTML Properties //

  ...rest
}: TableBodyProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, { zIndex }, [classes?.root, className]);

  // Return Component
  return (
    <tbody className={rootStyles} {...props?.root} {...rest}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TableRow) {
          return React.cloneElement(child as React.ReactElement<TableRowProps>, {
            paddingHorizontal,
            paddingVertical,
            variant: `body`,
            zIndex: zIndex + 1,
          });
        }
        return child;
      })}
    </tbody>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default TableBody;
