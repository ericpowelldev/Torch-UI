// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../provider/TUI";

import { BoolValues, ColorValues, TintValues } from "../../utils/types";

import { useIconStyles } from "./styles";

import { AiOutlineWarning } from "react-icons/ai";

// PROPS ---------------------------------------------------------------- //

interface IconWarningProps {
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

const IconWarning = ({
  className,
  classes,
  variant = "bg",
  color = "warning",
  tint = 500,
  size = 40,
  animate = true,
  animationSpeed = 1600,
  disabled,
  ...rest
}: IconWarningProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const iconStyles = useIconStyles(theme, { variant, color, tint, size, animate, animationSpeed, disabled });

  // CLASSNAMES //

  const clsxIcon = clsx(iconStyles, classes?.icon, className) || undefined;

  // RENDER //

  return <AiOutlineWarning className={clsxIcon} {...rest} />;
};

// EXPORT ---------------------------------------------------------------- //

export default IconWarning;
