// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";
import {
  getInputLabelColor,
  getInputPadding,
  getInputVariantColorBg,
  getInputVariantColorFg,
  getInputVariantColorOutline,
  getInputVariantColorOutlineFocus,
  getInputVariantColorPlaceholder,
} from "@utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useRootStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[],
) => {
  // Props
  const { fullWidth } = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiInput-root;
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
  return cx(rootCSS, fullWidthCSS, overrides) || undefined;
};

export const useLabelStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[],
) => {
  // Props
  const { disabled, error, info, inverse, success, warning } = props;

  // CSS Stylesheet
  const labelCSS = css`
    label: TuiInput-label;
    display: block;
    margin-bottom: 6px;
    margin-left: 6px;
    line-height: ${theme?.text?.label?.height || theme?.text?.height};
    font-family: ${theme?.text?.label?.family || theme?.text?.family};
    font-size: ${theme?.text?.label?.size || theme?.text?.size};
    font-weight: ${theme?.text?.label?.weight || theme?.text?.weight};
  `;

  const colorCSS = css`
    color: ${getInputLabelColor({
      disabled,
      error,
      info,
      inverse,
      success,
      theme,
      warning,
    })};
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

export const useWrapperStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[],
) => {
  // Props
  const {
    backdropBlur,
    color,
    colorBg,
    disabled,
    elevation,
    error,
    fullWidth,
    info,
    inverse,
    rounded,
    success,
    suspended,
    tint,
    variant,
    warning,
  } = props;

  // CSS Stylesheet
  const wrapperCSS = css`
    label: TuiInput-wrapper;
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    border: 0;
    border-radius: ${rounded
      ? theme?.radius?.rounded || theme?.radius?.input || theme?.radius?.none
      : theme?.radius?.input || theme?.radius?.none};
    margin: 0;
    background-color: transparent;
    color: ${inverse ? theme?.color?.fgInverse?.[0] : theme?.color?.fg?.[0]};
    cursor: text;
    transition: ${theme?.transition?.input || theme?.transition?.none};
  `;

  const solidCSS =
    variant === `solid`
      ? css`
          outline: 1px solid
            ${getInputVariantColorOutline({
              disabled,
              error,
              info,
              inverse,
              success,
              theme,
              variant,
              warning,
            })};
          outline-offset: -1px;
          background-color: ${getInputVariantColorBg({
            colorBg,
            disabled,
            inverse,
            theme,
            variant,
          })};
          &:hover {
            outline-color: ${getInputVariantColorOutlineFocus({
              color,
              theme,
              tint,
            })};
            @media (hover: none) {
              outline-color: ${getInputVariantColorOutline({
                disabled,
                error,
                info,
                inverse,
                success,
                theme,
                variant,
                warning,
              })};
            }
          }
          &:focus-within {
            outline: 2px solid
              ${getInputVariantColorOutlineFocus({
                color,
                theme,
                tint,
              })};
            outline-offset: -2px;
          }
        `
      : null;

  const softCSS =
    variant === `soft`
      ? css`
          outline: 1px solid
            ${getInputVariantColorOutline({
              disabled,
              error,
              info,
              inverse,
              success,
              theme,
              variant,
              warning,
            })};
          outline-offset: -1px;
          background-color: ${getInputVariantColorBg({
            colorBg,
            disabled,
            inverse,
            theme,
            variant,
          })};
          &:hover {
            outline-color: ${getInputVariantColorOutlineFocus({
              color,
              theme,
              tint,
            })};
            @media (hover: none) {
              outline-color: ${getInputVariantColorOutline({
                disabled,
                error,
                info,
                inverse,
                success,
                theme,
                variant,
                warning,
              })};
            }
          }
          &:focus-within {
            outline: 2px solid
              ${getInputVariantColorOutlineFocus({
                color,
                theme,
                tint,
              })};
            outline-offset: -2px;
          }
        `
      : null;

  const plainCSS =
    variant === `plain`
      ? css`
          outline: 1px solid
            ${getInputVariantColorOutline({
              disabled,
              error,
              info,
              inverse,
              success,
              theme,
              variant,
              warning,
            })};
          outline-offset: -1px;
          background-color: ${getInputVariantColorBg({
            colorBg,
            disabled,
            inverse,
            theme,
            variant,
          })};
          &:hover {
            outline-color: ${getInputVariantColorOutlineFocus({
              color,
              theme,
              tint,
            })};
            @media (hover: none) {
              outline-color: ${getInputVariantColorOutline({
                disabled,
                error,
                info,
                inverse,
                success,
                theme,
                variant,
                warning,
              })};
            }
          }
          &:focus-within {
            outline: 2px solid
              ${getInputVariantColorOutlineFocus({
                color,
                theme,
                tint,
              })};
            outline-offset: -2px;
          }
        `
      : null;

  const outlinedCSS =
    variant === `outlined`
      ? css`
          outline: 1px solid
            ${getInputVariantColorOutline({
              disabled,
              error,
              info,
              inverse,
              success,
              theme,
              variant,
              warning,
            })};
          outline-offset: -1px;
          background-color: ${getInputVariantColorBg({
            colorBg,
            disabled,
            inverse,
            theme,
            variant,
          })};
          &:hover {
            outline-color: ${getInputVariantColorOutlineFocus({
              color,
              theme,
              tint,
            })};
            @media (hover: none) {
              outline-color: ${getInputVariantColorOutline({
                disabled,
                error,
                info,
                inverse,
                success,
                theme,
                variant,
                warning,
              })};
            }
          }
          &:focus-within {
            outline: 2px solid
              ${getInputVariantColorOutlineFocus({
                color,
                theme,
                tint,
              })};
            outline-offset: -2px;
          }
        `
      : null;

  const glassCSS =
    variant === `glass`
      ? css`
          outline: 1px solid
            ${getInputVariantColorOutline({
              disabled,
              error,
              info,
              inverse,
              success,
              theme,
              variant,
              warning,
            })};
          outline-offset: -1px;
          background-color: ${getInputVariantColorBg({
            colorBg,
            disabled,
            inverse,
            theme,
            variant,
          })};
          &:hover {
            outline-color: ${getInputVariantColorOutlineFocus({
              color,
              theme,
              tint,
            })};
            @media (hover: none) {
              outline-color: ${getInputVariantColorOutline({
                disabled,
                error,
                info,
                inverse,
                success,
                theme,
                variant,
                warning,
              })};
            }
          }
          &:focus-within {
            outline: 2px solid
              ${getInputVariantColorOutlineFocus({
                color,
                theme,
                tint,
              })};
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
      glassCSS,
      fullWidthCSS,
      backdropBlurCSS,
      disabledCSS,
      overrides,
    ) || undefined
  );
};

