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
    align,
    minWidth,
    maxWidth,
    paddingHorizontal,
    paddingVertical,
    sortActive,
    sortUIEnabled,
    variant,
    zIndex,
  } = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiTableCell-root;
    z-index: ${zIndex};
    text-align: ${align};
    user-select: none;
  `;

  const minWidthCss =
    typeof minWidth === "number"
      ? css`
          min-width: ${minWidth}px;
        `
      : null;

  const maxWidthCss =
    typeof maxWidth === "number"
      ? css`
          max-width: ${maxWidth}px;
        `
      : null;

  const paddingCss =
    typeof paddingHorizontal === "number" && typeof paddingVertical === "number"
      ? css`
          padding: ${theme?.space(paddingVertical, paddingHorizontal)};
        `
      : null;

  const sortUIEnabledCss =
    variant === `header` && sortUIEnabled
      ? css`
          cursor: pointer;
          &:hover {
            span {
              opacity: ${sortActive ? 0.8 : 0.5};
            }
          }
        `
      : null;

  const variantHeaderCSS =
    variant === `header`
      ? css`
          line-height: ${theme?.text?.tableHeaderCell?.height || theme?.text?.height};
          font-size: ${theme?.text?.tableHeaderCell?.size || theme?.text?.size};
          font-weight: ${theme?.text?.tableHeaderCell?.weight || theme?.text?.weight};
        `
      : null;

  const variantBodyCSS =
    variant === `body`
      ? css`
          line-height: ${theme?.text?.tableBodyCell?.height || theme?.text?.height};
          font-size: ${theme?.text?.tableBodyCell?.size || theme?.text?.size};
          font-weight: ${theme?.text?.tableBodyCell?.weight || theme?.text?.weight};
        `
      : null;

  const variantFooterCSS =
    variant === `footer`
      ? css`
          line-height: ${theme?.text?.tableFooterCell?.height || theme?.text?.height};
          font-size: ${theme?.text?.tableFooterCell?.size || theme?.text?.size};
          font-weight: ${theme?.text?.tableFooterCell?.weight || theme?.text?.weight};
        `
      : null;

  // Return Styles
  return (
    cx(
      rootCSS,
      minWidthCss,
      maxWidthCss,
      paddingCss,
      sortUIEnabledCss,
      variantHeaderCSS,
      variantBodyCSS,
      variantFooterCSS,
      overrides
    ) || undefined
  );
};

export const useIconStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { align, sortActive, sortUIEnabled } = props;

  // CSS Stylesheet
  const iconCSS = css`
    label: TuiTableCell-icon;
    transition: ${theme?.transition?.table || theme?.transition?.none};
  `;

  const activeCSS =
    sortActive && sortUIEnabled
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `;

  const marginCSS =
    align === `right`
      ? css`
          margin-left: -15px;
          margin-right: ${theme.space(1)};
        `
      : css`
          margin-left: ${theme.space(1)};
          margin-right: -15px;
        `;

  // Return Styles
  return cx(iconCSS, activeCSS, marginCSS, overrides) || undefined;
};
