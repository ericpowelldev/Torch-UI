// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

// STYLES ---------------------------------------------------------------- //

export const usePaletteStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // CSS Stylesheet
  const paletteCSS = css`
    position: relative;
  `;

  // Return Styles
  return cx(paletteCSS, overrides) || undefined;
};

export const useFlexStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // CSS Stylesheet
  const flexCSS = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // Return Styles
  return cx(flexCSS, overrides) || undefined;
};
