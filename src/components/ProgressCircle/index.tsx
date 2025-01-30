// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues, ColorValues, TintValues } from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles, useTrackStyles, useBarStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface ProgressCircleProps {
  // General Properties //

  props?: {
    root?: React.HTMLAttributes<HTMLElement>;
    track?: React.HTMLAttributes<HTMLElement>;
    bar?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    root?: string;
    track?: string;
    bar?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  tooltip?: React.ReactNode;

  // Specialized Properties //

  animateMs?: number;
  color?: ColorValues;
  disabled?: BoolValues;
  size?: number;
  thickness?: number;
  tint?: TintValues;
  variant?: "bg" | "fg";

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const ProgressCircle = ({
  // General Properties //

  props,
  classes,
  className,
  tooltip,

  // Specialized Properties //

  animateMs = 500,
  color = "utility",
  disabled,
  size = 40,
  thickness = 0,
  tint = 500,
  variant = "bg",

  // HTML Properties //

  ...rest
}: ProgressCircleProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, {}, [classes?.root, className]);
  const trackStyles = useTrackStyles(
    theme,
    {
      color,
      disabled,
      size,
      thickness,
      tint,
      variant,
    },
    [classes?.track]
  );
  const barStyles = useBarStyles(
    theme,
    {
      animateMs,
      color,
      disabled,
      size,
      thickness,
      tint,
      variant,
    },
    [classes?.bar]
  );

  // Render Component
  return (
    <div className={rootStyles} {...props?.root} {...rest}>
      <div className={trackStyles} {...props?.track} />
      <div className={barStyles} {...props?.bar} />
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default ProgressCircle;
