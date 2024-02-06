// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../TUI";

import { BoolValues, ColorValues, SizeValues, TintValues, ToggleVariantValues } from "../../utils/types";

import {
  useToggleStyles,
  useTrackStyles,
  useSlideStyles,
  useInputStyles,
  useIconCheckedStyles,
  useIconUncheckedStyles,
} from "./styles";

import { MdLock } from "react-icons/md";

// PROPS ---------------------------------------------------------------- //

interface ToggleProps {
  className?: string;
  classes?: {
    toggle?: string;
    track?: string;
    slide?: string;
    input?: string;
    iconChecked?: string;
    iconUnchecked?: string;
  };
  style?: React.CSSProperties;
  props?: {
    toggle?: React.HTMLAttributes<HTMLDivElement>;
    track?: React.HTMLAttributes<HTMLSpanElement>;
    slide?: React.HTMLAttributes<HTMLSpanElement>;
    input?: React.InputHTMLAttributes<HTMLInputElement>;
    iconChecked?: React.HTMLAttributes<HTMLSpanElement>;
    iconUnchecked?: React.HTMLAttributes<HTMLSpanElement>;
  };

  variant?: ToggleVariantValues;
  color?: ColorValues;
  tint?: TintValues;
  size?: SizeValues;

  shadowTrack?: BoolValues;
  shadowSlide?: BoolValues;

  disabled?: BoolValues;

  iconChecked?: React.ReactNode;
  iconUnchecked?: React.ReactNode;

  tooltip?: React.ReactNode;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT ---------------------------------------------------------------- //

const Toggle = ({
  className,
  classes,
  props,
  variant = "solid",
  color = "success",
  tint = 500,
  size = "md",
  shadowTrack,
  shadowSlide,
  disabled,
  iconChecked,
  iconUnchecked,
  tooltip,
  ...rest
}: ToggleProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const toggleStyles = useToggleStyles(theme, { color, tint, size, disabled });
  const trackStyles = useTrackStyles(theme, { color, tint, size, shadowTrack, disabled });
  const slideStyles = useSlideStyles(theme, { color, tint, size, shadowSlide, disabled });
  const inputStyles = useInputStyles(theme, { color, tint, size, disabled });
  const iconCheckedStyles = useIconCheckedStyles(theme, { color, tint, size, disabled });
  const iconUncheckedStyles = useIconUncheckedStyles(theme, { color, tint, size, disabled });

  // CLASSNAMES //

  const clsxToggle = clsx(toggleStyles, classes?.toggle, className) || undefined;
  const clsxTrack = clsx(trackStyles, classes?.track) || undefined;
  const clsxSlide = clsx(slideStyles, classes?.slide) || undefined;
  const clsxInput = clsx(inputStyles, classes?.input) || undefined;
  const clsxIconChecked = clsx(iconCheckedStyles, classes?.iconChecked) || undefined;
  const clsxIconUnchecked = clsx(iconUncheckedStyles, classes?.iconUnchecked) || undefined;

  // RENDER //

  return (
    <div className={clsxToggle} {...props?.toggle}>
      <span className={clsxTrack} {...props?.track}>
        {iconChecked ? (
          <span className={clsxIconChecked} {...props?.iconChecked}>
            {iconChecked}
          </span>
        ) : null}

        {iconUnchecked ? (
          <span className={clsxIconUnchecked} {...props?.iconUnchecked}>
            {iconUnchecked}
          </span>
        ) : null}

        <span className={clsxSlide} {...props?.slide} />

        <input className={clsxInput} type="checkbox" disabled={disabled ? true : false} {...rest} {...props?.input} />
      </span>
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Toggle;
