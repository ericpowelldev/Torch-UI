// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import { cx } from "../../utils/emotion";

import { useTUI } from "../../TUI";

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

  [x: string]: any; 
}

// COMPONENT ---------------------------------------------------------------- //

const IconSuccess = ({
  className,
  classes,
  variant = "bg",
  color = "success",
  tint = 500,
  size = 40,
  animate = true,
  animationSpeed = 2000,
  disabled,
  ...rest
}: IconSuccessProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const iconStyles = useIconStyles(theme, { variant, color, tint, size, animate, animationSpeed, disabled });

  // CLASSNAMES //

  const cxIcon = cx(iconStyles, classes?.icon, className) || undefined;

  // RENDER //

  return <MdCheckCircle className={cxIcon} {...rest} />;
};

// EXPORT ---------------------------------------------------------------- //

export default IconSuccess;
