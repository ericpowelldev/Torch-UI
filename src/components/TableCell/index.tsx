// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import {
  BoolValues,
  SortDirectionValues,
  TableAlignmentValues,
  TableSectionVariantValues,
} from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles, useIconStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

export interface TableCellProps {
  // General Properties //

  props?: {
    root?: React.HTMLAttributes<HTMLElement>;
    icon?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    root?: string;
    icon?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;

  // Specialized Properties //

  align?: TableAlignmentValues;
  minWidth?: number;
  maxWidth?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  sortActive?: BoolValues;
  sortDirection?: SortDirectionValues;
  sortUIEnabled?: BoolValues;
  variant?: TableSectionVariantValues;
  zIndex?: number;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const TableCell = ({
  // General Properties //

  props,
  classes,
  className,
  children,

  // Specialized Properties //

  align = `left`,
  minWidth,
  maxWidth,
  paddingHorizontal = 3,
  paddingVertical = 2,
  sortActive = false,
  sortDirection = `asc`,
  sortUIEnabled = true,
  variant = `body`,
  zIndex = 0,

  // HTML Properties //

  ...rest
}: TableCellProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(
    theme,
    {
      align,
      minWidth,
      maxWidth,
      paddingHorizontal,
      paddingVertical,
      sortActive,
      sortUIEnabled,
      variant,
      zIndex,
    },
    [classes?.root, className]
  );
  const iconStyles = useIconStyles(theme, { align, sortActive, sortUIEnabled }, [
    classes?.icon,
  ]);

  // Return Component
  if (variant === `header`) {
    return (
      <th className={rootStyles} {...props?.root} {...rest}>
        {sortUIEnabled && align === `right` ? (
          <span className={iconStyles} {...props?.icon}>
            {sortDirection === `asc` ? `↑` : `↓`}
          </span>
        ) : null}

        {children}

        {sortUIEnabled && align !== `right` ? (
          <span className={iconStyles} {...props?.icon}>
            {sortDirection === `asc` ? `↑` : `↓`}
          </span>
        ) : null}
      </th>
    );
  }
  return (
    <td className={rootStyles} {...props?.root} {...rest}>
      {children}
    </td>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default TableCell;
