// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues, ColorValues, StatusValues, TintValues } from "../../utils/types";

import { useTUI } from "../../TUI";
import { useIconStyles } from "./styles";

import { MdCheckCircle, MdInfo, MdReport, MdWarning } from "react-icons/md";

// PROPS ---------------------------------------------------------------- //

interface StatusIconProps {
  // General Properties //

  props?: {
    icon?: React.HTMLAttributes<SVGElement>;
  };
  classes?: {
    icon?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  tooltip?: React.ReactNode;

  // Specialized Properties //

  animate?: BoolValues;
  animateMs?: number;
  color?: ColorValues;
  disabled?: BoolValues;
  size?: number;
  status?: StatusValues;
  tint?: TintValues;
  variant?: "bg" | "fg";

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const StatusIcon = ({
  // General Properties //

  props,
  classes,
  className,
  tooltip,

  // Specialized Properties //

  animate,
  animateMs,
  color,
  disabled,
  size = 36,
  status,
  tint,
  variant = "bg",

  // HTML Properties //

  ...rest
}: StatusIconProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const iconStyles = useIconStyles(
    theme,
    { animate, animateMs, color, disabled, size, status, tint, variant },
    [classes?.icon, className]
  );

  // Render Component
  if (status === "error") return <MdReport className={iconStyles} {...props?.icon} {...rest} />;
  if (status === "warning") return <MdWarning className={iconStyles} {...props?.icon} {...rest} />;
  if (status === "success")
    return <MdCheckCircle className={iconStyles} {...props?.icon} {...rest} />;
  return <MdInfo className={iconStyles} {...props?.icon} {...rest} />;
};

// EXPORT ---------------------------------------------------------------- //

export default StatusIcon;
