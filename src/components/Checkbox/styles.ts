// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "@utils/emotion";

import { Theme } from "@utils/types";
import {
  getCheckboxSize,
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
  overrides?: (string | undefined)[]
) => {
  // Props
  const { color, disabled, tint, variant } = props;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiCheckbox-root;
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: ${theme?.space(0.75)};
    border: 0;
    border-radius: ${theme?.radius?.checkbox || theme?.radius?.none};
    margin: 0;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    transition: ${theme?.transition?.checkbox || theme?.transition?.none};
    &:active {
      transition: ${theme?.transition?.none};
    }
  `;

  const solidCss =
    variant === `solid`
      ? css`
          background-color: ${getVariantColorBg(
            theme,
            variant,
            `grayscale`,
            tint,
            disabled,
            true
          )};
          color: ${getVariantColorFg(theme, variant, `grayscale`, tint, disabled, true)};
          &:hover {
            background-color: ${getVariantColorHover(theme, variant, color, tint)};
            color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(
                theme,
                variant,
                `grayscale`,
                tint,
                disabled,
                true
              )};
              color: ${getVariantColorFg(theme, variant, `grayscale`, tint, disabled, true)};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getVariantColorActive(theme, variant, color, tint)};
            color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
          }

          &:has(> input[type="checkbox"]:checked) {
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
          }
        `
      : null;

  const softCss =
    variant === `soft`
      ? css`
          background-color: ${getVariantColorBg(
            theme,
            variant,
            `grayscale`,
            tint,
            disabled,
            true
          )};
          color: ${getVariantColorFg(theme, variant, `grayscale`, tint, disabled, true)};
          &:hover {
            background-color: ${getVariantColorHover(theme, variant, color, tint)};
            color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(
                theme,
                variant,
                `grayscale`,
                tint,
                disabled,
                true
              )};
              color: ${getVariantColorFg(theme, variant, `grayscale`, tint, disabled, true)};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getVariantColorActive(theme, variant, color, tint)};
            color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
          }

          &:has(> input[type="checkbox"]:checked) {
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
          }
        `
      : null;

  const plainCss =
    variant === `plain`
      ? css`
          background-color: ${getVariantColorBg(
            theme,
            variant,
            `grayscale`,
            tint,
            disabled,
            true
          )};
          color: ${getVariantColorFg(theme, variant, `grayscale`, tint, disabled, true)};
          &:hover {
            background-color: ${getVariantColorHover(theme, variant, color, tint)};
            color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint)};
            @media (hover: none) {
              background-color: ${getVariantColorBg(
                theme,
                variant,
                `grayscale`,
                tint,
                disabled,
                true
              )};
              color: ${getVariantColorFg(theme, variant, `grayscale`, tint, disabled, true)};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            background-color: ${getVariantColorActive(theme, variant, color, tint)};
            color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
          }

          &:has(> input[type="checkbox"]:checked) {
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
          }
        `
      : null;

  const outlinedCss =
    variant === `outlined`
      ? css`
          outline: 1px solid
            ${getVariantColorFg(theme, variant, `grayscale`, tint, disabled, true)};
          outline-offset: -1px;
          background-color: ${getVariantColorBg(
            theme,
            variant,
            `grayscale`,
            tint,
            disabled,
            true
          )};
          color: ${getVariantColorFg(theme, variant, `grayscale`, tint, disabled, true)};
          &:hover {
            outline: 1px solid ${getVariantColorFg(theme, variant, color, tint, disabled)};
            outline-offset: -1px;
            background-color: ${getVariantColorHover(theme, variant, color, tint)};
            color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
            box-shadow: ${getVariantBoxShadow(theme, variant, color, tint)};
            @media (hover: none) {
              outline: 1px solid
                ${getVariantColorFg(theme, variant, `grayscale`, tint, disabled, true)};
              outline-offset: -1px;
              background-color: ${getVariantColorBg(
                theme,
                variant,
                `grayscale`,
                tint,
                disabled,
                true
              )};
              color: ${getVariantColorFg(theme, variant, `grayscale`, tint, disabled, true)};
              box-shadow: ${theme?.shadow?.none};
            }
          }
          &:active {
            outline: 2px solid ${getVariantColorFg(theme, variant, color, tint)};
            outline-offset: -2px;
            background-color: ${getVariantColorActive(theme, variant, color, tint)};
            color: ${getVariantColorFg(theme, variant, color, tint)};
          }

          &:has(> input[type="checkbox"]:checked) {
            outline: 1px solid ${getVariantColorFg(theme, variant, color, tint, disabled)};
            outline-offset: -1px;
            background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
            color: ${getVariantColorFg(theme, variant, color, tint, disabled)};
            &:hover {
              outline: 1px solid ${getVariantColorFg(theme, variant, color, tint)};
              outline-offset: -1px;
              background-color: ${getVariantColorHover(theme, variant, color, tint)};
              box-shadow: ${getVariantBoxShadow(theme, variant, color, tint)};
              @media (hover: none) {
                outline: 1px solid ${getVariantColorFg(theme, variant, color, tint)};
                outline-offset: -1px;
                background-color: ${getVariantColorBg(theme, variant, color, tint, disabled)};
                box-shadow: ${theme?.shadow?.none};
              }
            }
            &:active {
              outline: 2px solid ${getVariantColorFg(theme, variant, color, tint)};
              outline-offset: -2px;
              background-color: ${getVariantColorActive(theme, variant, color, tint)};
            }
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
    cx(rootCSS, solidCss, softCss, plainCss, outlinedCss, disabledCSS, overrides) || undefined
  );
};

export const useInputStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { size } = props;

  // CSS Stylesheet
  const inputCSS = css`
    label: TuiCheckbox-input;
    z-index: 1;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    cursor: inherit;
  `;

  const sizeCSS = size ? css`` : null;

  // Return Styles
  return cx(inputCSS, sizeCSS, overrides) || undefined;
};

export const useIconCheckedStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { color, disabled, size, tint } = props;

  // CSS Stylesheet
  const iconCheckedCSS = css`
    label: TuiCheckbox-iconChecked;
    display: none;
    width: ${getCheckboxSize(size)}px;
    height: ${getCheckboxSize(size)}px;
    line-height: 1;
    font-size: ${getCheckboxSize(size)}px;
    &:has(~ input[type="checkbox"]:checked) {
      display: block;
    }
    & svg {
      width: ${getCheckboxSize(size)}px;
      height: ${getCheckboxSize(size)}px;
    }
  `;

  // Return Styles
  return cx(iconCheckedCSS, overrides) || undefined;
};

export const useIconUncheckedStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { color, disabled, size, tint } = props;

  // CSS Stylesheet
  const iconUncheckedCSS = css`
    label: TuiCheckbox-iconUnchecked;
    display: block;
    width: ${getCheckboxSize(size)}px;
    height: ${getCheckboxSize(size)}px;
    line-height: 1;
    font-size: ${getCheckboxSize(size)}px;
    &:has(~ input[type="checkbox"]:checked) {
      display: none;
    }
    & svg {
      width: ${getCheckboxSize(size)}px;
      height: ${getCheckboxSize(size)}px;
    }
  `;

  // Return Styles
  return cx(iconUncheckedCSS, overrides) || undefined;
};
