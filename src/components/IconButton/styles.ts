// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";
import {
  getButtonIconSize,
  getIconButtonPadding,
  getIconButtonIconSize,
  getVariantBoxShadow,
  getVariantColorFg,
  getVariantColorBg,
  getVariantColorBgHover,
  getVariantColorBgActive,
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
    loading,
    rounded,
    size,
    suspended,
    tint,
    variant,
  } = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiIconButton-root;
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${getIconButtonPadding(size)};
    border: 0;
    border-radius: ${theme?.radius?.button || theme?.radius?.none};
    margin: 0;
    line-height: 1;
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

  const roundedCSS = rounded
    ? css`
        border-radius: ${theme?.radius?.rounded ||
        theme?.radius?.button ||
        theme?.radius?.none} !important;
      `
    : null;

  const elevationCSS =
    elevation && variant === `solid` && !disabled
      ? css`
          box-shadow: ${theme?.elevation?.[elevation] || theme?.shadow?.none};
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

  const suspendedCSS = suspended
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
      glassCSS,
      roundedCSS,
      elevationCSS,
      backdropBlurCSS,
      loadingCSS,
      suspendedCSS,
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
  const { size } = props || {};

  const iconCSS = css`
    label: TuiIconButton-icon;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    font-size: ${getIconButtonIconSize(size)};
    pointer-events: none;
    & svg {
      display: block;
      width: ${getIconButtonIconSize(size)};
      height: ${getIconButtonIconSize(size)};
    }
  `;

  return cx(iconCSS, overrides) || undefined;
};

export const useCenterIconStyles = (
  theme: Theme,
  props?: any,
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
