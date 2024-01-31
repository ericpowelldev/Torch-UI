// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../provider/TUI";

import { BoolValues, ColorValues, TintValues } from "../../utils/types";

import { useIconStyles } from "./styles";

import { MdCheckCircle } from "react-icons/md";

// PROPS ---------------------------------------------------------------- //

interface IconSuccessProps {
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

const IconSuccess = ({
  className,
  classes,
  variant = "bg",
  color = "success",
  tint = 500,
  size = 40,
  animate = false,
  animationSpeed = 800,
  disabled,
  ...rest
}: IconSuccessProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const iconStyles = useIconStyles(theme, { variant, color, tint, size, animate, animationSpeed, disabled });

  // CLASSNAMES //

  const clsxIcon = clsx(iconStyles, classes?.icon, className) || undefined;

  // RENDER //

  return <MdCheckCircle className={clsxIcon} {...rest} />;
};

// EXPORT ---------------------------------------------------------------- //

export default IconSuccess;
