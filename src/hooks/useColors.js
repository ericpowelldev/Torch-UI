//////////////////////// DEPENDENCIES ////////////////////////

import { useFui } from "providers/Fui";
import { colorValues, tintValues } from "utils/standards";

//////////////////////// HOOK ////////////////////////

export function useColors() {
  const { theme } = useFui();

  /** Get color tint from tint prop */
  const getColorTint = (tint) => {
    if (tintValues.includes(tint)) return tint;
    return `500`;
  };

  /** Get color background from color and tint prop */
  const getColorBg = (color, tint, disabled, override) => {
    if (disabled && override === `fg`) return theme.color.disabled.fg;
    if (disabled) return theme.color.disabled.bg;
    if (color === `black`) return theme.color.black.main;
    if (color === `white`) return theme.color.white.main;
    if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color].main[tint];
    return theme.color.default.main[`500`];
  };

  /** Get color foreground from color prop */
  const getColorFg = (color, tint, disabled) => {
    if (disabled) return theme.color.disabled.fg;
    if (color === `black`) return theme.color.fgContrast.primary;
    if (color === `white`) return theme.color.fg.primary;
    if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color].contrast[tint];
    return theme.color.fgContrast.primary;
  };

  /** Get color hover from background color prop */
  const getColorHover = (color, tint, variant) => {
    if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color].main[tint] + `40`;
    if ((variant === `outline` || variant === `link`) && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color].main[tint] + `20`;
    return `inherit`;
  };

  /** Get color active from background color prop */
  const getColorActive = (color, tint, variant) => {
    if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color].hover[tint];
    if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color].main[tint] + `60`;
    if ((variant === `outline` || variant === `link`) && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color].main[tint] + `40`;
    return `inherit`;
  };

  // Return hook logic
  return { getColorTint, getColorBg, getColorFg, getColorHover, getColorActive };
}
