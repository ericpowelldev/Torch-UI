// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";

// STYLES ---------------------------------------------------------------- //

export const useRootStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { zIndex } = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiTable-root;
    z-index: ${zIndex};
    position: relative;
    display: table;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  `;

  // Return Styles
  return cx(rootCSS, overrides) || undefined;
};
