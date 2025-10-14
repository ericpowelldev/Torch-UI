// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import {
  BoolValues,
  ColorValues,
  InputComponentValues,
  InputVariantValues,
  TintValues,
} from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles, useLabelStyles, useWrapperStyles, useInputStyles } from "./styles";

import Label from "@components/Label";

// PROPS ---------------------------------------------------------------- //

export interface InputProps {
  // General Properties //

  props?: {
    root?: React.HTMLAttributes<HTMLElement>;
    label?: React.HTMLAttributes<HTMLElement>;
    sublabel?: React.HTMLAttributes<HTMLElement>;
    wrapper?: React.HTMLAttributes<HTMLElement>;
    input?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    root?: string;
    label?: string;
    sublabel?: string;
    wrapper?: string;
    input?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  component?: InputComponentValues;
  tooltip?: React.ReactNode;

  // Specialized Properties //

  backdropBlur?: BoolValues;
  color?: ColorValues;
  disabled?: BoolValues;
  error?: BoolValues;
  fullWidth?: BoolValues;
  icon?: React.ReactNode;
  info?: BoolValues;
  inverse?: BoolValues;
  label?: React.ReactNode;
  loading?: BoolValues;
  multiline?: BoolValues;
  required?: BoolValues;
  select?: BoolValues;
  sublabel?: React.ReactNode;
  success?: BoolValues;
  tint?: TintValues;
  variant?: InputVariantValues;
  warning?: BoolValues;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Input = ({
  // General Properties //

  props,
  classes,
  className,
  children,
  component,
  tooltip,

  // Specialized Properties //

  backdropBlur = false,
  color = "primary",
  disabled = false,
  error = false,
  fullWidth = false,
  icon,
  info = false,
  inverse = false,
  label,
  loading = false,
  multiline = false,
  required = false,
  select = false,
  sublabel,
  success = false,
  tint = 500,
  variant = "outlined",
  warning = false,

  // HTML Properties //

  ...rest
}: InputProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, { fullWidth }, [classes?.root, className]);
  const labelStyles = useLabelStyles(
    theme,
    { disabled, error, info, inverse, success, warning },
    [classes?.label]
  );
  const wrapperStyles = useWrapperStyles(
    theme,
    {
      backdropBlur,
      color,
      disabled,
      fullWidth,
      inverse,
      tint,
      variant,
    },
    [classes?.wrapper]
  );
  const inputStyles = useInputStyles(
    theme,
    {
      color,
      disabled,
      fullWidth,
      inverse,
      multiline,
      select,
      tint,
      variant,
    },
    [classes?.input]
  );

  // Return Component
  return (
    <div className={rootStyles} {...props?.root}>
      {label && (
        <Label
          className={labelStyles}
          disabled={disabled}
          error={error}
          info={info}
          inverse={inverse}
          required={required}
          success={success}
          warning={warning}
          {...props?.label}
        >
          {label}
        </Label>
      )}

      <div className={wrapperStyles}>
        {select ? (
          <select
            className={inputStyles}
            disabled={disabled ? true : false}
            {...props?.input}
            {...rest}
          >
            {children}
          </select>
        ) : multiline ? (
          <textarea
            className={inputStyles}
            disabled={disabled ? true : false}
            rows={rest?.rows || 3}
            {...props?.input}
            {...rest}
          />
        ) : (
          <input
            className={inputStyles}
            disabled={disabled ? true : false}
            {...props?.input}
            {...rest}
          />
        )}
      </div>
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Input;
