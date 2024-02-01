// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../TUI";

import { BoolValues, ColorValues, InputVariantValues, TintValues } from "../../utils/types";

import { useBaseStyles, useLabelStyles, useWrapperStyles, useInputStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface InputProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    base?: string;
    label?: string;
    sublabel?: string;
    wrapper?: string;
    input?: string;
  };
  style?: React.CSSProperties;

  label?: React.ReactNode;
  sublabel?: React.ReactNode;

  variant?: InputVariantValues;
  color?: ColorValues;
  tint?: TintValues;

  required?: BoolValues;
  multiline?: BoolValues;
  fullWidth?: BoolValues;
  backdropBlur?: BoolValues;

  disabled?: BoolValues;
  error?: BoolValues;
  warning?: BoolValues;
  success?: BoolValues;
  loading?: BoolValues;

  tooltip?: React.ReactNode;
  icon?: React.ReactNode;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT ---------------------------------------------------------------- //

const Input = ({
  children,
  className,
  classes,
  label,
  sublabel,
  variant = "standard",
  color = "primary",
  tint = 500,
  required,
  multiline,
  fullWidth,
  backdropBlur,
  disabled,
  error,
  warning,
  success,
  loading,
  tooltip,
  icon,
  ...rest
}: InputProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const baseStyles = useBaseStyles(theme, { fullWidth });
  const labelStyles = useLabelStyles(theme, { variant, fullWidth, backdropBlur, disabled, error, warning, success });
  const wrapperStyles = useWrapperStyles(theme, {
    variant,
    fullWidth,
    backdropBlur,
    disabled,
    error,
    warning,
    success,
  });
  const inputStyles = useInputStyles(theme, {
    multiline,
    fullWidth,
    disabled,
  });

  // CLASSNAMES //

  const clsxBase = clsx(baseStyles, classes?.base, className) || undefined;
  const clsxLabel = clsx(labelStyles, classes?.label, className) || undefined;
  const clsxWrapper = clsx(wrapperStyles, classes?.wrapper, className) || undefined;
  const clsxInput = clsx(inputStyles, classes?.input, className) || undefined;

  // RENDER //

  return (
    <div className={clsxBase}>
      {label && (
        <label className={clsxLabel}>
          {label}
          {required && <span style={{ color: theme.color.error[500] }}> *</span>}
        </label>
      )}

      <div className={clsxWrapper}>
        {multiline ? (
          <textarea className={clsxInput} disabled={disabled ? true : false} rows={rest?.rows || 3} {...rest} />
        ) : (
          <input className={clsxInput} disabled={disabled ? true : false} {...rest} />
        )}
      </div>
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Input;
