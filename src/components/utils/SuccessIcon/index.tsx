// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import clsx from "clsx";
import { css, keyframes } from "@emotion/css";

import { colorValues, tintValues, BoolValues, ColorValues, TintValues } from "utils/types";

import { useTUI } from "providers/TUI";

import { MdCheckCircle } from "react-icons/md";

// HELPERS -------------------------------------------------- //

/** Get color background from color and tint prop */
const getColorBg = (theme: any, color?: ColorValues, tint?: TintValues, disabled?: BoolValues, override?: string) => {
  if (disabled && override === `fg`) return theme.color.fgd;
  if (disabled) return theme.color.bgd;
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint];
  return theme.color.utility[`500`];
};

/** Get color foreground from color prop */
const getColorFg = (theme: any, color?: ColorValues, tint?: TintValues, disabled?: BoolValues) => {
  if (disabled) return theme.color.fgd;
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][`i${tint}`];
  return theme.color.fg[0];
};

// CLASSES -------------------------------------------------- //

const useIconClasses = (theme: any, props: any) => {
  const { type, color, tint, size, speed, blink, disabled } = props;

  const blinkKeyframes = keyframes`
    0% {
      opacity: 0.5;
    }
    45% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  `;

  const cls: any = {
    icon_base: css`
      position: relative;
      display: block;
      width: ${size}px;
      height: ${size}px;
      padding: 0;
      border: 0;
      border-radius: 50%;
      margin: 0;
      line-height: 1;
      user-select: none;
      animation: ${blinkKeyframes} ${blink ? speed : 0}ms infinite;
      color: ${type === `bg` ? getColorBg(theme, color, tint, disabled, `fg`) : getColorFg(theme, color, tint, disabled)};
    `,
  };

  return cls.icon_base;
};

// PROPS -------------------------------------------------- //

interface SuccessIconProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    icon?: string;
  };
  style?: React.CSSProperties;

  type?: `bg` | `fg`;
  color?: ColorValues;
  tint?: TintValues;
  size?: number;
  speed?: number;

  blink?: BoolValues;

  disabled?: BoolValues;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT -------------------------------------------------- //

const SuccessIcon = ({
  children,
  className,
  classes,
  type = `bg`,
  color = `utility`,
  tint = `500`,
  size = 40,
  speed = 800,
  blink,
  disabled,
  ...rest
}: SuccessIconProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const iconClasses = useIconClasses(theme, { type, color, tint, size, speed, blink, disabled });

  // CLASSNAMES //

  const clsxIcon = clsx(iconClasses, classes?.icon, className) || undefined;

  // RENDER //

  return <MdCheckCircle className={clsxIcon} {...rest} />;
};

// EXPORT -------------------------------------------------- //

export default SuccessIcon;
