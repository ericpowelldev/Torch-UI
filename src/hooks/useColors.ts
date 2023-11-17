// DEPENDENCIES -------------------------------------------------- //

import { useTUI } from "providers/TUI";
import { colorValues, tintValues, BoolValues, ButtonVariants, ColorValues, TintValues } from "utils/types";

// HOOK -------------------------------------------------- //

export default function useColors() {
  const { theme } = useTUI();

  /** Get color tint from tint prop */
  const getColorTint = (tint?: string) => {
    if (tintValues.includes(tint)) return tint;
    return `500`;
  };

  /** Get color background from color and tint prop */
  const getColorBg = (color?: ColorValues, tint?: TintValues, disabled?: BoolValues, override?: string) => {
    if (disabled && override === `fg`) return theme.color.fgDisabled;
    if (disabled) return theme.color.bgDisabled;
    if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint];
    return theme.color.utility[`500`];
  };

  /** Get color foreground from color prop */
  const getColorFg = (color?: ColorValues, tint?: TintValues, disabled?: BoolValues) => {
    if (disabled) return theme.color.fgDisabled;
    if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][`c${tint}`];
    return theme.color.fg[0];
  };

  /** Get color hover from background color prop */
  const getColorHover = (color?: ColorValues, tint?: TintValues, variant?: ButtonVariants) => {
    if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint))
      return theme.color[color][tint] + `d4`;
    if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint))
      return theme.color[color][tint] + `48`;
    if ((variant === `outline` || variant === `link`) && colorValues.includes(color) && tintValues.includes(tint))
      return theme.color[color][tint] + `24`;
    return `inherit`;
  };

  /** Get color active from background color prop */
  const getColorActive = (color?: ColorValues, tint?: TintValues, variant?: ButtonVariants) => {
    if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint))
      return theme.color[color][tint] + `a0`;
    if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint))
      return theme.color[color][tint] + `64`;
    if ((variant === `outline` || variant === `link`) && colorValues.includes(color) && tintValues.includes(tint))
      return theme.color[color][tint] + `48`;
    return `inherit`;
  };

  // Return hook logic
  return { getColorTint, getColorBg, getColorFg, getColorHover, getColorActive };
}
