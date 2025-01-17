// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

// STYLES ---------------------------------------------------------------- //

export const useOptionStyles = (theme: any, props: any, overrides?: (string | undefined)[]) => {
  // Props
  const { disabled } = props;

  // CSS Stylesheet
  const optionCSS = css`
    line-height: ${theme?.text?.input?.height || theme?.text?.height};
    font-family: ${theme?.text?.input?.family || theme?.text?.family};
    font-size: ${theme?.text?.input?.size || theme?.text?.size};
    font-weight: ${theme?.text?.input?.weight || theme?.text?.weight};
    background-color: ${theme?.color?.bg?.[0]};
    color: ${theme?.color?.fg?.[0]};
    cursor: pointer;
  `;

  const disabledCSS = disabled
    ? css`
        color: ${theme?.color?.fg?.[2]};
        cursor: not-allowed;
        pointer-events: none;
        user-select: none;
      `
    : null;

  // Return Styles
  return cx(optionCSS, disabledCSS, overrides) || undefined;
};
