// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../TUI";

import { BoolValues, ColorValues, TintValues } from "../../utils/types";

import { useBaseStyles, useTrackStyles, useBarStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface IconLoadingProps {
  className?: string;
  classes?: {
    base?: string;
    track?: string;
    bar?: string;
  };
  style?: React.CSSProperties;

  variant?: "bg" | "fg";
  color?: ColorValues;
  tint?: TintValues;
  size?: number;
  thickness?: number;

  animationSpeed?: number;

  disabled?: BoolValues;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT ---------------------------------------------------------------- //

const IconLoading = ({
  className,
  classes,
  variant = "bg",
  color = "utility",
  tint = 500,
  size = 40,
  thickness = 0,
  animationSpeed = 500,
  disabled,
  ...rest
}: IconLoadingProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const baseStyles = useBaseStyles(theme);
  const trackStyles = useTrackStyles(theme, { variant, color, tint, size, thickness, disabled });
  const barStyles = useBarStyles(theme, { variant, color, tint, size, thickness, animationSpeed, disabled });

  // CLASSNAMES //

  const clsxBase = clsx(baseStyles, classes?.base, className) || undefined;
  const clsxTrack = clsx(trackStyles, classes?.track) || undefined;
  const clsxBar = clsx(barStyles, classes?.bar) || undefined;

  // RENDER //

  return (
    <div className={clsxBase} {...rest}>
      <div className={clsxTrack} />
      <div className={clsxBar} />
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default IconLoading;
