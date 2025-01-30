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
  const {
    alignContent,
    alignItems,
    alignSelf,
    basis,
    columnGap,
    container,
    containerInline,
    direction,
    gap,
    grow,
    justifyContent,
    justifyItems,
    justifySelf,
    rowGap,
    shrink,
    visualize,
    wrap,
  } = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiFlex-root;
    min-width: 0;
  `;

  const containerCSS = container
    ? css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
      `
    : undefined;

  const containerInlineCSS = containerInline
    ? css`
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
      `
    : undefined;

  const growCSS =
    grow || grow === 0
      ? css`
          flex-grow: ${grow};
        `
      : undefined;

  const shrinkCSS =
    shrink || shrink === 0
      ? css`
          flex-shrink: ${shrink};
        `
      : undefined;

  const basisCSS =
    basis || basis === 0
      ? css`
          flex-basis: ${typeof basis === `number` ? `${basis}px` : basis};
        `
      : undefined;

  const directionCSS = direction
    ? css`
        flex-direction: ${direction};
      `
    : undefined;

  const wrapCSS = wrap
    ? css`
        flex-wrap: ${wrap};
      `
    : undefined;

  const alignContentCSS = alignContent
    ? css`
        align-content: ${alignContent};
      `
    : undefined;

  const alignItemsCSS = alignItems
    ? css`
        align-items: ${alignItems};
      `
    : undefined;

  const alignSelfCSS = alignSelf
    ? css`
        align-self: ${alignSelf};
      `
    : undefined;

  const justifyContentCSS = justifyContent
    ? css`
        justify-content: ${justifyContent};
      `
    : undefined;

  const justifyItemsCSS = justifyItems
    ? css`
        justify-items: ${justifyItems};
      `
    : undefined;

  const justifySelfCSS = justifySelf
    ? css`
        justify-self: ${justifySelf};
      `
    : undefined;

  const gapCSS =
    gap || gap === 0
      ? css`
          gap: ${theme?.space(gap)};
        `
      : undefined;

  const rowGapCSS =
    rowGap || rowGap === 0
      ? css`
          row-gap: ${theme?.space(rowGap)};
        `
      : undefined;

  const columnGapCSS =
    columnGap || columnGap === 0
      ? css`
          column-gap: ${theme?.space(columnGap)};
        `
      : undefined;

  const visualizeCSS = visualize
    ? css`
        background-color: transparent;
        background-image: ${theme?.visualize};
      `
    : undefined;

  // Return Styles
  return (
    cx(
      rootCSS,
      containerCSS,
      containerInlineCSS,
      growCSS,
      shrinkCSS,
      basisCSS,
      directionCSS,
      wrapCSS,
      alignContentCSS,
      alignItemsCSS,
      alignSelfCSS,
      justifyContentCSS,
      justifyItemsCSS,
      justifySelfCSS,
      gapCSS,
      rowGapCSS,
      columnGapCSS,
      visualizeCSS,
      overrides
    ) || undefined
  );
};
