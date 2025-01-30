// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";
import { getContainerMaxWidth } from "@utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useContainerStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { horizontalPadding, verticalPadding, maxWidth, visualize } = props;

  // CSS Stylesheet
  const containerCSS = css`
    label: Container;
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  `;

  const horizontalPaddingCSS = horizontalPadding
    ? css`
        padding-left: ${theme.space(6)};
        padding-right: ${theme.space(6)};
        ${theme?.query?.down(theme?.break?.md)} {
          padding-left: ${theme.space(5)};
          padding-right: ${theme.space(5)};
        }
        ${theme?.query?.down(theme?.break?.sm)} {
          padding-left: ${theme.space(4)};
          padding-right: ${theme.space(4)};
        }
        ${theme?.query?.down(theme?.break?.xs)} {
          padding-left: ${theme.space(3)};
          padding-right: ${theme.space(3)};
        }
      `
    : null;

  const verticalPaddingCSS = verticalPadding
    ? css`
        padding-top: ${theme.space(6)};
        padding-bottom: ${theme.space(6)};
        ${theme?.query?.down(theme?.break?.md)} {
          padding-top: ${theme.space(5)};
          padding-bottom: ${theme.space(5)};
        }
        ${theme?.query?.down(theme?.break?.sm)} {
          padding-top: ${theme.space(4)};
          padding-bottom: ${theme.space(4)};
        }
        ${theme?.query?.down(theme?.break?.xs)} {
          padding-top: ${theme.space(3)};
          padding-bottom: ${theme.space(3)};
        }
      `
    : null;

  const maxWidthCSS = maxWidth
    ? css`
        max-width: ${getContainerMaxWidth(theme, maxWidth)};
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
      containerCSS,
      horizontalPaddingCSS,
      verticalPaddingCSS,
      maxWidthCSS,
      visualizeCSS,
      overrides
    ) || undefined
  );
};
