// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@emotion/css";

import { getSpacerSize } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useSpacerStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { size, direction, visualize } = props;

  const spacerCSS = css`
    display: block;
  `;

  const directionCSS =
    direction !== "vertical"
      ? css`
          width: 100%;
          height: ${theme.space(getSpacerSize(size))};
        `
      : css`
          width: ${theme.space(getSpacerSize(size))};
          height: auto;
        `;

  const visualizeCSS = visualize
    ? css`
        outline: 2px dashed gray;
        outline-offset: -2px;
      `
    : null;

  return cx(spacerCSS, directionCSS, visualizeCSS, overrides) || undefined;
};
