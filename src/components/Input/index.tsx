// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues, ColorValues, InputComponentValues, InputVariantValues, TintValues } from "../../utils/types";

import { useTUI } from "../../TUI";
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

  backdropBlur?: BoolValues;
  color?: ColorValues;
  disabled?: BoolValues;
  error?: BoolValues;
  fullWidth?: BoolValues;
  icon?: React.ReactNode;
  info?: BoolValues;
  label?: React.ReactNode;
  loading?: BoolValues;
  multiline?: BoolValues;
  required?: BoolValues;
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
  label,
  loading = false,
  multiline = false,
  required = false,
  sublabel,
  success = false,
  tint = 500,
  variant = "outlined",
  warning = false,

  // HTML Properties //

  ...rest
}: InputProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const baseStyles = useBaseStyles(theme, { fullWidth }, [classes?.base, className]);
  const labelStyles = useLabelStyles(theme, { disabled, error, info, success, warning }, [classes?.label]);
  const wrapperStyles = useWrapperStyles(
    theme,
    {
      backdropBlur,
      disabled,
      error,
      fullWidth,
      info,
      success,
      variant,
      warning,
    },
    [classes?.wrapper]
  );
  const inputStyles = useInputStyles(
    theme,
    {
      disabled,
      fullWidth,
      multiline,
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
