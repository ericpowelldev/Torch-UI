// DEPENDENCIES -------------------------------------------------- //

import {
  colorValues,
  tintValues,
  BoolValues,
  ButtonVariantValues,
  ColorValues,
  SizeValues,
  SizeValuesExtended,
  TintValues,
} from "utils/types";

// BUTTON -------------------------------------------------- //

/** Get button padding from size prop */
const getButtonPadding = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return `4px 6px`;
  if (size === `sm`) return `6px 9px`;
  if (size === `md`) return `8px 12px`;
  if (size === `lg`) return `10px 15px`;
  if (size === `xl` || size === `max`) return `12px 18px`;
  return `8px 12px`;
};

/** Get button label size from size prop */
const getButtonLabelSize = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return `12px`;
  if (size === `sm`) return `13px`;
  if (size === `md`) return `14px`;
  if (size === `lg`) return `15px`;
  if (size === `xl` || size === `max`) return `16px`;
  return `14px`;
};

/** Get button icon size from size prop */
const getButtonIconSize = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return 15;
  if (size === `sm`) return 17;
  if (size === `md`) return 18;
  if (size === `lg`) return 19;
  if (size === `xl` || size === `max`) return 21;
  return 18;
};

// COLORS -------------------------------------------------- //

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

/** Get color hover from background color prop */
const getColorHover = (theme: any, variant?: ButtonVariantValues, color?: ColorValues, tint?: TintValues) => {
  if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint] + `d4`;
  if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `48`;
  if ((variant === `outline` || variant === `simple`) && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `24`;
  return `inherit`;
};

/** Get color active from background color prop */
const getColorActive = (theme: any, variant?: ButtonVariantValues, color?: ColorValues, tint?: TintValues) => {
  if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint] + `a0`;
  if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `64`;
  if ((variant === `outline` || variant === `simple`) && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `48`;
  return `inherit`;
};

// LOADING -------------------------------------------------- //

/** Get the size of the spinner track */
const getTrackSize = (size: number) => {
  if (size > 48) return size / 8;
  if (size > 36) return size / 6;
  if (size > 24) return size / 5;
  if (size > 12) return size / 4;
  return size / 2;
};

// SPACER -------------------------------------------------- //

/** Get the size of a space */
const getSpacerSize = (size: SizeValuesExtended | number) => {
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

// EXPORT -------------------------------------------------- //

export {
  getButtonPadding,
  getButtonLabelSize,
  getButtonIconSize,
  getColorBg,
  getColorFg,
  getColorHover,
  getColorActive,
  getTrackSize,
  getSpacerSize,
};
