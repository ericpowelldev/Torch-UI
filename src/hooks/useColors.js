//////////////////////// DEPENDENCIES ////////////////////////

import { useFui } from "providers/Fui";

//////////////////////// HOOK ////////////////////////

export function useColors() {
  const { theme } = useFui();

  // Possible prop values
  const colorProps = [`default`, `primary`, `secondary`, `tertiary`, `info`, `error`, `warning`, `success`];
  const tintProps = [`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`];

  /** Get color tint from tint prop */
  const getColorTint = (tint) => {
    if (tintProps.includes(tint)) return tint;
    return `500`;
  };

  /** Get color background from color and tint prop */
  const getColorBg = (color, tint, disabled) => {
    if (disabled) return theme.color.disabled.bg;
    if (colorProps.includes(color) && tintProps.includes(tint)) return theme.color[color].main[tint];
    return theme.color.default.main[`500`];
  };

  /** Get color foreground from color prop */
  const getColorFg = (color, tint, disabled) => {
    if (disabled) return theme.color.disabled.fg;
    if (colorProps.includes(color) && tintProps.includes(tint)) return theme.color[color].contrast[tint];
    return theme.color.fgContrast.primary;
  };

  /** Get color hover from background color prop */
  const getColorHover = (color, tint, variant) => {
    if (variant === `solid` && colorProps.includes(color) && tintProps.includes(tint)) return theme.color[color].hover[tint];
    if (variant !== `solid` && colorProps.includes(color) && tintProps.includes(tint)) return theme.color[color].main[tint] + `20`;
    return `inherit`;
  };
  
  /** Get color active from background color prop */
  const getColorActive = (color, tint, variant) => {
    if (variant === `solid` && colorProps.includes(color) && tintProps.includes(tint)) return theme.color[color].main[tint];
    if (variant !== `solid` && colorProps.includes(color) && tintProps.includes(tint)) return theme.color[color].main[tint] + `40`;
    return `inherit`;
  };

  // Return hook logic
  return { getColorTint, getColorBg, getColorFg, getColorHover, getColorActive };
}
