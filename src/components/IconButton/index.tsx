// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import {
  BoolValues,
  ButtonVariantValues,
  ColorValues,
  ColorOverrideValues,
  ElevationValues,
  SizeValues,
  TintValues,
} from "@utils/types";
import { getButtonIconSize } from "@utils/helpers";

import { useTui } from "@tui";
import { useRootStyles, useIconStyles, useCenterIconStyles } from "./styles";

import ProgressCircle from "@components/ProgressCircle";

// PROPS ---------------------------------------------------------------- //

export interface IconButtonProps {
  // General Properties //

  props?: {
    root?: React.HTMLAttributes<HTMLElement>;
    icon?: React.HTMLAttributes<HTMLElement>;
    iconLoading?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    root?: string;
    icon?: string;
    iconLoading?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;

  // Specialized Properties //

  backdropBlur?: BoolValues;
  color?: ColorValues;
  colorOverride?: ColorOverrideValues;
  disabled?: BoolValues;
  elevation?: ElevationValues;
  loading?: BoolValues;
  rounded?: BoolValues;
  size?: SizeValues;
  suspended?: BoolValues;
  tint?: TintValues;
  variant?: ButtonVariantValues;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const IconButton = ({
  // General Properties //

  props,
  classes,
  className,
  children,

  // Specialized Properties //

  backdropBlur = false,
  color = "primary",
  colorOverride = "none",
  disabled = false,
  elevation = 0,
  loading = false,
  rounded = false,
  size = "md",
  suspended = false,
  tint = 500,
  variant = "solid",

  // HTML Properties //

  ...rest
}: IconButtonProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(
    theme,
    {
      backdropBlur,
      color,
      colorOverride,
      disabled,
      elevation,
      loading,
      rounded,
      size,
      suspended,
      tint,
      variant,
    },
    [classes?.root, className],
  );
  const iconStyles = useIconStyles(theme, { disabled, size }, [classes?.icon]);
  const centerIconStyles = useCenterIconStyles(theme, {}, []);
  const iconLoadingStyles = classes?.iconLoading || undefined;

  // Return Component
  return (
    <button
      className={rootStyles}
      disabled={disabled ? true : false}
      {...props?.root}
      {...rest}
    >
      <span className={iconStyles} {...props?.icon}>
        {children}
      </span>

      {loading ? (
        <div className={centerIconStyles} {...props?.iconLoading}>
          <ProgressCircle
            className={iconLoadingStyles}
            variant={variant === "solid" ? "fg" : "bg"}
            color={color as any}
            colorOverride={colorOverride}
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

export default IconButton;
