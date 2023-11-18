// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "providers/TUI";

import { BoolValues, ColorValues, TintValues } from "utils/types";

import { useIconStyles } from "./styles";

import { MdReport } from "react-icons/md";

// PROPS -------------------------------------------------- //

interface ErrorIconProps {
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

const ErrorIcon = ({
  children,
  className,
  classes,
  type = `bg`,
  color = `utility`,
  tint = `500`,
  size = 40,
  speed = 800,
  blink = true,
  disabled,
  ...rest
}: ErrorIconProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const iconStyles = useIconStyles(theme, { type, color, tint, size, speed, blink, disabled });

  // CLASSNAMES //

  const clsxIcon = clsx(iconStyles, classes?.icon, className) || undefined;

  // RENDER //

  return <MdReport className={clsxIcon} {...rest} />;
};

// EXPORT -------------------------------------------------- //

export default ErrorIcon;
