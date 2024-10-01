// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

import { getBoxColor } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useBoxStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // Props
  const { backdropBlur, color, height, radius, shadow, tint, visualize, width } = props;

  // CSS Stylesheet
  const boxCSS = css`
    label: TuiBox;
  `;

  const widthCSS =
    width || width === 0
      ? css`
          width: ${typeof width === `number`
            ? `${width}px`
            : typeof width === `string`
              ? width
              : `inherit`};
        `
      : null;

  const heightCSS =
    height || height === 0
      ? css`
          height: ${typeof height === `number`
            ? `${height}px`
            : typeof height === `string`
              ? height
              : `inherit`};
        `
      : null;

  const radiusCSS = radius
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
      boxCSS,
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
