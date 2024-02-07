// DEPENDENCIES ---------------------------------------------------------------- //

import clsx from "clsx";
import { css } from "@emotion/css";

// STYLES ---------------------------------------------------------------- //

export const usePaletteStyles = (theme: any) => {
  const clsPalette = css`
    position: relative;
  `;

  return clsx(clsPalette);
};

export const useFlexStyles = (theme: any) => {
  const clsFlex = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return clsx(clsFlex);
};
