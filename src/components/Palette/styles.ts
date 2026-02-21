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
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `;

  // Return Styles
  return cx(rootCSS, overrides) || undefined;
};

export const useColorColumnStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const colorColumnCSS = css`
    label: TuiPalette-colorColumn;
    display: flex;
    flex-direction: column;
    min-width: 140px;
    flex: 1;
    overflow: hidden;
    border-radius: 8px;
    overflow: hidden;
  `;

  // Return Styles
  return cx(colorColumnCSS, overrides) || undefined;
};

export const useColorNameStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const colorNameCSS = css`
    label: TuiPalette-colorName;
    padding: 12px 12px 8px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme?.color?.fg?.[0]};
  `;

  // Return Styles
  return cx(colorNameCSS, overrides) || undefined;
};

export const useSwatchStyles = (
  bgColor: string,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const swatchCSS = css`
    label: TuiPalette-swatch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    height: 44px;
    background-color: ${bgColor};
    cursor: default;
  `;

  // Return Styles
  return cx(swatchCSS, overrides) || undefined;
};

export const useSwatchTextStyles = (
  textColor: string,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const swatchTextCSS = css`
    label: TuiPalette-swatchText;
    font-size: 11px;
    font-family: monospace;
    font-weight: 500;
    color: ${textColor};
    line-height: 1;
    user-select: text;
  `;

  // Return Styles
  return cx(swatchTextCSS, overrides) || undefined;
};
