// DEPENDENCIES ---------------------------------------------------------------- //

import {
  AlphaTintValues,
  bgColorValues,
  BGColorValues,
  BoolValues,
  ButtonVariantValues,
  colorValues,
  ColorValues,
  fgColorValues,
  FGColorValues,
  InputVariantValues,
  InverseTintValues,
  SelectorValues,
  SizeValues,
  SizeValuesExtended,
  tintValues,
  TintValues,
} from "./types";

// BOX ---------------------------------------------------------------- //

export const getBoxColor = (
  theme: any,
  color?: `inherit` | BGColorValues | FGColorValues | ColorValues,
  tint?: TintValues | InverseTintValues | AlphaTintValues
) => {
  if (color === `bg1`) return theme.color.bg[0];
  if (color === `bg2`) return theme.color.bg[1];
  if (color === `bg3`) return theme.color.bg[2];
  if (color === `bg4`) return theme.color.bg[3];
  if (color === `bgi1`) return theme.color.bgi[0];
  if (color === `bgi2`) return theme.color.bgi[1];
  if (color === `bgi3`) return theme.color.bgi[2];
  if (color === `bgi4`) return theme.color.bgi[3];
  if (color === `fg1`) return theme.color.fg[0];
  if (color === `fg2`) return theme.color.fg[1];
  if (color === `fg3`) return theme.color.fg[2];
  if (color === `fg4`) return theme.color.fg[3];
  if (color === `fgi1`) return theme.color.fgi[0];
  if (color === `fgi2`) return theme.color.fgi[1];
  if (color === `fgi3`) return theme.color.fgi[2];
  if (color === `fgi4`) return theme.color.fgi[3];
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint];
  return `inherit`;
};

// BUTTON ---------------------------------------------------------------- //

/** Get button padding */
export const getButtonPadding = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return `2px 4px`;
  if (size === `sm`) return `5px 8px`;
  if (size === `md`) return `8px 12px`;
  if (size === `lg`) return `11px 16px`;
  if (size === `xl` || size === `max`) return `14px 20px`;
  return `8px 12px`;
};

/** Get button label size */
export const getButtonLabelSize = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return 10;
  if (size === `sm`) return 12;
  if (size === `md`) return 14;
  if (size === `lg`) return 16;
  if (size === `xl` || size === `max`) return 18;
  return 14;
};

/** Get button label height */
export const getButtonLabelHeight = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return 12;
  if (size === `sm`) return 14;
  if (size === `md`) return 16;
  if (size === `lg`) return 18;
  if (size === `xl` || size === `max`) return 20;
  return 16;
};

/** Get button icon size */
export const getButtonIconSize = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return 12;
  if (size === `sm`) return 14;
  if (size === `md`) return 16;
  if (size === `lg`) return 18;
  if (size === `xl` || size === `max`) return 20;
  return 16;
};

/** Get button icon margin */
export const getButtonIconMargin = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return 4;
  if (size === `sm`) return 6;
  if (size === `md`) return 8;
  if (size === `lg`) return 10;
  if (size === `xl` || size === `max`) return 12;
  return 8;
};

// COLORS ---------------------------------------------------------------- //

/** Get color foreground */
export const getColorFg = (theme: any, color?: ColorValues, tint?: TintValues, disabled?: BoolValues, override?: string) => {
  if (disabled && override === `bg`) return theme.color.bgd;
  if (disabled) return theme.color.fgd;
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][`i${tint}`];
  return `inherit`;
};

/** Get color background */
export const getColorBg = (theme: any, color?: ColorValues, tint?: TintValues, disabled?: BoolValues, override?: string) => {
  if (disabled && override === `fg`) return theme.color.fgd;
  if (disabled) return theme.color.bgd;
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint];
  return `inherit`;
};

/** Get color hover */
export const getColorHover = (theme: any, variant?: ButtonVariantValues, color?: ColorValues, tint?: TintValues) => {
  if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint] + `d4`;
  if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `48`;
  if ((variant === `outline` || variant === `simple`) && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `24`;
  return `inherit`;
};

