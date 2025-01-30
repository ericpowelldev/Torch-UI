// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

import { Theme } from "../../utils/types";

// STYLES ---------------------------------------------------------------- //

export const useDividerStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { direction, gap, gutter, spaceAfter, spaceBefore, textPosition, tip } = props;

  // CSS Stylesheet
  const dividerCSS = css`
    label: Divider;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  `;

  const directionCSS =
    direction !== "vertical"
      ? css`
          flex-direction: row;
          width: 100%;
        `
      : css`
          flex-direction: column;
          height: 100%;
        `;

  const gapCSS = gap
    ? css`
        gap: ${theme.space(gap)};
      `
    : null;

  const gutterCSS =
    gutter && direction !== "vertical"
      ? css`
          padding-left: ${theme.space(gutter)};
          padding-right: ${theme.space(gutter)};
        `
      : gutter && direction === "vertical"
        ? css`
            padding-top: ${theme.space(gutter)};
            padding-bottom: ${theme.space(gutter)};
          `
        : null;

  const spaceBeforeCSS =
    spaceBefore && direction !== "vertical"
      ? css`
          margin-top: ${theme.space(spaceBefore)};
        `
      : spaceBefore && direction === "vertical"
        ? css`
            margin-left: ${theme.space(spaceBefore)};
          `
        : null;

  const spaceAfterCSS =
    spaceAfter && direction !== "vertical"
      ? css`
          margin-bottom: ${theme.space(spaceAfter)};
        `
      : spaceAfter && direction === "vertical"
        ? css`
            margin-right: ${theme.space(spaceAfter)};
          `
        : null;

  // Return Styles
  return (
    cx(dividerCSS, directionCSS, gapCSS, gutterCSS, spaceBeforeCSS, spaceAfterCSS, overrides) ||
    undefined
  );
};

export const useStretchStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { gap } = props;

  // CSS Stylesheet
  const stretchCSS = css`
    label: DividerStretch;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  `;

  const gapCSS = gap
    ? css`
        gap: ${theme.space(gap)};
      `
    : null;

  // Return Styles
  return cx(stretchCSS, gapCSS, overrides) || undefined;
};

export const useLabelStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const labelCSS = css`
    label: DividerLabel;
    line-height: ${theme?.text?.divider?.height};
    font-size: ${theme?.text?.divider?.size};
    font-weight: ${theme?.text?.divider?.weight};
    color: ${theme?.color?.fg?.[2]};
  `;

  // Return Styles
  return cx(labelCSS, overrides) || undefined;
};

export const useLineStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { direction, lineStyle, lineWidth } = props;

  // CSS Stylesheet
  const lineCSS =
    direction !== "vertical"
      ? css`
          label: DividerLine;
          min-width: 0px;
          width: 100%;
          border-top: ${lineWidth}px ${lineStyle} ${theme?.color?.divider?.medium};
        `
      : css`
          label: DividerLine;
          min-width: 0px;
          height: 100%;
          border-left: ${lineWidth}px ${lineStyle} ${theme?.color?.divider?.medium};
        `;

  // Return Styles
  return cx(lineCSS, overrides) || undefined;
};

export const useIconStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const iconCSS = css`
    label: DividerIcon;
    min-width: 20px;
    min-height: 20px;
    max-width: 20px;
    max-height: 20px;
    color: ${theme?.color?.fg?.[2]};
  `;

  // Return Styles
  return cx(iconCSS, overrides) || undefined;
};
