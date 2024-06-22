// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

// STYLES ---------------------------------------------------------------- //

export const useDividerStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { direction, gap, gutter, marginAfter, marginBefore, textPosition, tip } = props;

  const dividerCSS = css`
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

  const marginBeforeCSS =
    marginBefore && direction !== "vertical"
      ? css`
          margin-top: ${theme.space(marginBefore)};
        `
      : marginBefore && direction === "vertical"
        ? css`
            margin-left: ${theme.space(marginBefore)};
          `
        : null;

  const marginAfterCSS =
    marginAfter && direction !== "vertical"
      ? css`
          margin-bottom: ${theme.space(marginAfter)};
        `
      : marginAfter && direction === "vertical"
        ? css`
            margin-right: ${theme.space(marginAfter)};
          `
        : null;

  return cx(dividerCSS, directionCSS, gapCSS, gutterCSS, marginBeforeCSS, marginAfterCSS, overrides) || undefined;
};

export const useStretchStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { gap } = props;

  const stretchCSS = css`
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

  return cx(stretchCSS, gapCSS, overrides) || undefined;
};

export const useLabelStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const labelCSS = css`
    line-height: ${theme?.text?.divider?.height};
    font-size: ${theme?.text?.divider?.size};
    font-weight: ${theme?.text?.divider?.weight};
    color: ${theme?.color?.fg?.[2]};
  `;

  return cx(labelCSS, overrides) || undefined;
};

export const useLineStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { direction } = props;

  const lineCSS =
    direction !== "vertical"
      ? css`
          min-width: 0px;
          width: 100%;
          border-top: 1px solid ${theme?.color?.divider?.medium};
        `
      : css`
          min-width: 0px;
          height: 100%;
          border-left: 1px solid ${theme?.color?.divider?.medium};
        `;

  return cx(lineCSS, overrides) || undefined;
};

export const useIconStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const iconCSS = css`
    min-width: 20px;
    min-height: 20px;
    max-width: 20px;
    max-height: 20px;
    color: ${theme?.color?.fg?.[2]};
  `;

  return cx(iconCSS, overrides) || undefined;
};