/** Get color active */
export const getColorActive = (theme: any, variant?: ButtonVariantValues, color?: ColorValues, tint?: TintValues) => {
  if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint] + `a0`;
  if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `64`;
  if ((variant === `outline` || variant === `simple`) && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `48`;
  return `inherit`;
};

/** Get color foreground */
export const getColorText = (theme: any, color?: `inherit` | ColorValues | FGColorValues, tint?: TintValues) => {
  if (fgColorValues.includes(color)) {
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

// CONTAINER ---------------------------------------------------------------- //

/** Get container max width */
export const getContainerMaxWidth = (theme: any, size: SizeValues) => {
  if (size) return theme?.container?.[size];
  return `100%`;
};

// INPUT ---------------------------------------------------------------- //

/** Get input component label color */
export const getInputLabelColor = (theme?: any, error?: BoolValues, warning?: BoolValues, success?: BoolValues) => {
  let color = theme.color.fg[1];

  if (success) color = theme.color.success[500];
  if (warning) color = theme.color.warning[500];
  if (error) color = theme.color.error[500];

  return color;
};

/** Get input component padding */
export const getInputPadding = (variant?: InputVariantValues) => {
  if (variant === `transparent`) return `7px 8px 6px`;
  if (variant === `outline`) return `7px 8px`;
  return `7px 0 6px`;
};

/** Get input component border */
export const getInputBorder = (
  theme?: any,
  selector?: SelectorValues,
  disabled?: BoolValues,
  error?: BoolValues,
  warning?: BoolValues,
  success?: BoolValues
) => {
  let thickness = `1px`;
  let style = `solid`;
  let color = `transparent`;

  if (disabled) style = `dashed`;

  if (!selector || selector === `base`) color = theme.color.fg[2];
  if (selector === `hover`) color = theme.color.fg[0];
  if (selector === `active` || selector === `focus`) color = theme.color.primary[500];

  if (success) color = theme.color.success[500];
  if (warning) color = theme.color.warning[500];
  if (error) color = theme.color.error[500];

  return `${thickness} ${style} ${color}`;
};

// LOADING ---------------------------------------------------------------- //

/** Get the size of the spinner track */
export const getTrackSize = (size: number) => {
  return Math.sqrt(size);
};

// SPACER ---------------------------------------------------------------- //

/** Get spacer size */
export const getSpacerSize = (size: SizeValuesExtended | number) => {
  if (typeof size === `number`) {
    return size;
  }

  if (typeof size === `string`) {
    if (size === `4xs`) return 0.25;
    if (size === `3xs`) return 0.5;
    if (size === `2xs`) return 1;
    if (size === `xs`) return 2;
    if (size === `sm`) return 3;
    if (size === `md`) return 4;
    if (size === `lg`) return 6;
    if (size === `xl`) return 8;
    if (size === `2xl`) return 12;
    if (size === `3xl`) return 16;
    if (size === `4xl`) return 20;
  }

  return 4;
};

// TOGGLE ---------------------------------------------------------------- //

/** Get toggle size */
export const getToggleSize = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return 16;
  if (size === `sm`) return 20;
  if (size === `md`) return 24;
  if (size === `lg`) return 28;
  if (size === `xl` || size === `max`) return 32;
  return 24;
};

/** Get toggle slide size */
export const getToggleSlideSize = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return 12;
  if (size === `sm`) return 16;
  if (size === `md`) return 20;
  if (size === `lg`) return 24;
  if (size === `xl` || size === `max`) return 28;
  return 20;
};

/** Get toggle slide gradient size */
export const getToggleSlideGradientSize = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return 1;
  if (size === `sm`) return 1.333;
  if (size === `md`) return 1.667;
  if (size === `lg`) return 2;
  if (size === `xl` || size === `max`) return 2.333;
  return 1.5;
};

/** Get toggle icon size */
export const getToggleIconSize = (size: SizeValues) => {
  if (size === `xs` || size === `min`) return 10;
  if (size === `sm`) return 14;
  if (size === `md`) return 18;
  if (size === `lg`) return 22;
  if (size === `xl` || size === `max`) return 26;
  return 18;
};
