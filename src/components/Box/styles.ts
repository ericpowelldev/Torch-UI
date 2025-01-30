// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";
import { getBoxColor } from "@utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useRootStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { backdropBlur, color, height, radius, shadow, tint, visualize, width } = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiBox-root;
  `;

  const widthCSS =
    width || width === 0
      ? css`
          width: ${typeof width === `number` ? `${width}px` : width};
        `
      : null;

  const heightCSS =
    height || height === 0
      ? css`
          height: ${typeof height === `number` ? `${height}px` : height};
        `
      : null;

  const radiusCSS =
    radius || radius === 0
      ? css`
          border-radius: ${typeof radius === `number` ? `${radius}px` : radius};
        `
      : null;

  const colorCSS = color
    ? css`
        background-color: ${getBoxColor(theme, color, tint)};
      `
    : null;

  const shadowCSS = shadow
    ? css`
        box-shadow: ${theme?.shadow?.medium};
      `
    : null;

  const backdropBlurCSS = backdropBlur
    ? css`
        backdrop-filter: ${theme?.blur?.medium};
      `
    : null;

  const visualizeCSS = visualize
    ? css`
        background-color: transparent;
        background-image: ${theme?.visualize};
      `
    : null;

  // Return Styles
  return (
    cx(
      rootCSS,
      widthCSS,
      heightCSS,
      radiusCSS,
      colorCSS,
      shadowCSS,
      backdropBlurCSS,
      visualizeCSS,
      overrides
    ) || undefined
  );
};
