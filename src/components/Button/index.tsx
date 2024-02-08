// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTUI } from "../../TUI";

import { BoolValues, ButtonVariantValues, ColorValues, SizeValues, TintValues } from "../../utils/types";
import { getButtonIconSize } from "../../utils/helpers";

import { useButtonStyles, useLabelStyles, useStartIconStyles, useEndIconStyles, useCenterIconStyles } from "./styles";

import IconError from "../IconError";
import IconWarning from "../IconWarning";
import IconSuccess from "../IconSuccess";
import IconInfo from "../IconInfo";
import IconLoading from "../IconLoading";

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

  variant?: ButtonVariantValues;
  color?: ColorValues;
  tint?: TintValues;
  size?: SizeValues;

  uppercase?: BoolValues;
  fullWidth?: BoolValues;
  pill?: BoolValues;
  shadowButton?: BoolValues;
  shadowLabel?: BoolValues;
  backdropBlur?: BoolValues;

  icon?: React.ReactNode;

  error?: BoolValues;
  warning?: BoolValues;
  success?: BoolValues;
  info?: BoolValues;
  loading?: BoolValues;
  fetching?: BoolValues;
  disabled?: BoolValues;

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

  variant = "solid",
  color = "utility",
  tint = 500,
  size = "md",
  uppercase = true,
  fullWidth = false,
  pill = false,
  shadowButton = false,
  shadowLabel = false,
  backdropBlur = false,
  icon,
  error = false,
  warning = false,
  success = false,
  info = false,
  loading = false,
  fetching = false,
  disabled = false,

  // HTML Properties //

  ...rest
}: ButtonProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const buttonStyles = useButtonStyles(
    theme,
    {
      variant,
      color,
      tint,
      size,
      fullWidth,
      pill,
      shadowButton,
      shadowLabel,
      backdropBlur,
      loading,
      fetching,
      disabled,
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
          <IconError
            className={iconErrorStyles}
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
          <IconWarning
            className={iconWarningStyles}
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
          <IconSuccess
            className={iconSuccessStyles}
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
          <IconInfo
            className={iconInfoStyles}
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
          <IconLoading
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
