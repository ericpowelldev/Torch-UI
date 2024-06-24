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
  StatusValues,
  TextComponentValues,
  TextVariantValues,
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
  if (size === `min`) return `2px 8px`;
  if (size === `xs`) return `4px 10px`;
  if (size === `sm`) return `6px 12px`;
  if (size === `md`) return `8px 14px`;
  if (size === `lg`) return `10px 16px`;
  if (size === `xl`) return `12px 18px`;
  if (size === `max`) return `14px 20px`;
  return `8px 14px`;
};

/** Get button label size */
export const getButtonLabelSize = (size: SizeValues) => {
  if (size === `min`) return 10;
  if (size === `xs`) return 12;
  if (size === `sm`) return 13;
  if (size === `md`) return 14;
  if (size === `lg`) return 16;
  if (size === `xl`) return 18;
  if (size === `max`) return 20;
  return 14;
};

/** Get button label height */
export const getButtonLabelHeight = (size: SizeValues) => {
  if (size === `min`) return 14;
  if (size === `xs`) return 16;
  if (size === `sm`) return 18;
  if (size === `md`) return 20;
  if (size === `lg`) return 22;
  if (size === `xl`) return 24;
  if (size === `max`) return 26;
  return 20;
};

/** Get button icon size */
export const getButtonIconSize = (size: SizeValues) => {
  if (size === `min`) return 12;
  if (size === `xs`) return 14;
  if (size === `sm`) return 16;
  if (size === `md`) return 18;
  if (size === `lg`) return 20;
  if (size === `xl`) return 22;
  if (size === `max`) return 24;
  return 18;
};

/** Get button icon margin */
export const getButtonIconMargin = (size: SizeValues) => {
  if (size === `min`) return 4;
  if (size === `xs`) return 6;
  if (size === `sm`) return 8;
  if (size === `md`) return 10;
  if (size === `lg`) return 12;
  if (size === `xl`) return 14;
  if (size === `max`) return 16;
  return 10;
};

// COLORS ---------------------------------------------------------------- //

/** Get color foreground */
export const getColorFg = (
  theme: any,
  color?: ColorValues,
  tint: TintValues = 500,
  disabled?: BoolValues,
  override?: string
) => {
  if (disabled && override === `bg`) return theme.color.bgd;
  if (disabled) return theme.color.fgd;
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][`i${tint}`];
  return `inherit`;
};

/** Get color background */
export const getColorBg = (
  theme: any,
  color?: ColorValues,
  tint: TintValues = 500,
  disabled?: BoolValues,
  override?: string
) => {
  if (disabled && override === `fg`) return theme.color.fgd;
  if (disabled) return theme.color.bgd;
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint];
  return `inherit`;
};

/** Get color hover */
export const getColorHover = (theme: any, variant?: ButtonVariantValues, color?: ColorValues, tint: TintValues = 500) => {
  if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint] + `d4`;
  if (variant === `soft` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint] + `48`;
  if ((variant === `outlined` || variant === `plain`) && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `24`;
  return `inherit`;
};

/** Get color active */
export const getColorActive = (theme: any, variant?: ButtonVariantValues, color?: ColorValues, tint: TintValues = 500) => {
  if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint] + `a0`;
  if (variant === `soft` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint] + `64`;
  if ((variant === `outlined` || variant === `plain`) && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `48`;
  return `inherit`;
};

/** Get color foreground */
export const getColorText = (theme: any, color?: `inherit` | ColorValues | FGColorValues, tint: TintValues = 500) => {
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
export const getInputLabelColor = (
  theme?: any,
  error?: BoolValues,
  warning?: BoolValues,
  success?: BoolValues,
  info?: BoolValues
) => {
  if (error) return theme?.color?.error?.[500];
  if (warning) return theme?.color?.warning?.[500];
  if (success) return theme?.color?.success?.[500];
  if (info) return theme?.color?.info?.[500];
  return theme?.color?.fg?.[1];
};

/** Get input component padding */
export const getInputPadding = (variant?: InputVariantValues) => {
  if (variant === `soft`) return `7px 8px 6px`;
  if (variant === `outlined`) return `7px 8px`;
  return `7px 0 6px`;
};

/** Get input component border */
export const getInputBorder = (
  theme?: any,
  selector?: SelectorValues,
  error?: BoolValues,
  warning?: BoolValues,
  success?: BoolValues,
  info?: BoolValues,
  disabled?: BoolValues
) => {
  let thickness = `1px`;
  let style = `solid`;
  let color = `soft`;

  if (disabled) style = `dashed`;

  if (!selector || selector === `base`) color = theme?.color?.fg?.[2];
  if (selector === `hover`) color = theme?.color?.fg?.[0];
  if (selector === `active` || selector === `focus`) color = theme?.color?.primary?.[500];

  if (info) color = theme?.color?.info?.[500];
  if (success) color = theme?.color?.success?.[500];
  if (warning) color = theme?.color?.warning?.[500];
  if (error) color = theme?.color?.error?.[500];

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

// STATUS ICON ---------------------------------------------------------------- //

/** Get the status icon animate bool */
export const getStatusIconAnimate = (status?: StatusValues, override?: BoolValues) => {
  if (override) return override ? true : false;

  if (status === `error`) return true;
  if (status === `warning`) return true;
  if (status === `success`) return true;
  return false;
};

/** Get the status icon animation speed */
export const getStatusIconAnimationSpeed = (status?: StatusValues, override?: number) => {
  if (override) return override;

  if (status === `error`) return 500;
  if (status === `warning`) return 1000;
  if (status === `success`) return 2000;
  return 2000;
};

// TEXT ---------------------------------------------------------------- //

/** Get text component to render */
export const getTextComponent = (
  component?: `inherit` | TextComponentValues,
  variant?: `inherit` | TextVariantValues,
  href?: string
) => {
  if (href) return `a`;
  if (component && component !== `inherit`) return component;
  if (variant === `h1`) return `h1`;
  if (variant === `h2`) return `h2`;
  if (variant === `h3`) return `h3`;
  if (variant === `h4`) return `h4`;
  if (variant === `h5`) return `h5`;
  if (variant === `h6`) return `h6`;
  return `p`;
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
