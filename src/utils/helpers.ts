// DEPENDENCIES -------------------------------------------------- //

import {
  colorValues,
  textColorValues,
  tintValues,
  BoolValues,
  ButtonVariantValues,
  ColorValues,
  SizeValues,
  SizeValuesExtended,
  TextColorValues,
  TintValues,
} from "utils/types";

// BUTTON -------------------------------------------------- //

/** Get button padding from size prop */
export const getButtonPadding = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return `4px 6px`;
  if (size === `sm`) return `6px 9px`;
  if (size === `md`) return `8px 12px`;
  if (size === `lg`) return `10px 15px`;
  if (size === `xl` || size === `max`) return `12px 18px`;
  return `8px 12px`;
};

/** Get button label size from size prop */
export const getButtonLabelSize = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return `12px`;
  if (size === `sm`) return `13px`;
  if (size === `md`) return `14px`;
  if (size === `lg`) return `15px`;
  if (size === `xl` || size === `max`) return `16px`;
  return `14px`;
};

/** Get button icon size from size prop */
export const getButtonIconSize = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return 15;
  if (size === `sm`) return 17;
  if (size === `md`) return 18;
  if (size === `lg`) return 19;
  if (size === `xl` || size === `max`) return 21;
  return 18;
};

// COLORS -------------------------------------------------- //

/** Get color background from color and tint prop */
export const getColorBg = (theme: any, color?: ColorValues, tint?: TintValues, disabled?: BoolValues, override?: string) => {
  if (disabled && override === `fg`) return theme.color.fgd;
  if (disabled) return theme.color.bgd;
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint];
  return `inherit`;
};

/** Get color foreground from color prop */
export const getColorFg = (theme: any, color?: ColorValues, tint?: TintValues, disabled?: BoolValues) => {
  if (disabled) return theme.color.fgd;
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][`i${tint}`];
  return `inherit`;
};

/** Get color hover from background color prop */
export const getColorHover = (theme: any, variant?: ButtonVariantValues, color?: ColorValues, tint?: TintValues) => {
  if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint] + `d4`;
  if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `48`;
  if ((variant === `outline` || variant === `simple`) && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `24`;
  return `inherit`;
};

/** Get color active from background color prop */
export const getColorActive = (theme: any, variant?: ButtonVariantValues, color?: ColorValues, tint?: TintValues) => {
  if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint] + `a0`;
  if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `64`;
  if ((variant === `outline` || variant === `simple`) && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `48`;
  return `inherit`;
};

/** Get color foreground from color prop */
export const getColorText = (theme: any, color?: ColorValues | TextColorValues, tint?: TintValues) => {
  if (textColorValues.includes(color)) {
    if (color === `fg1`) return theme.color.fg[0];
    if (color === `fg2`) return theme.color.fg[1];
    if (color === `fg3`) return theme.color.fg[2];
    if (color === `fg4`) return theme.color.fg[3];
    if (color === `fgi1`) return theme.color.fgi[0];
    if (color === `fgi2`) return theme.color.fgi[1];
    if (color === `fgi3`) return theme.color.fgi[2];
    if (color === `fgi4`) return theme.color.fgi[3];
  }
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint];
  return `inherit`;
};

// LOADING -------------------------------------------------- //

/** Get the size of the spinner track */
export const getTrackSize = (size: number) => {
  if (size > 48) return size / 8;
  if (size > 36) return size / 6;
  if (size > 24) return size / 5;
  if (size > 12) return size / 4;
  return size / 2;
};

// SPACER -------------------------------------------------- //

/** Get the size of a space */
export const getSpacerSize = (size: SizeValuesExtended | number) => {
  let sizeNum = 4;
  if (typeof size === `number`) {
    sizeNum = size;
  } else if (typeof size === `string`) {
    if (size === `4xs`) sizeNum = 0.25;
    if (size === `3xs`) sizeNum = 0.5;
    if (size === `2xs`) sizeNum = 1;
    if (size === `xs`) sizeNum = 2;
    if (size === `sm`) sizeNum = 3;
    if (size === `md`) sizeNum = 4;
    if (size === `lg`) sizeNum = 6;
    if (size === `xl`) sizeNum = 8;
    if (size === `2xl`) sizeNum = 12;
    if (size === `3xl`) sizeNum = 16;
    if (size === `4xl`) sizeNum = 20;
  }
  return sizeNum;
};
