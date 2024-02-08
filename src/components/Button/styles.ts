// DEPENDENCIES ---------------------------------------------------------------- //

import clsx from "clsx";
import { css } from "@emotion/css";

import {
  getColorFg,
  getColorBg,
  getColorHover,
  getColorActive,
  getButtonPadding,
  getButtonLabelSize,
  getButtonLabelHeight,
  getButtonIconSize,
  getButtonIconMargin,
} from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useButtonStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { variant, color, tint, size, fullWidth, pill, shadowButton, shadowLabel, backdropBlur, disabled } = props;

  const buttonCSS = css`
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
    &:hover {
      transform: translateY(-2px);
      @media (hover: none) {
        transform: none;
      }
    }
    &:active {
      transition: ${theme?.transition?.none};
    }
  `;

  const solidCSS =
    variant === `solid`
      ? css`
          background-color: ${getColorBg(theme, color, tint, disabled)};
          color: ${getColorFg(theme, color, tint, disabled)};
          &:hover {
            background-color: ${getColorHover(theme, `solid`, color, tint)};
            box-shadow: 0 0 16px -2px ${getColorBg(theme, color, tint, disabled)}48;
            @media (hover: none) {
              background-color: ${getColorBg(theme, color, tint, disabled)};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getColorActive(theme, `solid`, color, tint)};
          }
        `
      : null;

  const transparentCSS =
    variant === `transparent`
      ? css`
          background-color: ${getColorBg(theme, color, tint, disabled, `fg`)}24;
          color: ${getColorBg(theme, color, tint, disabled, `fg`)};
          &:hover {
            background-color: ${getColorHover(theme, `transparent`, color, tint)};
            @media (hover: none) {
              background-color: ${getColorBg(theme, color, tint, disabled, `fg`)}24;
            }
          }
          &:active {
            background-color: ${getColorActive(theme, `transparent`, color, tint)};
          }
        `
      : null;

  const simpleCSS =
    variant === `simple`
      ? css`
          background-color: transparent;
          color: ${getColorBg(theme, color, tint, disabled, `fg`)};
          &:hover {
            background-color: ${getColorHover(theme, `simple`, color, tint)};
            @media (hover: none) {
              background-color: transparent;
            }
          }
          &:active {
            background-color: ${getColorActive(theme, `simple`, color, tint)};
          }
        `
      : null;

  const outlineCSS =
    variant === `outline`
      ? css`
          outline: 1px solid ${getColorBg(theme, color, tint, disabled, `fg`)};
          outline-offset: -1px;
          background-color: transparent;
          color: ${getColorBg(theme, color, tint, disabled, `fg`)};
          &:hover {
            background-color: ${getColorHover(theme, `outline`, color, tint)};
            box-shadow: 0 0 16px -2px ${getColorBg(theme, color, tint, disabled)}48;
            @media (hover: none) {
              background-color: transparent;
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getColorActive(theme, `outline`, color, tint)};
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

  const pillCSS = pill
    ? css`
        border-radius: ${theme?.radius?.pill || theme?.radius?.button || theme?.radius?.none} !important;
      `
    : null;

  const shadowButtonCSS =
    shadowButton && variant === `solid` && !disabled
      ? css`
          box-shadow: ${theme?.shadow?.button || theme?.shadow?.none};
        `
      : null;

  const shadowLabelCSS =
    shadowLabel && variant === `solid` && !disabled
      ? css`
          text-shadow: ${theme?.shadow?.text || theme?.shadow?.none};
        `
      : null;

  const backdropBlurCSS = backdropBlur
    ? css`
        backdrop-filter: ${theme?.blur?.medium || theme?.blur?.none};
      `
    : null;

  const disabledCSS = disabled
    ? css`
        cursor: not-allowed;
        user-select: none;
        pointer-events: none;
      `
    : null;

  return (
    clsx(
      buttonCSS,
      solidCSS,
      transparentCSS,
      simpleCSS,
      outlineCSS,
      sizeCSS,
      fullWidthCSS,
      pillCSS,
      shadowButtonCSS,
      shadowLabelCSS,
      backdropBlurCSS,
      disabledCSS,
      overrides
    ) || undefined
  );
};

export const useLabelStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { size, uppercase } = props;

  const labelCSS = css`
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

  return clsx(labelCSS, sizeCSS, uppercaseCSS, overrides) || undefined;
};

export const useStartIconStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { size } = props;

  const startIconCSS = css`
    margin-left: -2px;
    margin-right: ${getButtonIconMargin(size)}px;
    line-height: 1;
    font-size: ${getButtonIconSize(size)}px;
    & svg {
      display: block;
      width: ${getButtonIconSize(size)}px;
      height: ${getButtonIconSize(size)}px;
    }
  `;

  return clsx(startIconCSS, overrides) || undefined;
};

export const useEndIconStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { size } = props;

  const endIconCSS = css`
    margin-left: ${getButtonIconMargin(size)}px;
    margin-right: -2px;
    & svg {
      display: block;
      width: ${getButtonIconSize(size)}px;
      height: ${getButtonIconSize(size)}px;
    }
  `;

  return clsx(endIconCSS, overrides) || undefined;
};
