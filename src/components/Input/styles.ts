// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

import {
  getColorActive,
  getColorBg,
  getColorFg,
  getColorHover,
  getInputBorder,
  getInputLabelColor,
  getInputPadding,
} from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useBaseStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // Props
  const { fullWidth } = props;

  // CSS Stylesheet
  const baseCSS = css`
    position: relative;
    display: block;
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }
  `;

  const fullWidthCSS = fullWidth
    ? css`
        width: 100%;
      `
    : null;

  // Return Styles
  return cx(baseCSS, fullWidthCSS, overrides) || undefined;
};

export const useLabelStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // Props
  const { disabled, error, info, success, warning } = props;

  // CSS Stylesheet
  const labelCSS = css`
    display: block;
    margin-bottom: 4px;
    line-height: ${theme?.text?.label?.height || theme?.text?.height};
    font-family: ${theme?.text?.label?.family || theme?.text?.family};
    font-size: ${theme?.text?.label?.size || theme?.text?.size};
    font-weight: ${theme?.text?.label?.weight || theme?.text?.weight};
  `;

  const colorCSS =
    error || warning || success || info
      ? css`
          color: ${getInputLabelColor(theme, error, warning, success, info)};
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
  return cx(labelCSS, colorCSS, disabledCSS, overrides) || undefined;
};

export const useWrapperStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // Props
  const { backdropBlur, color, disabled, error, fullWidth, info, success, tint, variant, warning } = props;

  // CSS Stylesheet
  const wrapperCSS = css`
    position: relative;
    overflow: hidden;
    display: inline-flex;
    padding: 0;
    border: 0;
    border-radius: ${theme?.radius?.input || theme?.radius?.none};
    margin: 0;
    background-color: transparent;
    color: ${theme?.color?.fg};
    cursor: text;
    transition: ${theme?.transition?.input || theme?.transition?.standard || theme?.transition?.none};
  `;

  const solidCSS =
    variant === `solid`
      ? css`
          outline: 1px solid ${theme?.color?.fg?.[0]}00;
          outline-offset: -1px;
          background-color: ${getColorBg(theme, color, tint, disabled)};
          &:focus-within {
            outline-width: 2px;
            outline-offset: -2px;
          }
        `
      : null;

  const softCSS =
    variant === `soft`
      ? css`
          outline: 1px solid ${getColorBg(theme, color, tint, disabled)}00;
          outline-offset: -1px;
          background-color: ${getColorBg(theme, color, tint, disabled, `fg`)}24;
          &:hover {
            outline: 1px solid ${getColorBg(theme, color, tint, disabled)}24;
          }
          &:focus-within {
            outline: 2px solid ${getColorBg(theme, color, tint, disabled)};
            outline-offset: -2px;
          }
        `
      : null;

  const plainCSS =
    variant === `plain`
      ? css`
          outline: 1px solid ${getColorBg(theme, color, tint, disabled)}00;
          outline-offset: -1px;
          background-color: ${getColorBg(theme, color, tint, disabled, `fg`)}06;
          &:hover {
            outline: 1px solid ${getColorBg(theme, color, tint, disabled)}24;
          }
          &:focus-within {
            outline: 2px solid ${getColorBg(theme, color, tint, disabled)};
            outline-offset: -2px;
          }
        `
      : null;

  const outlinedCSS =
    variant === `outlined`
      ? css`
          outline: ${getInputBorder(theme, `base`, error, warning, success, info, disabled)};
          outline-offset: -1px;
          background-color: transparent;
          &:hover {
            outline: ${getInputBorder(theme, `hover`, error, warning, success, info, disabled)};
          }
          &:focus-within {
            outline: 2px solid ${getColorBg(theme, color, tint, disabled)};
            outline-offset: -2px;
          }
        `
      : null;

  const fullWidthCSS = fullWidth
    ? css`
        width: 100%;
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

  // Return Styles
  return (
    cx(wrapperCSS, solidCSS, softCSS, plainCSS, outlinedCSS, fullWidthCSS, backdropBlurCSS, disabledCSS, overrides) || undefined
  );
};

export const useInputStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // Props
  const { color, disabled, fullWidth, multiline, tint, variant } = props;

  // CSS Stylesheet
  const inputCSS = css`
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: ${getInputPadding(variant)};
    border: 0;
    margin: 0;
    line-height: ${theme?.text?.input?.height || theme?.text?.height};
    font-family: ${theme?.text?.input?.family || theme?.text?.family};
    font-size: ${theme?.text?.input?.size || theme?.text?.size};
    font-weight: ${theme?.text?.input?.weight || theme?.text?.weight};
    background-color: transparent;
    color: ${theme?.color?.fg?.[0]};
    transition: ${theme?.transition?.input || theme?.transition?.standard || theme?.transition?.none};
    &:focus {
      outline: none;
    }
    &::placeholder {
      user-select: none;
    }
  `;

  const solidCSS =
    variant === `solid`
      ? css`
          color: ${getColorFg(theme, color, tint, disabled)};
          &::placeholder {
            color: ${theme?.color?.fgi[2]};
          }
        `
      : null;

  const softCSS =
    variant === `soft`
      ? css`
          color: ${getColorBg(theme, color, tint, disabled)};
          &::placeholder {
            color: ${getColorBg(theme, color, tint, disabled)}80;
          }
        `
      : null;

  const plainCSS =
    variant === `plain`
      ? css`
          color: ${getColorBg(theme, color, tint, disabled)};
          &::placeholder {
            color: ${getColorBg(theme, color, tint, disabled)}80;
          }
        `
      : null;

  const outlinedCSS =
    variant === `outlined`
      ? css`
          color: ${theme?.color?.fg?.[0]};
          &::placeholder {
            color: ${theme?.color?.fg?.[2]};
          }
        `
      : null;

  const multilineCSS = multiline
    ? css`
        text-overflow: initial;
        white-space: initial;
        height: auto;
      `
    : null;

  const fullWidthCSS = fullWidth
    ? css`
        width: 100%;
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
    cx(inputCSS, solidCSS, softCSS, plainCSS, outlinedCSS, multilineCSS, fullWidthCSS, disabledCSS, overrides) || undefined
  );
};
