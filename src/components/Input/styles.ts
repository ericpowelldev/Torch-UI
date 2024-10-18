// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

import {
  getInputLabelColor,
  getInputPadding,
  getVariantBoxShadow,
  getVariantColorFg,
  getVariantColorBg,
  getVariantColorHover,
  getVariantColorPlaceholder,
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
  const { disabled, error, info, inverse, success, warning } = props;

  // CSS Stylesheet
  const labelCSS = css`
    display: block;
    margin-bottom: 4px;
    line-height: ${theme?.text?.label?.height || theme?.text?.height};
    font-family: ${theme?.text?.label?.family || theme?.text?.family};
    font-size: ${theme?.text?.label?.size || theme?.text?.size};
    font-weight: ${theme?.text?.label?.weight || theme?.text?.weight};
  `;

  const colorCSS = css`
    color: ${getInputLabelColor(theme, error, warning, success, info, inverse)};
  `;

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
  const { backdropBlur, color, disabled, fullWidth, inverse, tint, variant } = props;

  // CSS Stylesheet
  const wrapperCSS = css`
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    border: 0;
    border-radius: ${theme?.radius?.input || theme?.radius?.none};
    margin: 0;
    background-color: transparent;
    color: ${inverse ? theme?.color?.fgInverse?.[0] : theme?.color?.fg?.[0]};
    cursor: text;
    transition: ${theme?.transition?.input || theme?.transition?.none};
  `;

  const solidCSS =
    variant === `solid`
      ? css`
          outline: 2px solid ${inverse ? theme?.color?.fgInverse?.[0] : theme?.color?.fg?.[0]}00;
          outline-offset: -2px;
          background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
          &:hover {
            background-color: ${getVariantColorHover(theme, variant, color, tint)};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:focus-within {
            outline-color: ${inverse ? theme?.color?.fgInverse?.[3] : theme?.color?.fg?.[3]};
          }
        `
      : null;

  const softCSS =
    variant === `soft`
      ? css`
          outline: 2px solid ${getVariantColorFg(theme, variant, color, tint, disabled)}00;
          outline-offset: -2px;
          background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
          &:hover {
            background-color: ${getVariantColorHover(theme, variant, color, tint)};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:focus-within {
            outline-color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
          }
        `
      : null;

  const plainCSS =
    variant === `plain`
      ? css`
          outline: 2px solid ${getVariantColorFg(theme, variant, color, tint, disabled)}00;
          outline-offset: -2px;
          background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
          &:hover {
            background-color: ${getVariantColorHover(theme, variant, color, tint)};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:focus-within {
            outline-color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
          }
        `
      : null;

  const outlinedCSS =
    variant === `outlined`
      ? css`
          outline: 1px solid ${inverse ? theme?.color?.fgInverse?.[3] : theme?.color?.fg?.[3]};
          outline-offset: -1px;
          background-color: transparent;
          transition: ${theme?.transition?.inputWithOutline || theme?.transition?.none};
          &:hover {
            outline-color: ${inverse ? theme?.color?.fgInverse?.[1] : theme?.color?.fg?.[1]};
            @media (hover: none) {
              outline-color: ${inverse ? theme?.color?.fgInverse?.[3] : theme?.color?.fg?.[3]};
            }
          }
          &:focus-within {
            outline: 2px solid ${getVariantColorFg(theme, variant, color, tint, disabled)};
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
    cx(
      wrapperCSS,
      solidCSS,
      softCSS,
      plainCSS,
      outlinedCSS,
      fullWidthCSS,
      backdropBlurCSS,
      disabledCSS,
      overrides
    ) || undefined
  );
};

export const useInputStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // Props
  const { color, disabled, fullWidth, inverse, multiline, select, tint, variant } = props;

  const urlEncodedFill = encodeURIComponent(
    inverse ? theme?.color?.fgInverse?.[1] : theme?.color?.fg?.[1]
  );

  // CSS Stylesheet
  const inputCSS = css`
    position: relative;
    overflow: hidden;
    appearance: none;
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
    transition: ${theme?.transition?.input ||
    theme?.transition?.standard ||
    theme?.transition?.none};
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
          color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
          &::placeholder {
            color: ${getVariantColorPlaceholder(theme, variant, color, tint, disabled)};
          }
        `
      : null;

  const softCSS =
    variant === `soft`
      ? css`
          color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
          &::placeholder {
            color: ${getVariantColorPlaceholder(theme, variant, color, tint, disabled)};
          }
        `
      : null;

  const plainCSS =
    variant === `plain`
      ? css`
          color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
          &::placeholder {
            color: ${getVariantColorPlaceholder(theme, variant, color, tint, disabled)};
          }
        `
      : null;

  const outlinedCSS =
    variant === `outlined`
      ? css`
          color: ${inverse ? theme?.color?.fgInverse?.[0] : theme?.color?.fg?.[0]};
          &::placeholder {
            color: ${inverse ? theme?.color?.fgInverse?.[2] : theme?.color?.fg?.[2]};
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

  const selectCss = select
    ? css`
        padding-right: 30px;
        background-image: url("data:image/svg+xml;utf8,<svg fill='${urlEncodedFill}' width='24' height='24' viewBox='2 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: 50%;
        cursor: pointer;
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
    cx(
      inputCSS,
      solidCSS,
      softCSS,
      plainCSS,
      outlinedCSS,
      multilineCSS,
      selectCss,
      fullWidthCSS,
      disabledCSS,
      overrides
    ) || undefined
  );
};
