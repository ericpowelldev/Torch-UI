// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

export interface TablePaginationProps {
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

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const TablePagination = ({
  // General Properties //

  props,
  classes,
  className,
  children,

  // Specialized Properties //

  // HTML Properties //

  ...rest
}: TablePaginationProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, {}, [classes?.root, className]);

  // Return Component
  return (
    <tfoot className={rootStyles} {...props?.root} {...rest}>
      {children}
    </tfoot>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default TablePagination;
