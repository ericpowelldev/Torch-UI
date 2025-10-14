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
  const { stickyHeader, variant, zIndex } = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiTableRow-root;
    z-index: ${zIndex};
  `;

  const stickyCss =
    variant === `header` && stickyHeader
      ? css`
          position: sticky;
          top: 0;
        `
      : null;

  // Return Styles
  return cx(rootCSS, stickyCss, overrides) || undefined;
};
