// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

// STYLES ---------------------------------------------------------------- //

export const useFlexStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
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
        label: TuiFlexContainer;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        min-width: 0;
      `
    : null;

  const flexContainerInlineCSS = containerInline
    ? css`
        label: TuiFlexContainerInline;
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        min-width: 0;
      `
    : null;

  const flexItemCSS =
    !container && !containerInline
      ? css`
          label: TuiFlexItem;
          flex-grow: 0;
          flex-basis: auto;
          min-width: 0;
        `
      : null;

  const directionCSS = direction
    ? css`
        flex-direction: ${direction};
      `
    : null;

  const wrapCSS = wrap
    ? css`
        flex-wrap: ${wrap};
      `
    : null;

  const alignContentCSS = alignContent
    ? css`
        align-content: ${alignContent};
      `
    : null;

  const alignItemsCSS = alignItems
    ? css`
        align-items: ${alignItems};
      `
    : null;

  const alignSelfCSS = alignSelf
    ? css`
        align-self: ${alignSelf};
      `
    : null;

  const justifyContentCSS = justifyContent
    ? css`
        justify-content: ${justifyContent};
      `
    : null;

  const justifyItemsCSS = justifyItems
    ? css`
        justify-items: ${justifyItems};
      `
    : null;

  const justifySelfCSS = justifySelf
    ? css`
        justify-self: ${justifySelf};
      `
    : null;

  const gapCSS = gap
    ? css`
        gap: ${theme?.space(gap)};
      `
    : null;

  const rowGapCSS = rowGap
    ? css`
        row-gap: ${theme?.space(rowGap)};
      `
    : null;

  const columnGapCSS = columnGap
    ? css`
        column-gap: ${theme?.space(columnGap)};
      `
    : null;

  const visualizeCSS = visualize
    ? css`
        background-color: transparent;
        background-image: ${theme?.visualize};
      `
    : null;

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
