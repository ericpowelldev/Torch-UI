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
    label: TuiTypography-root;
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme?.color?.divider?.[0]};
    border-radius: 8px;
    overflow: hidden;
  `;

  // Return Styles
  return cx(rootCSS, overrides) || undefined;
};

export const useRowStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const rowCSS = css`
    label: TuiTypography-row;
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 16px 20px;
    border-bottom: 1px solid ${theme?.color?.divider?.[0]};

    &:last-child {
      border-bottom: none;
    }
  `;

  // Return Styles
  return cx(rowCSS, overrides) || undefined;
};

export const useMetaStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const metaCSS = css`
    label: TuiTypography-meta;
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 120px;
    flex-shrink: 0;
  `;

  // Return Styles
  return cx(metaCSS, overrides) || undefined;
};

export const useChipStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const chipCSS = css`
    label: TuiTypography-chip;
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    padding: 2px 8px;
    border-radius: 4px;
    background-color: ${theme?.color?.primary?.[500]}20;
    color: ${theme?.color?.primary?.[500]};
    font-size: 12px;
    font-weight: 600;
    font-family: monospace;
    line-height: 1.5;
  `;

  // Return Styles
  return cx(chipCSS, overrides) || undefined;
};

export const useInfoStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const infoCSS = css`
    label: TuiTypography-info;
    font-size: 11px;
    font-family: monospace;
    color: ${theme?.color?.fg?.[2]};
    line-height: 1;
  `;

  // Return Styles
  return cx(infoCSS, overrides) || undefined;
};

export const useSampleStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const sampleCSS = css`
    label: TuiTypography-sample;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  `;

  // Return Styles
  return cx(sampleCSS, overrides) || undefined;
};
