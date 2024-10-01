// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

import {
  getColorFg,
  getColorBg,
  getToggleSize,
  getToggleSlideSize,
  getToggleSlideGradientSize,
  getToggleIconSize,
} from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useToggleStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // Props
  const { disabled, size } = props;

  // CSS Stylesheet
  const toggleCSS = css`
    position: relative;
    width: ${getToggleSize(size) * 2}px;
    height: ${getToggleSize(size)}px;
    transition: ${theme?.transition?.standard || theme?.transition?.none};
  `;

  const disabledCSS = disabled
    ? css`
        opacity: 0.7;
        cursor: not-allowed;
        user-select: none;
        pointer-events: none;
      `
    : null;

  // Return Styles
  return cx(toggleCSS, disabledCSS, overrides) || undefined;
};

export const useTrackStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // Props
  const { color, shadowTrack, size, tint } = props;

  // CSS Stylesheet
  const trackCSS = css`
    position: relative;
    display: inline-flex;
    width: ${getToggleSize(size) * 2}px;
    height: ${getToggleSize(size)}px;
    border-radius: 16px;
    background-color: ${theme?.color?.fg?.[2]};
    transition: ${theme?.transition?.standard || theme?.transition?.none};
    &:has(> input[type="checkbox"]:checked) {
      background-color: ${getColorBg(theme, color, tint)};
    }
  `;

  const shadowCSS = shadowTrack
    ? css`
        box-shadow: ${theme?.shadow?.toggleTrack || theme?.shadow?.none};
      `
    : null;

  // Return Styles
  return cx(trackCSS, shadowCSS, overrides) || undefined;
};

export const useSlideStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // Props
  const { color, disabled, shadowSlide, size, tint } = props;

  // CSS Stylesheet
  const slideCSS = css`
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${getToggleSlideSize(size)}px;
    height: ${getToggleSlideSize(size)}px;
    border-radius: 16px;
    margin: 2px;
    background-color: ${theme?.color?.white};
    transition: ${theme?.transition?.standard || theme?.transition?.none};
    &:has(~ input[type="checkbox"]:checked) {
      transform: translateX(${getToggleSize(size)}px);
      background-color: ${getColorFg(theme, color, tint)};
    }
  `;

  const shadowCSS = shadowSlide
    ? css`
        box-shadow: ${theme?.shadow?.toggleSlide || theme?.shadow?.none};
      `
    : null;

  const disabledCSS = disabled
    ? css`
        background-color: transparent;
        background-image: repeating-linear-gradient(
          135deg,
          ${theme?.color?.white}80,
          ${theme?.color?.white}80 ${getToggleSlideGradientSize(size)}px,
          ${theme?.color?.white} ${getToggleSlideGradientSize(size)}px,
          ${theme?.color?.white} ${getToggleSlideGradientSize(size) * 2}px
        );
        &:has(~ input[type="checkbox"]:checked) {
          background-color: transparent;
          background-image: repeating-linear-gradient(
            135deg,
            ${theme?.color?.white}80,
            ${theme?.color?.white}80 ${getToggleSlideGradientSize(size)}px,
            ${theme?.color?.white} ${getToggleSlideGradientSize(size)}px,
            ${theme?.color?.white} ${getToggleSlideGradientSize(size) * 2}px
          );
        }
      `
    : null;

  // Return Styles
  return cx(slideCSS, shadowCSS, disabledCSS, overrides) || undefined;
};

export const useInputStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  // Props
  const { size } = props;

  // CSS Stylesheet
  const inputCSS = css`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: ${getToggleSize(size) * 2}px;
    height: ${getToggleSize(size)}px;
    padding: 0;
    border: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    transition: ${theme?.transition?.standard || theme?.transition?.none};
  `;

  // Return Styles
  return cx(inputCSS, overrides) || undefined;
};

export const useIconCheckedStyles = (
  theme?: any,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { color, size, tint } = props;

  // CSS Stylesheet
  const iconCheckedCSS = css`
    position: absolute;
    display: inline-flex;
    top: 0;
    left: 4px;
    width: ${getToggleIconSize(size)}px;
    height: ${getToggleIconSize(size)}px;
    margin: 3px;
    line-height: 1.133;
    font-size: ${getToggleIconSize(size)}px;
    transition: ${theme?.transition?.standard || theme?.transition?.none};
    opacity: 0;
    & svg {
      display: block;
      width: ${getToggleIconSize(size)}px;
      height: ${getToggleIconSize(size)}px;
      color: ${getColorFg(theme, color, tint)};
      transition: ${theme?.transition?.standard || theme?.transition?.none};
    }
    &:has(~ input[type="checkbox"]:checked) {
      left: 0;
      opacity: 1;
    }
  `;

  // Return Styles
  return cx(iconCheckedCSS, overrides) || undefined;
};

export const useIconUncheckedStyles = (
  theme?: any,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { size } = props;

  // CSS Stylesheet
  const iconUncheckedCSS = css`
    position: absolute;
    display: inline-flex;
    top: 0;
    right: 0;
    width: ${getToggleIconSize(size)}px;
    height: ${getToggleIconSize(size)}px;
    margin: 3px;
    line-height: 1.133;
    font-size: ${getToggleIconSize(size)}px;
    transition: ${theme?.transition?.standard || theme?.transition?.none};
    opacity: 1;
    & svg {
      display: block;
      width: ${getToggleIconSize(size)}px;
      height: ${getToggleIconSize(size)}px;
      color: ${theme?.color?.white};
      transition: ${theme?.transition?.standard || theme?.transition?.none};
    }
    &:has(~ input[type="checkbox"]:checked) {
      right: 4px;
      opacity: 0;
    }
  `;

  // Return Styles
  return cx(iconUncheckedCSS, overrides) || undefined;
};
