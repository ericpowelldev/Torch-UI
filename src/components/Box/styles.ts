// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

import { getBoxColor } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useBoxStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { color, tint, width, height, radius, shadow, backdropBlur, visualize } = props;

  const boxCSS = css`
    label: TuiBox;
    display: block;
    width: ${typeof width === `number` ? `${width}px` : typeof width === `string` ? width : `inherit`};
    height: ${typeof height === `number` ? `${height}px` : typeof height === `string` ? height : `inherit`};
  `;

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

  return cx(boxCSS, radiusCSS, colorCSS, shadowCSS, backdropBlurCSS, visualizeCSS, overrides) || undefined;
};
