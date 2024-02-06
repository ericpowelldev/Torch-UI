// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../TUI";

import { BoolValues, ColorValues, SizeValues, TintValues, ToggleVariantValues } from "../../utils/types";
// import { getToggleSize } from "../../utils/helpers";

import { useToggleStyles, useTrackStyles, useSlideStyles, useInputStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface ToggleProps {
  className?: string;
  classes?: {
    toggle?: string;
    track?: string;
    slide?: string;
    input?: string;
  };
  style?: React.CSSProperties;

  variant?: ToggleVariantValues;
  color?: ColorValues;
  tint?: TintValues;
  size?: SizeValues;

  shadow?: BoolValues;

  disabled?: BoolValues;

  tooltip?: React.ReactNode;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT ---------------------------------------------------------------- //

const Toggle = ({
  className,
  classes,
  variant = "solid",
  color = "utility",
  tint = 500,
  size = "md",
  shadow,
  disabled,
  tooltip,
  ...rest
}: ToggleProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const toggleStyles = useToggleStyles(theme, { color, tint, size, shadow, disabled });
  const trackStyles = useTrackStyles(theme, { color, tint, size, shadow, disabled });
  const slideStyles = useSlideStyles(theme, { color, tint, size, shadow, checked: rest?.checked, disabled });
  const inputStyles = useInputStyles(theme, { color, tint, size, shadow, disabled });

  // CLASSNAMES //

  const clsxToggle = clsx(toggleStyles, classes?.toggle, className) || undefined;
  const clsxTrack = clsx(trackStyles, classes?.track) || undefined;
  const clsxSlide = clsx(slideStyles, classes?.slide) || undefined;
  const clsxInput = clsx(inputStyles, classes?.input) || undefined;

  // RENDER //

  return (
    <div className={clsxToggle}>
      <span className={clsxTrack}>
        <span className={clsxSlide}>
          <input className={clsxInput} type="checkbox" disabled={disabled ? true : false} {...rest} />
        </span>
      </span>
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Toggle;
