// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";
import {
  getButtonIconSize,
  getIconButtonPadding,
  getIconButtonTotalSize,
  getVariantBoxShadow,
  getVariantColorFg,
  getVariantColorBg,
  getVariantColorHover,
  getVariantColorActive,
} from "@utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useRootStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[],
) => {
  // Props
  const {
    backdropBlur,
    color,
    disabled,
    loading,
    pill,
    placeholder,
    shadowButton,
    size,
    tint,
    variant,
  } = props;

  const totalSize = size ? getIconButtonTotalSize(size) : 36;
  const padding = size ? getIconButtonPadding(size) : 6;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiIconButton-root;
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${totalSize}px;
    height: ${totalSize}px;
    min-width: ${totalSize}px;
    min-height: ${totalSize}px;
    padding: ${padding}px;
    border: 0;
    border-radius: ${theme?.radius?.button || theme?.radius?.none};
    margin: 0;
    line-height: 1;
    font-family: ${theme?.text?.button?.family || theme?.text?.family};
    font-size: ${theme?.text?.button?.size || theme?.text?.size};
    font-weight: ${theme?.text?.button?.weight || theme?.text?.weight};
    text-align: center;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    transition: ${theme?.transition?.button || theme?.transition?.none};
    user-select: none;
    &:active {
      transition: ${theme?.transition?.none};
    }
  `;

  const solidCSS =
    variant === `solid`
      ? css`
          background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
          color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
          &:hover {
            background-color: ${getVariantColorHover(theme, variant, color, tint)};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getVariantColorActive(theme, variant, color, tint)};
          }
        `
      : null;

  const softCSS =
    variant === `soft`
      ? css`
          background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
          color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
          &:hover {
            background-color: ${getVariantColorHover(theme, variant, color, tint)};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getVariantColorActive(theme, variant, color, tint)};
          }
        `
      : null;

  const plainCSS =
    variant === `plain`
      ? css`
          background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
          color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
          &:hover {
            background-color: ${getVariantColorHover(theme, variant, color, tint)};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getVariantColorActive(theme, variant, color, tint)};
          }
        `
      : null;

  const outlinedCSS =
    variant === `outlined`
      ? css`
          outline: 1px solid ${getVariantColorFg(theme, variant, color, tint, disabled)};
          outline-offset: -1px;
          background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
          color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
          &:hover {
            background-color: ${getVariantColorHover(theme, variant, color, tint)};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getVariantColorActive(theme, variant, color, tint)};
          }
        `
      : null;

  const pillCSS = pill
    ? css`
        border-radius: ${theme?.radius?.pill ||
        theme?.radius?.button ||
        theme?.radius?.none} !important;
      `
    : null;

  const shadowButtonCSS =
    shadowButton && variant === `solid` && !disabled
      ? css`
          box-shadow: ${theme?.shadow?.button || theme?.shadow?.none};
        `
      : null;

  const backdropBlurCSS = backdropBlur
    ? css`
        backdrop-filter: ${theme?.blur?.medium || theme?.blur?.none};
      `
    : null;

  const loadingCSS = loading
    ? css`
        cursor: wait;
        pointer-events: none;
        & > span {
          opacity: 0;
        }
      `
    : null;

  const placeholderCSS = placeholder
    ? css`
        cursor: wait;
        pointer-events: none;
        & > span {
          opacity: 0;
        }
      `
    : null;

  const disabledCSS = disabled
    ? css`
        cursor: not-allowed;
        user-select: none;
        pointer-events: none;
      `
    : null;

  // Return Styles
  return (
    cx(
      rootCSS,
      solidCSS,
      softCSS,
      plainCSS,
      outlinedCSS,
      pillCSS,
      shadowButtonCSS,
      backdropBlurCSS,
      loadingCSS,
      placeholderCSS,
      disabledCSS,
      overrides,
    ) || undefined
  );
};

export const useIconStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[],
) => {
  const { disabled, shadowIcon, size } = props || {};
  const iconSize = size ? getButtonIconSize(size) : 24;

  const iconCSS = css`
    label: TuiIconButton-icon;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    font-size: ${iconSize}px;
    pointer-events: none;
    & svg {
      display: block;
      width: ${iconSize}px;
      height: ${iconSize}px;
    }
  `;

  const shadowIconCSS =
    shadowIcon && !disabled
      ? css`
          filter: drop-shadow(${theme?.shadow?.text || theme?.shadow?.none});
        `
      : null;

  return cx(iconCSS, shadowIconCSS, overrides) || undefined;
};

export const useCenterIconStyles = (
  _theme: Theme,
  _props?: any,
  overrides?: (string | undefined)[],
) => {
  const centerIconCSS = css`
    label: TuiIconButton-centerIcon;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;

  return cx(centerIconCSS, overrides) || undefined;
};
