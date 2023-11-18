// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import clsx from "clsx";
import { css, keyframes } from "@emotion/css";

import { colorValues, tintValues, BoolValues, ColorValues, TintValues } from "utils/types";

import { useTUI } from "providers/TUI";

// HELPERS -------------------------------------------------- //

/** Get color background from color and tint prop */
const getColorBg = (theme: any, color?: ColorValues, tint?: TintValues, disabled?: BoolValues, override?: string) => {
  if (disabled && override === `fg`) return theme.color.fgd;
  if (disabled) return theme.color.bgd;
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint];
  return theme.color.utility[`500`];
};

/** Get color foreground from color prop */
const getColorFg = (theme: any, color?: ColorValues, tint?: TintValues, disabled?: BoolValues) => {
  if (disabled) return theme.color.fgd;
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][`i${tint}`];
  return theme.color.fg[0];
};

/** Get the size of the spinner track */
const getTrackSize = (size: number) => {
  if (size > 48) return size / 8;
  if (size > 36) return size / 6;
  if (size > 24) return size / 5;
  if (size > 12) return size / 4;
  return size / 2;
};

// CLASSES -------------------------------------------------- //

const useBaseClasses = (theme: any) => {
  const cls: any = {
    base: css`
      position: relative;
      overflow: hidden;
      padding: 0;
      border: 0;
      margin: 0;
      line-height: 1;
      user-select: none;
    `,
  };

  return cls.base;
};

const useTrackClasses = (theme: any, props: any) => {
  const { type, color, tint, size, thickness, disabled } = props;

  const cls: any = {
    track: css`
      position: relative;
      width: ${size}px;
      height: ${size}px;
      border: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid
        ${type === `bg` ? getColorBg(theme, color, tint, disabled, `fg`) : getColorFg(theme, color, tint, disabled)};
      border-radius: 50%;
      background-color: transparent;
      opacity: 25%;
    `,
  };

  return cls.track;
};

const useBarClasses = (theme: any, props: any) => {
  const { type, color, tint, size, thickness, speed, disabled } = props;

  const spinKeyframes = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  const cls: any = {
    bar: css`
      position: absolute;
      top: 0;
      left: 0;
      width: ${size}px;
      height: ${size}px;
      border: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid transparent;
      border-top: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid
        ${type === `bg` ? getColorBg(theme, color, tint, disabled, `fg`) : getColorFg(theme, color, tint, disabled)};
      border-radius: 50%;
      background-color: transparent;
      animation: ${spinKeyframes} ${speed}ms linear infinite;
    `,
  };

  return cls.bar;
};

// PROPS -------------------------------------------------- //

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

// COMPONENT -------------------------------------------------- //

const LoadingIcon = ({
  children,
  className,
  classes,
  type = `bg`,
  color = `utility`,
  tint = `500`,
  size = 40,
  thickness = 0,
  speed = 500,
  disabled,
  ...rest
}: LoadingIconProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const baseClasses = useBaseClasses(theme);
  const trackClasses = useTrackClasses(theme, { type, color, tint, size, thickness, disabled });
  const barClasses = useBarClasses(theme, { type, color, tint, size, thickness, speed, disabled });

  // CLASSNAMES //

  const clsxBase = clsx(baseClasses, classes?.base, className) || undefined;
  const clsxTrack = clsx(trackClasses, classes?.track) || undefined;
  const clsxBar = clsx(barClasses, classes?.bar) || undefined;

  // RENDER //

  return (
    <div className={clsxBase} {...rest}>
      <div className={clsxTrack} />
      <div className={clsxBar} />
    </div>
  );
};

// EXPORT -------------------------------------------------- //

export default LoadingIcon;
