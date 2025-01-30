// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";

// STYLES ---------------------------------------------------------------- //

export const usePaletteStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const paletteCSS = css`
    label: Palette;
    position: relative;
  `;

  // Return Styles
  return cx(paletteCSS, overrides) || undefined;
};

export const useFlexStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const flexCSS = css`
    label: PaletteFlex;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // Return Styles
  return cx(flexCSS, overrides) || undefined;
};
