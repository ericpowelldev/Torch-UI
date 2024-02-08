// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTUI } from "../../TUI";

import { BoolValues, ColorValues, SizeValues, TintValues, ToggleComponentValues, ToggleVariantValues } from "../../utils/types";

import {
  useToggleStyles,
  useTrackStyles,
  useSlideStyles,
  useInputStyles,
  useIconCheckedStyles,
  useIconUncheckedStyles,
} from "./styles";

// PROPS ---------------------------------------------------------------- //

interface ToggleProps {
  // General Properties //

  props?: {
    toggle?: React.HTMLAttributes<HTMLElement>;
    track?: React.HTMLAttributes<HTMLElement>;
    slide?: React.HTMLAttributes<HTMLElement>;
    input?: React.InputHTMLAttributes<HTMLInputElement>;
    iconChecked?: React.HTMLAttributes<HTMLElement>;
    iconUnchecked?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    toggle?: string;
    track?: string;
    slide?: string;
    input?: string;
    iconChecked?: string;
    iconUnchecked?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  component?: ToggleComponentValues;
  tooltip?: React.ReactNode;

  // Specialized Properties //

  variant?: ToggleVariantValues;
  color?: ColorValues;
  tint?: TintValues;
  size?: SizeValues;

  shadowTrack?: BoolValues;
  shadowSlide?: BoolValues;

  iconChecked?: React.ReactNode;
  iconUnchecked?: React.ReactNode;

  disabled?: BoolValues;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Toggle = ({
  // General Properties //

  props,
  classes,
  className,
  component,
  tooltip,

  // Specialized Properties //

  variant = "solid",
  color = "success",
  tint = 500,
  size = "md",
  shadowTrack = false,
  shadowSlide = false,
  iconChecked,
  iconUnchecked,
  disabled = false,

  // HTML Properties //

  ...rest
}: ToggleProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const toggleStyles = useToggleStyles(theme, { color, tint, size, disabled }, [classes?.toggle, className]);
  const trackStyles = useTrackStyles(theme, { color, tint, size, shadowTrack, disabled }, [classes?.track]);
  const slideStyles = useSlideStyles(theme, { color, tint, size, shadowSlide, disabled }, [classes?.slide]);
  const inputStyles = useInputStyles(theme, { color, tint, size, disabled }, [classes?.input]);
  const iconCheckedStyles = useIconCheckedStyles(theme, { color, tint, size, disabled }, [classes?.iconChecked]);
  const iconUncheckedStyles = useIconUncheckedStyles(theme, { color, tint, size, disabled }, [classes?.iconUnchecked]);

  // Return Component
  return (
    <div className={toggleStyles} {...props?.toggle}>
      <span className={trackStyles} {...props?.track}>
        {iconChecked ? (
          <span className={iconCheckedStyles} {...props?.iconChecked}>
            {iconChecked}
          </span>
        ) : null}

        {iconUnchecked ? (
          <span className={iconUncheckedStyles} {...props?.iconUnchecked}>
            {iconUnchecked}
          </span>
        ) : null}

        <span className={slideStyles} {...props?.slide} />

        <input className={inputStyles} type="checkbox" disabled={disabled ? true : false} {...props?.input} {...rest} />
      </span>
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Toggle;
