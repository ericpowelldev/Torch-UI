// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues, ColorValues, StatusValues, TintValues } from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

import { MdCheckCircle, MdInfo, MdReport, MdWarning } from "react-icons/md";

// PROPS ---------------------------------------------------------------- //

interface StatusIconProps {
  // General Properties //

  props?: {
    root?: React.HTMLAttributes<SVGElement>;
  };
  classes?: {
    root?: string;
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
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(
    theme,
    { animate, animateMs, color, disabled, size, status, tint, variant },
    [classes?.root, className]
  );

  // Render Component
  if (status === "error") return <MdReport className={rootStyles} {...props?.root} {...rest} />;
  if (status === "warning")
    return <MdWarning className={rootStyles} {...props?.root} {...rest} />;
  if (status === "success")
    return <MdCheckCircle className={rootStyles} {...props?.root} {...rest} />;
  return <MdInfo className={rootStyles} {...props?.root} {...rest} />;
};

// EXPORT ---------------------------------------------------------------- //

export default StatusIcon;
