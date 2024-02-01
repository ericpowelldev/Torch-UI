// DEPENDENCIES ---------------------------------------------------------------- //

import { css } from "@emotion/css";

// STYLES ---------------------------------------------------------------- //

export const usePaletteStyles = (theme: any) => {
  const stylesheet: any = {
    palette: css`
      position: relative;
    `,
    flex: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  };

  return stylesheet;
};
