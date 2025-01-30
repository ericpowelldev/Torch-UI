// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

import { Theme } from "../../utils/types";

// STYLES ---------------------------------------------------------------- //

export const useFlexStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const {
    alignContent,
    alignItems,
    alignSelf,
    columnGap,
    container,
    containerInline,
    direction,
    gap,
    justifyContent,
    justifyItems,
    justifySelf,
    rowGap,
    visualize,
    wrap,
  } = props;

  // CSS Stylesheet
  const flexContainerCSS = container
    ? css`
        label: FlexContainer;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        min-width: 0;
      `
    : undefined;

  const flexContainerInlineCSS = containerInline
    ? css`
        label: FlexContainerInline;
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        min-width: 0;
      `
    : undefined;

  const flexItemCSS =
    !container && !containerInline
      ? css`
          label: FlexItem;
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: auto;
          min-width: 0;
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

  const gapCSS = gap
    ? css`
        gap: ${theme?.space(gap)};
      `
    : undefined;

  const rowGapCSS = rowGap
    ? css`
        row-gap: ${theme?.space(rowGap)};
      `
    : undefined;

  const columnGapCSS = columnGap
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
      flexContainerCSS,
      flexContainerInlineCSS,
      flexItemCSS,
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
