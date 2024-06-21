// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import { cx } from "@emotion/css";

import { useTUI } from "../../TUI";

import { BoolValues, ColorValues, TintValues } from "../../utils/types";

import { useIconStyles } from "./styles";

import { MdWarning } from "react-icons/md";

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

  [x: string]: any; 
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
  animationSpeed = 1000,
  disabled,
  ...rest
}: IconWarningProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const iconStyles = useIconStyles(theme, { variant, color, tint, size, animate, animationSpeed, disabled });

  // CLASSNAMES //

  const cxIcon = cx(iconStyles, classes?.icon, className) || undefined;

  // RENDER //

  return <MdWarning className={cxIcon} {...rest} />;
};

// EXPORT ---------------------------------------------------------------- //

export default IconWarning;
