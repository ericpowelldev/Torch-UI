// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";

// STYLES ---------------------------------------------------------------- //

export const useRootStyles = (theme: Theme, props: any, overrides?: (string | undefined)[]) => {
  // Props
  const { disabled } = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiOption-root;
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
  return cx(rootCSS, disabledCSS, overrides) || undefined;
};
