// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../TUI";

import { BoolValues, ColorValues, TintValues } from "../../utils/types";

import { useIconStyles } from "./styles";

import { MdReport } from "react-icons/md";

// PROPS ---------------------------------------------------------------- //

interface IconErrorProps {
  className?: string;
  classes?: {
    icon?: string;
  };
  style?: React.CSSProperties;

  variant?: "bg" | "fg";
  color?: ColorValues;
  tint?: TintValues;
  size?: number;

  animate?: BoolValues;
  animationSpeed?: number;

  disabled?: BoolValues;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT ---------------------------------------------------------------- //

const IconError = ({
  className,
  classes,
  variant = "bg",
  color = "error",
  tint = 500,
  size = 40,
  animate = true,
  animationSpeed = 800,
  disabled,
  ...rest
}: IconErrorProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const iconStyles = useIconStyles(theme, { variant, color, tint, size, animate, animationSpeed, disabled });

  // CLASSNAMES //

  const clsxIcon = clsx(iconStyles, classes?.icon, className) || undefined;

  // RENDER //

  return <MdReport className={clsxIcon} {...rest} />;
};

// EXPORT ---------------------------------------------------------------- //

export default IconError;
