// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../providers/TUI";

import { BoolValues, ColorValues, TintValues } from "../../utils/types";

import { useIconStyles } from "./styles";

import { MdInfo } from "react-icons/md";

// PROPS ---------------------------------------------------------------- //

interface IconInfoProps {
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

const IconInfo = ({
  className,
  classes,
  variant = "bg",
  color = "info",
  tint = 500,
  size = 40,
  animate = false,
  animationSpeed = 800,
  disabled,
  ...rest
}: IconInfoProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const iconStyles = useIconStyles(theme, { variant, color, tint, size, animate, animationSpeed, disabled });

  // CLASSNAMES //

  const clsxIcon = clsx(iconStyles, classes?.icon, className) || undefined;

  // RENDER //

  return <MdInfo className={clsxIcon} {...rest} />;
};

// EXPORT ---------------------------------------------------------------- //

export default IconInfo;
