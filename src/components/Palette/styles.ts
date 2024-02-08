// DEPENDENCIES ---------------------------------------------------------------- //

import clsx from "clsx";
import { css } from "@emotion/css";

// STYLES ---------------------------------------------------------------- //

export const usePaletteStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const paletteCSS = css`
    position: relative;
  `;

  return clsx(paletteCSS, overrides) || undefined;
};

export const useFlexStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const flexCSS = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return clsx(flexCSS, overrides) || undefined;
};
