//////////////////////// DEPENDENCIES ////////////////////////

import { useTUI } from "providers/TUI";
import { colorValues, tintValues, BoolValues, ButtonVariants, ExtendedColorValues, TintValues } from "utils/types";

//////////////////////// HOOK ////////////////////////

export default function useColors() {
  const { theme } = useTUI();

  /** Get color tint from tint prop */
  const getColorTint = (tint?: string) => {
    if (tintValues.includes(tint)) return tint;
    return `500`;
  };

  /** Get color background from color and tint prop */
  const getColorBg = (color?: ExtendedColorValues, tint?: TintValues, disabled?: BoolValues, override?: string) => {
    if (disabled && override === `fg`) return theme.color.disabled.fg;
    if (disabled) return theme.color.disabled.bg;
    if (color === `black`) return theme.color.black.main;
    if (color === `white`) return theme.color.white.main;
    if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color].main[tint];
    return theme.color.default.main[`500`];
  };

  /** Get color foreground from color prop */
  const getColorFg = (color?: ExtendedColorValues, tint?: TintValues, disabled?: BoolValues) => {
    if (disabled) return theme.color.disabled.fg;
    if (color === `black`) return theme.color.fgContrast.primary;
    if (color === `white`) return theme.color.fg.primary;
    if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color].contrast[tint];
    return theme.color.fgContrast.primary;
  };

  /** Get color hover from background color prop */
  const getColorHover = (color?: ExtendedColorValues, tint?: TintValues, variant?: ButtonVariants) => {
    if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint))
      return theme.color[color].main[tint] + `40`;
    if ((variant === `outline` || variant === `link`) && colorValues.includes(color) && tintValues.includes(tint))
      return theme.color[color].main[tint] + `20`;
    return `inherit`;
  };

  /** Get color active from background color prop */
  const getColorActive = (color?: ExtendedColorValues, tint?: TintValues, variant?: ButtonVariants) => {
    if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color].hover[tint];
    if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint))
      return theme.color[color].main[tint] + `60`;
    if ((variant === `outline` || variant === `link`) && colorValues.includes(color) && tintValues.includes(tint))
      return theme.color[color].main[tint] + `40`;
    return `inherit`;
  };

  // Return hook logic
  return { getColorTint, getColorBg, getColorFg, getColorHover, getColorActive };
}
