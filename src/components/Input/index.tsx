// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTUI } from "../../TUI";

import { BoolValues, ColorValues, InputComponentValues, InputVariantValues, TintValues } from "../../utils/types";

import { useBaseStyles, useLabelStyles, useWrapperStyles, useInputStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface InputProps {
  // General Properties //

  props?: {
    base?: React.HTMLAttributes<HTMLElement>;
    label?: React.HTMLAttributes<HTMLElement>;
    sublabel?: React.HTMLAttributes<HTMLElement>;
    wrapper?: React.HTMLAttributes<HTMLElement>;
    input?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    base?: string;
    label?: string;
    sublabel?: string;
    wrapper?: string;
    input?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  component?: InputComponentValues;
  tooltip?: React.ReactNode;

  // Specialized Properties //

  label?: React.ReactNode;
  sublabel?: React.ReactNode;

  variant?: InputVariantValues;
  color?: ColorValues;
  tint?: TintValues;
  required?: BoolValues;
  multiline?: BoolValues;

  fullWidth?: BoolValues;
  backdropBlur?: BoolValues;

  icon?: React.ReactNode;

  error?: BoolValues;
  warning?: BoolValues;
  success?: BoolValues;
  info?: BoolValues;
  loading?: BoolValues;
  disabled?: BoolValues;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Input = ({
  // General Properties //

  props,
  classes,
  className,
  component,
  tooltip,

  // Specialized Properties //

  label,
  sublabel,
  variant = "standard",
  color = "primary",
  tint = 500,
  required = false,
  multiline = false,
  fullWidth = false,
  backdropBlur = false,
  icon,
  error = false,
  warning = false,
  success = false,
  info = false,
  loading = false,
  disabled = false,

  // HTML Properties //

  ...rest
}: InputProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const baseStyles = useBaseStyles(theme, { fullWidth }, [classes?.base, className]);
  const labelStyles = useLabelStyles(theme, { error, warning, success, info, disabled }, [classes?.label]);
  const wrapperStyles = useWrapperStyles(
    theme,
    {
      variant,
      fullWidth,
      backdropBlur,
      error,
      warning,
      success,
      info,
      disabled,
    },
    [classes?.wrapper]
  );
  const inputStyles = useInputStyles(
    theme,
    {
      multiline,
      fullWidth,
      disabled,
    },
    [classes?.input]
  );

  // Return Component
  return (
    <div className={baseStyles} {...props?.base}>
      {label && (
        <label className={labelStyles} {...props?.label}>
          {label}
          {required && <span style={{ color: theme.color.error[500] }}> *</span>}
        </label>
      )}

      <div className={wrapperStyles}>
        {multiline ? (
          <textarea
            className={inputStyles}
            disabled={disabled ? true : false}
            rows={rest?.rows || 3}
            {...props?.input}
            {...rest}
          />
        ) : (
          <input className={inputStyles} disabled={disabled ? true : false} {...props?.input} {...rest} />
        )}
      </div>
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Input;
