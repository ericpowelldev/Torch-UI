// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

import { getInputLabelColor, getInputBorder, getInputPadding } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useBaseStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { fullWidth } = props;

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

  return cx(baseCSS, fullWidthCSS, overrides) || undefined;
};

export const useLabelStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { error, warning, success, info, disabled } = props;

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

  return cx(labelCSS, colorCSS, disabledCSS, overrides) || undefined;
};

export const useWrapperStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { variant, fullWidth, backdropBlur, error, warning, success, info, disabled } = props;

  const wrapperCSS = css`
    position: relative;
    overflow: hidden;
    display: inline-flex;
    padding: 0;
    border: 0;
    margin: 0;
    background-color: transparent;
    color: ${theme?.color?.fg};
    cursor: text;
    transition: ${theme?.transition?.input || theme?.transition?.standard || theme?.transition?.none};
  `;

  const standardCSS =
    variant === `standard`
      ? css`
          padding: ${getInputPadding(variant)};
          border-bottom: ${getInputBorder(theme, `base`, error, warning, success, info, disabled)};
          &:hover {
            border-bottom: ${getInputBorder(theme, `hover`, error, warning, success, info, disabled)};
          }
          &:focus-within {
            border-bottom: ${getInputBorder(theme, `focus`, error, warning, success, info, disabled)};
          }
        `
      : null;

  const transparentCSS =
    variant === `transparent`
      ? css`
          padding: ${getInputPadding(variant)};
          border-bottom: ${getInputBorder(theme, `base`, error, warning, success, info, disabled)};
          border-radius: ${theme?.radius?.input || theme?.radius?.none} ${theme?.radius?.input || theme?.radius?.none} 0 0;
          background-color: ${theme?.color?.fg[0]}16;
          &:hover {
            border-bottom: ${getInputBorder(theme, `hover`, error, warning, success, info, disabled)};
            background-color: ${theme?.color?.fg[0]}24;
          }
          &:focus-within {
            border-bottom: ${getInputBorder(theme, `focus`, error, warning, success, info, disabled)};
            background-color: ${theme?.color?.fg[0]}16;
          }
        `
      : null;

  const outlineCSS =
    variant === `outline`
      ? css`
          padding: ${getInputPadding(variant)};
          border-radius: ${theme?.radius?.input || theme?.radius?.none};
          outline: ${getInputBorder(theme, `base`, error, warning, success, info, disabled)};
          outline-offset: -1px;
          &:hover {
            outline: ${getInputBorder(theme, `hover`, error, warning, success, info, disabled)};
          }
          &:focus-within {
            outline: ${getInputBorder(theme, `focus`, error, warning, success, info, disabled)};
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
        &::placeholder {
          color: transparent;
        }
      `
    : null;

  return (
    cx(wrapperCSS, standardCSS, transparentCSS, outlineCSS, fullWidthCSS, backdropBlurCSS, disabledCSS, overrides) ||
    undefined
  );
};

export const useInputStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const { multiline, fullWidth, disabled } = props;

  const inputCSS = css`
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0;
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
      color: ${theme?.color?.fg[3]};
    }
  `;

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
        &::placeholder {
          color: transparent;
        }
      `
    : null;

  return cx(inputCSS, multilineCSS, fullWidthCSS, disabledCSS, overrides) || undefined;
};
