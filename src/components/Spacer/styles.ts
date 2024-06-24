// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

import { getSpacerSize } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useSpacerStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // Props
  const { direction, size, visualize } = props;

  // CSS Stylesheet
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
        background-color: transparent;
        background-image: ${theme?.visualize};
      `
    : null;

  // Return Styles
  return cx(spacerCSS, directionCSS, visualizeCSS, overrides) || undefined;
};
