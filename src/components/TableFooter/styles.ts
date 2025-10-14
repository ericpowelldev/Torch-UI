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
    label: TuiTableFooter-root;
    z-index: ${zIndex};
  `;

  // Return Styles
  return cx(rootCSS, overrides) || undefined;
};
