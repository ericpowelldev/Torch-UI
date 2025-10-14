// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import {
  BoolValues,
  CheckboxComponentValues,
  CheckboxVariantValues,
  ColorValues,
  SizeValues,
  TintValues,
} from "@utils/types";

import { useTui } from "@tui";
import {
  useRootStyles,
  useInputStyles,
  useIconCheckedStyles,
  useIconUncheckedStyles,
} from "./styles";

import { FaCheck } from "react-icons/fa6";

// PROPS ---------------------------------------------------------------- //

export interface CheckboxProps {
  // General Properties //

  props?: {
    root?: React.HTMLAttributes<HTMLElement>;
    input?: React.HTMLAttributes<HTMLElement>;
    iconChecked?: React.HTMLAttributes<HTMLElement>;
    iconUnchecked?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    root?: string;
    input?: string;
    iconChecked?: string;
    iconUnchecked?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  component?: CheckboxComponentValues;
  tooltip?: React.ReactNode;

  // Specialized Properties //

  color?: ColorValues;
  disabled?: BoolValues;
  iconChecked?: React.ReactNode;
  iconUnchecked?: React.ReactNode;
  size?: SizeValues;
  tint?: TintValues;
  variant?: CheckboxVariantValues;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Checkbox = ({
  // General Properties //

  props,
  classes,
  className,
  component,
  tooltip,

  // Specialized Properties //

  color = "primary",
  disabled = false,
  iconChecked = <FaCheck />,
  iconUnchecked,
  size = "md",
  tint = 500,
  variant = "solid",

  // HTML Properties //

  ...rest
}: CheckboxProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(
    theme,
    {
      color,
      disabled,
      size,
      tint,
      variant,
    },
    [classes?.root, className]
  );
  const inputStyles = useInputStyles(theme, { size }, [classes?.input]);
  const iconCheckedStyles = useIconCheckedStyles(
    theme,
    { color, disabled, size, tint, variant },
    [classes?.iconChecked]
  );
  const iconUncheckedStyles = useIconUncheckedStyles(
    theme,
    { color, disabled, size, tint, variant },
    [classes?.iconUnchecked]
  );

  // Return Component
  return React.createElement(
    component || `span`,
    { className: rootStyles, ...props?.root, ...rest },
    <>
      <span className={iconCheckedStyles} {...props?.iconChecked}>
        {iconChecked}
      </span>

      <span className={iconUncheckedStyles} {...props?.iconUnchecked}>
        {iconUnchecked}
      </span>

      <input
        className={inputStyles}
        type="checkbox"
        disabled={disabled ? true : false}
        {...props?.input}
        {...rest}
      />
    </>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Checkbox;
