// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import {
  BoolValues,
  ColorValues,
  SizeValues,
  TintValues,
  ToggleComponentValues,
  ToggleVariantValues,
} from "../../utils/types";

import { useTUI } from "../../TUI";
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

  color?: ColorValues;
  disabled?: BoolValues;
  iconChecked?: React.ReactNode;
  iconUnchecked?: React.ReactNode;
  shadowSlide?: BoolValues;
  shadowTrack?: BoolValues;
  size?: SizeValues;
  tint?: TintValues;
  variant?: ToggleVariantValues;

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

  color = "success",
  disabled = false,
  iconChecked,
  iconUnchecked,
  shadowSlide = false,
  shadowTrack = false,
  size = "md",
  tint = 500,
  variant = "solid",

  // HTML Properties //

  ...rest
}: ToggleProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const toggleStyles = useToggleStyles(theme, { color, disabled, size, tint }, [
    classes?.toggle,
    className,
  ]);
  const trackStyles = useTrackStyles(theme, { color, disabled, shadowTrack, size, tint }, [
    classes?.track,
  ]);
  const slideStyles = useSlideStyles(theme, { color, disabled, shadowSlide, size, tint }, [
    classes?.slide,
  ]);
  const inputStyles = useInputStyles(theme, { color, disabled, size, tint }, [classes?.input]);
  const iconCheckedStyles = useIconCheckedStyles(theme, { color, disabled, size, tint }, [
    classes?.iconChecked,
  ]);
  const iconUncheckedStyles = useIconUncheckedStyles(theme, { color, disabled, size, tint }, [
    classes?.iconUnchecked,
  ]);

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

        <input
          className={inputStyles}
          type="checkbox"
          disabled={disabled ? true : false}
          {...props?.input}
          {...rest}
        />
      </span>
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Toggle;
