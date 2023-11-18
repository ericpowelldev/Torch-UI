// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "providers/TUI";

import { BoolValues, ColorValues, TintValues } from "utils/types";

import { useIconStyles } from "./styles";

import { AiOutlineWarning } from "react-icons/ai";

// PROPS -------------------------------------------------- //

interface WarningIconProps {
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

const WarningIcon = ({
  children,
  className,
  classes,
  type = `bg`,
  color = `utility`,
  tint = 500,
  size = 40,
  speed = 1600,
  blink = true,
  disabled,
  ...rest
}: WarningIconProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const iconStyles = useIconStyles(theme, { type, color, tint, size, speed, blink, disabled });

  // CLASSNAMES //

  const clsxIcon = clsx(iconStyles, classes?.icon, className) || undefined;

  // RENDER //

  return <AiOutlineWarning className={clsxIcon} {...rest} />;
};

// EXPORT -------------------------------------------------- //

export default WarningIcon;
