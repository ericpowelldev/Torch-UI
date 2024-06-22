// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

import { getContainerMaxWidth } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useContainerStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { maxWidth, disablePadding, visualize } = props;

  const containerCSS = css`
    display: block;
    width: 100%;
    padding-left: ${theme.space(6)};
    padding-right: ${theme.space(6)};
    margin-left: auto;
    margin-right: auto;
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
  `;

  const maxWidthCSS = maxWidth
    ? css`
        max-width: ${getContainerMaxWidth(theme, maxWidth)};
      `
    : null;

  const disablePaddingCSS = disablePadding
    ? css`
        padding: 0;
      `
    : null;

  const visualizeCSS = visualize
    ? css`
        background-color: transparent;
        background-image: ${theme?.visualize};
      `
    : null;

  return cx(containerCSS, maxWidthCSS, disablePaddingCSS, visualizeCSS, overrides) || undefined;
};
