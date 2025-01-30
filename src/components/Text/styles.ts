// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

import { Theme } from "../../utils/types";
import { getColorText } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useTextStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { align, color, shadow, tint, variant } = props;

  // CSS Stylesheet
  const textCSS = css`
    label: Text;
    line-height: ${theme?.text?.height};
    font-family: ${theme?.text?.family};
    font-size: ${theme?.text?.size};
    font-weight: ${theme?.text?.weight};
  `;

  const variantCSS = variant
    ? css`
        line-height: ${theme?.text?.[variant]?.height || theme?.text?.height};
        font-family: ${theme?.text?.[variant]?.family || theme?.text?.family};
        font-size: ${theme?.text?.[variant]?.size || theme?.text?.size};
        font-weight: ${theme?.text?.[variant]?.weight || theme?.text?.weight};
      `
    : null;

  const colorCSS = color
    ? css`
        color: ${getColorText(theme, color, tint)};
      `
    : null;

  const alignCSS = align
    ? css`
        text-align: ${align};
      `
    : null;

  const shadowCSS = shadow
    ? css`
        text-shadow: ${theme?.shadow?.text || theme?.shadow?.none};
      `
    : null;

  // Return Styles
  return cx(textCSS, variantCSS, colorCSS, alignCSS, shadowCSS, overrides) || undefined;
};
