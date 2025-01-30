// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";
import { getSpacerSize } from "@utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useRootStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { direction, size, visualize } = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiSpacer-root;
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
  return cx(rootCSS, directionCSS, visualizeCSS, overrides) || undefined;
};
