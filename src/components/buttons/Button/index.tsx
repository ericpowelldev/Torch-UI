// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "providers/TUI";

import { BoolValues, ButtonVariantValues, ColorValues, SizeValues, TintValues } from "utils/types";
import { getButtonIconSize } from "utils/helpers";

import { useButtonStyles, useLabelStyles, useStartIconStyles, useEndIconStyles } from "./styles";

import ErrorIcon from "components/icons/ErrorIcon";
import WarningIcon from "components/icons/WarningIcon";
import LoadingIcon from "components/icons/LoadingIcon";
import SuccessIcon from "components/icons/SuccessIcon";

// PROPS -------------------------------------------------- //

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    button?: string;
    label?: string;
    startIcon?: string;
    endIcon?: string;
    loadingIcon?: string;
    warningIcon?: string;
    errorIcon?: string;
    successIcon?: string;
  };
  style?: React.CSSProperties;

  variant?: ButtonVariantValues;
  color?: ColorValues;
  tint?: TintValues;
  size?: SizeValues;

  tooltip?: React.ReactNode;
  icon?: React.ReactNode;

  fullWidth?: BoolValues;
  uppercase?: BoolValues;

  disabled?: BoolValues;
  error?: BoolValues;
  warning?: BoolValues;
  loading?: BoolValues;
  success?: BoolValues;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT -------------------------------------------------- //

const Button = ({
  children,
  className,
  classes,
  color = `utility`,
  tint = `500`,
  size = `md`,
  variant = `solid`,
  tooltip,
  icon,
  fullWidth,
  uppercase = true,
  disabled,
  error,
  warning,
  loading,
  success,
  ...rest
}: ButtonProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const buttonStyles = useButtonStyles(theme, { variant, color, tint, size, fullWidth, disabled });
  const labelStyles = useLabelStyles(theme, { size, uppercase });
  const startIconStyles = useStartIconStyles(theme, { size });
  const endIconStyles = useEndIconStyles(theme, { size });

  // CLASSNAMES //

  const clsxButton = clsx(buttonStyles, classes?.button, className) || undefined;
  const clsxLabel = clsx(labelStyles, classes?.label) || undefined;
  const clsxStartIcon = clsx(startIconStyles, classes?.startIcon) || undefined;
  const clsxEndIcon = clsx(endIconStyles, classes?.endIcon) || undefined;
  const clsxLoadingIcon = clsx(classes?.loadingIcon) || undefined;
  const clsxWarningIcon = clsx(classes?.warningIcon) || undefined;
  const clsxErrorIcon = clsx(classes?.errorIcon) || undefined;
  const clsxSuccessIcon = clsx(classes?.successIcon) || undefined;

  // RENDER //

  return (
    <button className={clsxButton} {...rest}>
      {icon ? <span className={clsxStartIcon}>{icon}</span> : null}

      <span className={clsxLabel}>{children}</span>

      {loading ? (
        <span className={clsxEndIcon}>
          <LoadingIcon
            className={clsxLoadingIcon}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getButtonIconSize(size)}
            disabled={disabled}
          />
        </span>
      ) : warning ? (
        <span className={clsxEndIcon}>
          <WarningIcon
            className={clsxWarningIcon}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getButtonIconSize(size)}
            disabled={disabled}
          />
        </span>
      ) : error ? (
        <span className={clsxEndIcon}>
          <ErrorIcon
            className={clsxErrorIcon}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getButtonIconSize(size)}
            disabled={disabled}
          />
        </span>
      ) : success ? (
        <span className={clsxEndIcon}>
          <SuccessIcon
            className={clsxSuccessIcon}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getButtonIconSize(size)}
            disabled={disabled}
          />
        </span>
      ) : null}
    </button>
  );
};

// EXPORT -------------------------------------------------- //

export default Button;
