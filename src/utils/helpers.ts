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
  Theme,
  tintValues,
  TintValues,
  variantValues,
  VariantValues,
} from "./types";

// BOX ---------------------------------------------------------------- //

export const getBoxColor = (
  theme: Theme,
  color?: `inherit` | BGColorValues | FGColorValues | ColorValues,
  tint: TintValues | InverseTintValues | AlphaTintValues = 500
) => {
  if (color === `bg1`) return theme.color.bg[0];
  if (color === `bg2`) return theme.color.bg[1];
  if (color === `bg3`) return theme.color.bg[2];
  if (color === `bg4`) return theme.color.bg[3];
  if (color === `bgInverse1`) return theme.color.bgInverse[0];
  if (color === `bgInverse2`) return theme.color.bgInverse[1];
  if (color === `bgInverse3`) return theme.color.bgInverse[2];
  if (color === `bgInverse4`) return theme.color.bgInverse[3];
  if (color === `fg1`) return theme.color.fg[0];
  if (color === `fg2`) return theme.color.fg[1];
  if (color === `fg3`) return theme.color.fg[2];
  if (color === `fg4`) return theme.color.fg[3];
  if (color === `fgInverse1`) return theme.color.fgInverse[0];
  if (color === `fgInverse2`) return theme.color.fgInverse[1];
  if (color === `fgInverse3`) return theme.color.fgInverse[2];
  if (color === `fgInverse4`) return theme.color.fgInverse[3];
  if (color && tint && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint];
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

// CHECKBOX ---------------------------------------------------------------- //

/** Get checkbox size */
export const getCheckboxSize = (size: SizeValues) => {
  if (size === `min`) return 10;
  if (size === `xs`) return 14;
  if (size === `sm`) return 16;
  if (size === `md`) return 18;
  if (size === `lg`) return 22;
  if (size === `xl`) return 26;
  if (size === `max`) return 30;
  return 18;
};

// COLORS ---------------------------------------------------------------- //

/** Get general foreground color */
export const getColorFg = (
  theme: Theme,
  color?: ColorValues,
  tint: TintValues = 500,
  disabled?: BoolValues,
  override?: string
) => {
  if (disabled && override === `bg`) return theme?.color?.bgDisabled;
  if (disabled) return theme?.color?.fgDisabled;
  if (color && tint && colorValues?.includes(color) && tintValues?.includes(tint))
    return theme?.color?.[color]?.[`i${tint}`];
  return `inherit`;
};

/** Get general background color */
export const getColorBg = (
  theme: Theme,
  color?: ColorValues,
  tint: TintValues = 500,
  disabled?: BoolValues,
  override?: string
) => {
  if (disabled && override === `fg`) return theme?.color?.fgDisabled;
  if (disabled) return theme?.color?.bgDisabled;
  if (color && tint && colorValues?.includes(color) && tintValues?.includes(tint))
    return theme?.color?.[color]?.[tint];
  return `inherit`;
};

/** Get color text */
export const getColorText = (
  theme: Theme,
  color?: `inherit` | ColorValues | FGColorValues,
  tint: TintValues = 500,
  disabled?: BoolValues
) => {
  if (disabled) return theme?.color?.grayscale?.[500] + `a0`;
  if (color && fgColorValues?.includes(color)) {
    if (color === `fg1`) return theme?.color?.fg?.[0];
    if (color === `fg2`) return theme?.color?.fg?.[1];
    if (color === `fg3`) return theme?.color?.fg?.[2];
    if (color === `fg4`) return theme?.color?.fg?.[3];
    if (color === `fgInverse1`) return theme?.color?.fgInverse?.[0];
    if (color === `fgInverse2`) return theme?.color?.fgInverse?.[1];
    if (color === `fgInverse3`) return theme?.color?.fgInverse?.[2];
    if (color === `fgInverse4`) return theme?.color?.fgInverse?.[3];
  }
  if (color && tint && colorValues?.includes(color) && tintValues?.includes(tint))
    return theme?.color?.[color]?.[tint];
  return `inherit`;
};

/** Get foreground color for a variant */
export const getVariantColorFg = (
  theme: Theme,
  variant?: VariantValues,
  color?: ColorValues,
  tint: TintValues = 500,
  disabled?: BoolValues,
  grayscale?: BoolValues
) => {
  if (variant === `solid`) {
    if (disabled) return theme?.color?.grayscale?.[500] + `c8`;
    if (grayscale) return theme?.color?.grayscale?.[500] + `c8`;
    if (color && tint && colorValues?.includes(color) && tintValues?.includes(tint))
      return theme?.color?.[color]?.[`i${tint}`];
  }
  if (variant === `soft` || variant === `plain` || variant === `outlined`) {
    if (disabled) return theme?.color?.grayscale?.[500] + `a0`;
    if (grayscale) return theme?.color?.grayscale?.[500] + `a0`;
    if (color && colorValues?.includes(color)) return theme?.color?.[color]?.[500];
  }
  return `inherit`;
};

/** Get background color for a variant */
export const getVariantColorBg = (
  theme: Theme,
  variant?: VariantValues,
  color?: ColorValues,
  tint: TintValues = 500,
  disabled?: BoolValues,
  grayscale?: BoolValues
) => {
  if (variant === `solid`) {
    if (disabled) return theme?.color?.grayscale?.[500] + `50`;
    if (grayscale) return theme?.color?.grayscale?.[500] + `50`;
    if (color && tint && colorValues?.includes(color) && tintValues?.includes(tint))
      return theme?.color?.[color]?.[tint];
  }
  if (variant === `soft`) {
    if (disabled) return theme?.color?.grayscale?.[500] + `20`;
    if (grayscale) return theme?.color?.grayscale?.[500] + `20`;
    if (color && colorValues?.includes(color)) return theme?.color?.[color]?.[500] + `30`;
  }
  if (variant === `plain` || variant === `outlined`) {
    if (disabled) return theme?.color?.grayscale?.[500] + `06`;
    if (grayscale) return theme?.color?.grayscale?.[500] + `06`;
    if (color && colorValues?.includes(color)) return theme?.color?.[color]?.[500] + `08`;
  }
  return `inherit`;
};

/** Get placeholder color for a variant */
export const getVariantColorPlaceholder = (
  theme: Theme,
  variant?: VariantValues,
  color?: ColorValues,
  tint: TintValues = 500,
  disabled?: BoolValues,
  grayscale?: BoolValues
) => {
  if (variant === `solid`) {
    if (disabled) return theme?.color?.grayscale?.[500] + `c8`;
    if (grayscale) return theme?.color?.grayscale?.[500] + `c8`;
    if (color && tint && colorValues?.includes(color) && tintValues?.includes(tint))
      return `${theme?.color?.[color]?.[`i${tint}`]}90`;
  }
  if (variant === `soft` || variant === `plain` || variant === `outlined`) {
    if (disabled) return theme?.color?.grayscale?.[500] + `a0`;
    if (grayscale) return theme?.color?.grayscale?.[500] + `a0`;
    if (color && colorValues?.includes(color)) return `${theme?.color?.[color]?.[500]}90`;
  }
  return `inherit`;
};

/** Get hover color for a variant */
export const getVariantColorHover = (
  theme: Theme,
  variant?: VariantValues,
  color?: ColorValues,
  tint: TintValues = 500
) => {
  if (variant === `solid`) {
    if (color && tint && colorValues?.includes(color) && tintValues?.includes(tint))
      return theme?.color?.[color]?.[tint] + `d4`;
  }
  if (variant === `soft`) {
    if (color && colorValues?.includes(color)) return theme?.color?.[color]?.[500] + `48`;
  }
  if (variant === `plain` || variant === `outlined`) {
    if (color && colorValues?.includes(color)) return theme?.color?.[color]?.[500] + `30`;
  }
  return `inherit`;
};

/** Get active color for a variant */
export const getVariantColorActive = (
  theme: Theme,
  variant?: VariantValues,
  color?: ColorValues,
  tint: TintValues = 500
) => {
  if (variant === `solid`) {
    if (color && tint && colorValues?.includes(color) && tintValues?.includes(tint))
      return theme?.color?.[color]?.[tint] + `a0`;
  }
  if (variant === `soft`) {
    if (color && colorValues?.includes(color)) return theme?.color?.[color]?.[500] + `60`;
  }
  if (variant === `plain` || variant === `outlined`) {
    if (color && colorValues?.includes(color)) return theme?.color?.[color]?.[500] + `48`;
  }
  return `inherit`;
};

/** Get bow shadow for a variant */
export const getVariantBoxShadow = (
  theme: Theme,
  variant?: VariantValues,
  color?: ColorValues,
  tint: TintValues = 500
) => {
  if (variant === `solid`) {
    if (color && tint && colorValues?.includes(color) && tintValues?.includes(tint))
      return `0 0 12px ${theme?.color?.[color]?.[tint]}40`;
  }
  if (variant === `soft`) {
    if (color && colorValues?.includes(color))
      return `0 0 12px ${theme?.color?.[color]?.[500]}30`;
  }
  if (variant === `plain`) {
    if (color && colorValues?.includes(color))
      return `0 0 12px ${theme?.color?.[color]?.[500]}20`;
  }
  if (variant === `outlined`) {
    if (color && colorValues?.includes(color))
      return `0 0 12px ${theme?.color?.[color]?.[500]}40`;
  }
  return `none`;
};

// CONTAINER ---------------------------------------------------------------- //

/** Get container max width */
export const getContainerMaxWidth = (theme: Theme, size: SizeValues) => {
  if (size) return theme?.container?.[size];
  return `100%`;
};

// INPUT ---------------------------------------------------------------- //

/** Get input component label color */
export const getInputLabelColor = (
  theme: Theme,
  error?: BoolValues,
  warning?: BoolValues,
  success?: BoolValues,
  info?: BoolValues,
  inverse?: BoolValues
) => {
  if (error) return theme?.color?.error?.[500];
  if (warning) return theme?.color?.warning?.[500];
  if (success) return theme?.color?.success?.[500];
  if (info) return theme?.color?.info?.[500];
  if (inverse) return theme?.color?.fgInverse?.[1];
  return theme?.color?.fg?.[1];
};

/** Get input component padding */
export const getInputPadding = (variant?: InputVariantValues) => {
  return `8px 12px`;
};

/** Get input component border */
export const getInputBorder = (
  theme: Theme,
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
  if (override === true || override === false) return override;

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

// TOOLTIP ---------------------------------------------------------------- //

/** Get tooltip background color */
export const getTooltipBackgroundColor = (theme: Theme, background: "dark" | "light") => {
  if (theme.mode === "dark" && background === "dark") return theme?.color?.grayscale?.[0];
  if (theme.mode === "dark" && background === "light") return theme?.color?.grayscale?.[750];
  if (theme.mode === "light" && background === "dark") return theme?.color?.grayscale?.[750];
  if (theme.mode === "light" && background === "light") return theme?.color?.grayscale?.[0];
  return theme?.color?.grayscale?.[500];
};

/** Get tooltip foreground color */
export const getTooltipForegroundColor = (theme: Theme, background: "dark" | "light") => {
  if (theme.mode === "dark" && background === "dark") return theme?.color?.fg?.[0];
  if (theme.mode === "dark" && background === "light") return theme?.color?.fgInverse?.[0];
  if (theme.mode === "light" && background === "dark") return theme?.color?.fgInverse?.[0];
  if (theme.mode === "light" && background === "light") return theme?.color?.fg?.[0];
  return theme?.color?.fg?.[0];
};
