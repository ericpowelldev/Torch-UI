// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../TUI";

import { BoolValues, ButtonVariantValues, ColorValues, SizeValues, TintValues } from "../../utils/types";
import { getButtonIconSize } from "../../utils/helpers";

import { useButtonStyles, useLabelStyles, useStartIconStyles, useEndIconStyles } from "./styles";

import IconError from "../IconError";
import IconWarning from "../IconWarning";
import IconSuccess from "../IconSuccess";
import IconLoading from "../IconLoading";

// PROPS ---------------------------------------------------------------- //

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    button?: string;
    label?: string;
    startIcon?: string;
    endIcon?: string;
    iconLoading?: string;
    iconWarning?: string;
    iconError?: string;
    iconSuccess?: string;
  };
  style?: React.CSSProperties;

  variant?: ButtonVariantValues;
  color?: ColorValues;
  tint?: TintValues;
  size?: SizeValues;

  fullWidth?: BoolValues;
  pill?: BoolValues;
  buttonShadow?: BoolValues;
  textShadow?: BoolValues;
  backdropBlur?: BoolValues;
  uppercase?: BoolValues;

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

const Button = ({
  children,
  className,
  classes,
  variant = "solid",
  color = "utility",
  tint = 500,
  size = "md",
  fullWidth,
  pill,
  buttonShadow,
  textShadow,
  backdropBlur,
  uppercase = true,
  disabled,
  error,
  warning,
  success,
  loading,
  tooltip,
  icon,
  ...rest
}: ButtonProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const buttonStyles = useButtonStyles(theme, {
    variant,
    color,
    tint,
    size,
    fullWidth,
    pill,
    buttonShadow,
    textShadow,
    backdropBlur,
    disabled,
  });
  const labelStyles = useLabelStyles(theme, { size, uppercase });
  const startIconStyles = useStartIconStyles(theme, { size });
  const endIconStyles = useEndIconStyles(theme, { size });

  // CLASSNAMES //

  const clsxButton = clsx(buttonStyles, classes?.button, className) || undefined;
  const clsxLabel = clsx(labelStyles, classes?.label) || undefined;
  const clsxStartIcon = clsx(startIconStyles, classes?.startIcon) || undefined;
  const clsxEndIcon = clsx(endIconStyles, classes?.endIcon) || undefined;
  const clsxIconError = clsx(classes?.iconError) || undefined;
  const clsxIconWarning = clsx(classes?.iconWarning) || undefined;
  const clsxIconSuccess = clsx(classes?.iconSuccess) || undefined;
  const clsxIconLoading = clsx(classes?.iconLoading) || undefined;

  // RENDER //

  return (
    <button className={clsxButton} disabled={disabled ? true : false} {...rest}>
      {icon ? <span className={clsxStartIcon}>{icon}</span> : null}

      <span className={clsxLabel}>{children}</span>

      {error ? (
        <span className={clsxEndIcon}>
          <IconError
            className={clsxIconError}
            variant={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getButtonIconSize(size)}
            disabled={disabled}
          />
        </span>
      ) : warning ? (
        <span className={clsxEndIcon}>
          <IconWarning
            className={clsxIconWarning}
            variant={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getButtonIconSize(size)}
            disabled={disabled}
          />
        </span>
      ) : success ? (
        <span className={clsxEndIcon}>
          <IconSuccess
            className={clsxIconSuccess}
            variant={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getButtonIconSize(size)}
            disabled={disabled}
          />
        </span>
      ) : loading ? (
        <span className={clsxEndIcon}>
          <IconLoading
            className={clsxIconLoading}
            variant={variant === `solid` ? `fg` : `bg`}
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

// EXPORT ---------------------------------------------------------------- //

export default Button;
