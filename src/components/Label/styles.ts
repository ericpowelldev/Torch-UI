// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";
import { getInputLabelColor } from "@utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useRootStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { disabled, error, info, inverse, success, warning } = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiInput-label;
    display: block;
    margin-bottom: 4px;
    line-height: ${theme?.text?.label?.height || theme?.text?.height};
    font-family: ${theme?.text?.label?.family || theme?.text?.family};
    font-size: ${theme?.text?.label?.size || theme?.text?.size};
    font-weight: ${theme?.text?.label?.weight || theme?.text?.weight};
  `;

  const colorCSS = css`
    color: ${getInputLabelColor(theme, error, warning, success, info, inverse)};
  `;

  const disabledCSS = disabled
    ? css`
        cursor: not-allowed;
        user-select: none;
        pointer-events: none;
      `
    : null;

  // Return Styles
  return cx(rootCSS, colorCSS, disabledCSS, overrides) || undefined;
};
