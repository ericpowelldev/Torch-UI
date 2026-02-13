// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import {
  BoolValues,
  ButtonVariantValues,
  ColorValues,
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
  disabled?: BoolValues;
  loading?: BoolValues;
  pill?: BoolValues;
  placeholder?: BoolValues;
  shadowButton?: BoolValues;
  shadowIcon?: BoolValues;
  size?: SizeValues;
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
  disabled = false,
  loading = false,
  pill = false,
  placeholder = false,
  shadowButton = false,
  shadowIcon = false,
  size = "md",
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
      disabled,
      loading,
      pill,
      placeholder,
      shadowButton,
      shadowIcon,
      size,
      tint,
      variant,
    },
    [classes?.root, className],
  );
  const iconStyles = useIconStyles(theme, { disabled, shadowIcon, size }, [classes?.icon]);
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
