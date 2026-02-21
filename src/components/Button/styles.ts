// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";
import {
  getButtonIconMargin,
  getButtonIconSize,
  getButtonLabelHeight,
  getButtonLabelSize,
  getButtonPadding,
  getVariantBoxShadow,
  getVariantColorBg,
  getVariantColorBgActive,
  getVariantColorBgHover,
  getVariantColorFg,
  getVariantColorOutline,
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
    colorOverride,
    disabled,
    elevation,
    fullWidth,
    loading,
    rounded,
    shadowLabel,
    size,
    suspended,
    tint,
    variant,
  } = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiButton-root;
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 0;
    border: 0;
    border-radius: ${theme?.radius?.button || theme?.radius?.none};
    margin: 0;
    line-height: ${theme?.text?.button?.height || theme?.text?.height};
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
          background-color: ${getVariantColorBg(
            theme,
            variant,
            color,
            tint,
            disabled,
            colorOverride,
          )};
          color: ${getVariantColorFg(theme, variant, color, tint, disabled, colorOverride)};
          &:hover {
            background-color: ${getVariantColorBgHover(
              theme,
              variant,
              color,
              tint,
              colorOverride,
            )};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint, colorOverride)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(
                theme,
                variant,
                color,
                tint,
                disabled,
                colorOverride,
              )};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getVariantColorBgActive(
              theme,
              variant,
              color,
              tint,
              colorOverride,
            )};
          }
        `
      : null;

  const softCSS =
    variant === `soft`
      ? css`
          background-color: ${getVariantColorBg(
            theme,
            variant,
            color,
            tint,
            disabled,
            colorOverride,
          )};
          color: ${getVariantColorFg(theme, variant, color, tint, disabled, colorOverride)};
          &:hover {
            background-color: ${getVariantColorBgHover(
              theme,
              variant,
              color,
              tint,
              colorOverride,
            )};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint, colorOverride)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(
                theme,
                variant,
                color,
                tint,
                disabled,
                colorOverride,
              )};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getVariantColorBgActive(
              theme,
              variant,
              color,
              tint,
              colorOverride,
            )};
          }
        `
      : null;

  const plainCSS =
    variant === `plain`
      ? css`
          background-color: ${getVariantColorBg(
            theme,
            variant,
            color,
            tint,
            disabled,
            colorOverride,
          )};
          color: ${getVariantColorFg(theme, variant, color, tint, disabled, colorOverride)};
          &:hover {
            background-color: ${getVariantColorBgHover(
              theme,
              variant,
              color,
              tint,
              colorOverride,
            )};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint, colorOverride)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(
                theme,
                variant,
                color,
                tint,
                disabled,
                colorOverride,
              )};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getVariantColorBgActive(
              theme,
              variant,
              color,
              tint,
              colorOverride,
            )};
          }
        `
      : null;

  const outlinedCSS =
    variant === `outlined`
      ? css`
          outline: 1px solid
            ${getVariantColorOutline(theme, variant, color, tint, disabled, colorOverride)};
          outline-offset: -1px;
          background-color: ${getVariantColorBg(
            theme,
            variant,
            color,
            tint,
            disabled,
            colorOverride,
          )};
          color: ${getVariantColorFg(theme, variant, color, tint, disabled, colorOverride)};
          &:hover {
            background-color: ${getVariantColorBgHover(
              theme,
              variant,
              color,
              tint,
              colorOverride,
            )};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint, colorOverride)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(
                theme,
                variant,
                color,
                tint,
                disabled,
                colorOverride,
              )};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getVariantColorBgActive(
              theme,
              variant,
              color,
              tint,
              colorOverride,
            )};
          }
        `
      : null;

  const glassCSS =
    variant === `glass`
      ? css`
          outline: 1px solid
            ${getVariantColorOutline(theme, variant, color, tint, disabled, colorOverride)};
          outline-offset: -1px;
          background-color: ${getVariantColorBg(
            theme,
            variant,
            color,
            tint,
            disabled,
            colorOverride,
          )};
          color: ${getVariantColorFg(theme, variant, color, tint, disabled, colorOverride)};
          &:hover {
            background-color: ${getVariantColorBgHover(
              theme,
              variant,
              color,
              tint,
              colorOverride,
            )};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint, colorOverride)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(
                theme,
                variant,
                color,
                tint,
                disabled,
                colorOverride,
              )};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getVariantColorBgActive(
              theme,
              variant,
              color,
              tint,
              colorOverride,
            )};
          }
        `
      : null;

  const sizeCSS = size
    ? css`
        padding: ${getButtonPadding(size)};
      `
    : null;

  const fullWidthCSS = fullWidth
    ? css`
        width: 100% !important;
      `
    : null;

  const roundedCSS = rounded
    ? css`
        border-radius: ${theme?.radius?.rounded ||
        theme?.radius?.button ||
        theme?.radius?.none} !important;
      `
    : null;

  const elevationCSS =
    elevation && !disabled
      ? css`
          box-shadow: ${theme?.elevation?.[elevation] || theme?.shadow?.none};
        `
      : null;

  const shadowLabelCSS =
    shadowLabel && !disabled
      ? css`
          text-shadow: ${theme?.shadow?.text || theme?.shadow?.none};
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
        & span {
          opacity: 0;
        }
      `
    : null;

  const suspendedCSS = suspended
    ? css`
        cursor: wait;
        pointer-events: none;
        & span {
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
      glassCSS,
      sizeCSS,
      fullWidthCSS,
      roundedCSS,
      elevationCSS,
      shadowLabelCSS,
      backdropBlurCSS,
      loadingCSS,
      suspendedCSS,
      disabledCSS,
      overrides,
    ) || undefined
  );
};

