// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "providers/TUI";

import { BoolValues, ColorValues, TintValues } from "utils/types";

import { useBaseStyles, useTrackStyles, useBarStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface LoadingIconProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    base?: string;
    track?: string;
    bar?: string;
  };
  style?: React.CSSProperties;

  type?: `bg` | `fg`;
  color?: ColorValues;
  tint?: TintValues;
  size?: number;
  thickness?: number;
  speed?: number;

  disabled?: BoolValues;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT ---------------------------------------------------------------- //

const LoadingIcon = ({
  children,
  className,
  classes,
  type = `bg`,
  color = `utility`,
  tint = 500,
  size = 40,
  thickness = 0,
  speed = 500,
  disabled,
  ...rest
}: LoadingIconProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const baseStyles = useBaseStyles(theme);
  const trackStyles = useTrackStyles(theme, { type, color, tint, size, thickness, disabled });
  const barStyles = useBarStyles(theme, { type, color, tint, size, thickness, speed, disabled });

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

export default LoadingIcon;
