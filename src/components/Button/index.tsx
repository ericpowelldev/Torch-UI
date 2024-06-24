// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues, ButtonVariantValues, ColorValues, SizeValues, TintValues } from "../../utils/types";
import { getButtonIconSize } from "../../utils/helpers";

import { useTUI } from "../../TUI";
import { useButtonStyles, useLabelStyles, useStartIconStyles, useEndIconStyles, useCenterIconStyles } from "./styles";

import ProgressCircle from "../ProgressCircle";
import StatusIcon from "../StatusIcon";

// PROPS ---------------------------------------------------------------- //

interface ButtonProps {
  // General Properties //

  props?: {
    button?: React.HTMLAttributes<HTMLElement>;
    label?: React.HTMLAttributes<HTMLElement>;
    startIcon?: React.HTMLAttributes<HTMLElement>;
    endIcon?: React.HTMLAttributes<HTMLElement>;
    centerIcon?: React.HTMLAttributes<HTMLElement>;
    iconError?: React.HTMLAttributes<HTMLElement>;
    iconWarning?: React.HTMLAttributes<HTMLElement>;
    iconSuccess?: React.HTMLAttributes<HTMLElement>;
    iconInfo?: React.HTMLAttributes<HTMLElement>;
    iconLoading?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    button?: string;
    label?: string;
    startIcon?: string;
    endIcon?: string;
    centerIcon?: string;
    iconError?: string;
    iconWarning?: string;
    iconSuccess?: string;
    iconInfo?: string;
    iconLoading?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  tooltip?: React.ReactNode;

  // Specialized Properties //

  backdropBlur?: BoolValues;
  color?: ColorValues;
  disabled?: BoolValues;
  error?: BoolValues;
  fullWidth?: BoolValues;
  icon?: React.ReactNode;
  info?: BoolValues;
  loading?: BoolValues;
  pill?: BoolValues;
  placeholder?: BoolValues;
  shadowButton?: BoolValues;
  shadowLabel?: BoolValues;
  size?: SizeValues;
  success?: BoolValues;
  tint?: TintValues;
  uppercase?: BoolValues;
  variant?: ButtonVariantValues;
  warning?: BoolValues;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Button = ({
  // General Properties //

  props,
  classes,
  className,
  children,
  tooltip,

  // Specialized Properties //

  backdropBlur = false,
  color = "utility",
  disabled = false,
  error = false,
  fullWidth = false,
  icon,
  info = false,
  loading = false,
  pill = false,
  placeholder = false,
  shadowButton = false,
  shadowLabel = false,
  size = "md",
  success = false,
  tint = 500,
  uppercase = false,
  variant = "solid",
  warning = false,

  // HTML Properties //

  ...rest
}: ButtonProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const buttonStyles = useButtonStyles(
    theme,
    {
      backdropBlur,
      color,
      disabled,
      fullWidth,
      loading,
      pill,
      placeholder,
      shadowButton,
      shadowLabel,
      size,
      tint,
      variant,
    },
    [classes?.button, className]
  );
  const labelStyles = useLabelStyles(theme, { size, uppercase }, [classes?.label]);
  const startIconStyles = useStartIconStyles(theme, { size }, [classes?.startIcon]);
  const endIconStyles = useEndIconStyles(theme, { size }, [classes?.endIcon]);
  const centerIconStyles = useCenterIconStyles(theme, { size }, [classes?.centerIcon]);
  const iconErrorStyles = classes?.iconError || undefined;
  const iconWarningStyles = classes?.iconWarning || undefined;
  const iconSuccessStyles = classes?.iconSuccess || undefined;
  const iconInfoStyles = classes?.iconInfo || undefined;
  const iconLoadingStyles = classes?.iconLoading || undefined;

  // Return Component
  return (
    <button className={buttonStyles} disabled={disabled ? true : false} {...props?.button} {...rest}>
      {icon ? (
        <span className={startIconStyles} {...props?.startIcon}>
          {icon}
        </span>
      ) : null}

      <span className={labelStyles} {...props?.label}>
        {children}
      </span>

      {error ? (
        <span className={endIconStyles} {...props?.endIcon}>
          <StatusIcon
            className={iconErrorStyles}
            status={`error`}
            variant={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getButtonIconSize(size)}
            disabled={disabled}
            {...props?.iconError}
          />
        </span>
      ) : warning ? (
        <span className={endIconStyles} {...props?.endIcon}>
          <StatusIcon
            className={iconWarningStyles}
            status={`warning`}
            variant={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getButtonIconSize(size)}
            disabled={disabled}
            {...props?.iconWarning}
          />
        </span>
      ) : success ? (
        <span className={endIconStyles} {...props?.endIcon}>
          <StatusIcon
            className={iconSuccessStyles}
            status={`success`}
            variant={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getButtonIconSize(size)}
            disabled={disabled}
            {...props?.iconSuccess}
          />
        </span>
      ) : info ? (
        <span className={endIconStyles} {...props?.endIcon}>
          <StatusIcon
            className={iconInfoStyles}
            status={`info`}
            variant={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getButtonIconSize(size)}
            disabled={disabled}
            {...props?.iconInfo}
          />
        </span>
      ) : null}

      {loading ? (
        <div className={centerIconStyles} {...props?.centerIcon}>
          <ProgressCircle
            className={iconLoadingStyles}
            variant={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getButtonIconSize(size)}
            disabled={disabled}
            {...props?.iconLoading}
          />
        </div>
      ) : null}
    </button>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Button;