export const useLabelStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[],
) => {
  // Props
  const { size, uppercase } = props;

  // CSS Stylesheet
  const labelCSS = css`
    label: TuiButton-label;
    line-height: ${theme?.text?.button?.height || theme?.text?.height};
    font-family: ${theme?.text?.button?.family || theme?.text?.family};
    font-size: ${theme?.text?.button?.size || theme?.text?.size};
    font-weight: ${theme?.text?.button?.weight || theme?.text?.weight};
    user-select: none;
    pointer-events: none;
  `;

  const sizeCSS = size
    ? css`
        line-height: ${getButtonLabelHeight(size)}px;
        font-size: ${getButtonLabelSize(size)}px;
      `
    : null;

  const uppercaseCSS = uppercase
    ? css`
        text-transform: uppercase;
      `
    : null;

  // Return Styles
  return cx(labelCSS, sizeCSS, uppercaseCSS, overrides) || undefined;
};

export const useStartIconStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[],
) => {
  // Props
  const { size } = props;

  // CSS Stylesheet
  const startIconCSS = css`
    label: TuiButton-startIcon;
    margin-left: -4px;
    margin-right: ${getButtonIconMargin(size)}px;
    line-height: 1;
    font-size: ${getButtonIconSize(size)}px;
    & svg {
      display: block;
      width: ${getButtonIconSize(size)}px;
      height: ${getButtonIconSize(size)}px;
    }
  `;

  // Return Styles
  return cx(startIconCSS, overrides) || undefined;
};

export const useEndIconStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[],
) => {
  // Props
  const { size } = props;

  // CSS Stylesheet
  const endIconCSS = css`
    label: TuiButton-endIcon;
    margin-left: ${getButtonIconMargin(size)}px;
    margin-right: -4px;
    & svg {
      display: block;
      width: ${getButtonIconSize(size)}px;
      height: ${getButtonIconSize(size)}px;
    }
  `;

  // Return Styles
  return cx(endIconCSS, overrides) || undefined;
};

export const useCenterIconStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[],
) => {
  // Props
  const { size } = props;

  // CSS Stylesheet
  const centerIconCSS = css`
    label: TuiButton-centerIcon;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    & svg {
      display: block;
      width: ${getButtonIconSize(size)}px;
      height: ${getButtonIconSize(size)}px;
    }
  `;

  // Return Styles
  return cx(centerIconCSS, overrides) || undefined;
};
