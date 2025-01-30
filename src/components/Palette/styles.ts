// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";

// STYLES ---------------------------------------------------------------- //

export const useRootStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const rootCSS = css`
    label: TuiPalette-root;
    position: relative;
  `;

  // Return Styles
  return cx(rootCSS, overrides) || undefined;
};

export const useFlexStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const flexCSS = css`
    label: TuiPalette-flex;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // Return Styles
  return cx(flexCSS, overrides) || undefined;
};
