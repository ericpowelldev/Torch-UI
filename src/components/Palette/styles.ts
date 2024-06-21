// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

// STYLES ---------------------------------------------------------------- //

export const usePaletteStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const paletteCSS = css`
    position: relative;
  `;

  return cx(paletteCSS, overrides) || undefined;
};

export const useFlexStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const flexCSS = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return cx(flexCSS, overrides) || undefined;
};