export const useInputStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[],
) => {
  // Props
  const { colorBg, disabled, fullWidth, inverse, multiline, select, variant } = props;

  const urlEncodedFill = encodeURIComponent(
    inverse ? theme?.color?.fgInverse?.[1] : theme?.color?.fg?.[1],
  );

  // CSS Stylesheet
  const inputCSS = css`
    label: TuiInput-input;
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
          color: ${getInputVariantColorFg({ colorBg, disabled, inverse, theme, variant })};
          &::placeholder {
            color: ${getInputVariantColorPlaceholder({
              colorBg,
              disabled,
              inverse,
              theme,
              variant,
            })};
          }
        `
      : null;

  const softCSS =
    variant === `soft`
      ? css`
          color: ${getInputVariantColorFg({ colorBg, disabled, inverse, theme, variant })};
          &::placeholder {
            color: ${getInputVariantColorPlaceholder({
              colorBg,
              disabled,
              inverse,
              theme,
              variant,
            })};
          }
        `
      : null;

  const plainCSS =
    variant === `plain`
      ? css`
          color: ${getInputVariantColorFg({ colorBg, disabled, inverse, theme, variant })};
          &::placeholder {
            color: ${getInputVariantColorPlaceholder({
              colorBg,
              disabled,
              inverse,
              theme,
              variant,
            })};
          }
        `
      : null;

  const outlinedCSS =
    variant === `outlined`
      ? css`
          color: ${getInputVariantColorFg({ colorBg, disabled, inverse, theme, variant })};
          &::placeholder {
            color: ${getInputVariantColorPlaceholder({
              colorBg,
              disabled,
              inverse,
              theme,
              variant,
            })};
          }
        `
      : null;

  const glassCSS =
    variant === `glass`
      ? css`
          color: ${getInputVariantColorFg({ colorBg, disabled, inverse, theme, variant })};
          &::placeholder {
            color: ${getInputVariantColorPlaceholder({
              colorBg,
              disabled,
              inverse,
              theme,
              variant,
            })};
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
      glassCSS,
      multilineCSS,
      selectCss,
      fullWidthCSS,
      disabledCSS,
      overrides,
    ) || undefined
  );
};
