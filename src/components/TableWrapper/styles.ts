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
  const {} = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiTableWrapper-root;
    overflow-x: auto;
    width: 100%;
  `;

  // Return Styles
  return cx(rootCSS, overrides) || undefined;
};
