// DEPENDENCIES ---------------------------------------------------------------- //

import { css } from "@emotion/css";

import { getInputLabelColor, getInputBorder, getInputPadding } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useBaseStyles = (theme: any, props: any) => {
  const { fullWidth } = props;

  const stylesheet: any = {
    base: css`
      position: relative;
      display: block;
      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
      }
    `,
    fullWidth: css`
      width: 100%;
    `,
  };

  let styles: any = [stylesheet.base];
  if (fullWidth) styles.push(stylesheet.fullWidth);
  return styles;
};

export const useLabelStyles = (theme: any, props: any) => {
  const { disabled, error, warning, success } = props;

  const stylesheet: any = {
    label: css`
      display: block;
      margin-bottom: 4px;
      line-height: ${theme.text.label.height || theme.text.height};
      font-family: ${theme.text.label.family || theme.text.family};
      font-size: ${theme.text.label.size || theme.text.size};
      font-weight: ${theme.text.label.weight || theme.text.weight};
      color: ${getInputLabelColor(theme, error, warning, success)};
    `,
    disabled: css`
      cursor: not-allowed;
      user-select: none;
      pointer-events: none;
    `,
  };

  let styles: any = [stylesheet.label];
  if (disabled) styles.push(stylesheet.disabled);
  return styles;
};

export const useWrapperStyles = (theme: any, props: any) => {
  const { variant, fullWidth, backdropBlur, disabled, error, warning, success } = props;

  const stylesheet: any = {
    wrapper: css`
      position: relative;
      overflow: hidden;
      display: inline-flex;
      padding: 0;
      border: 0;
      margin: 0;
      background-color: transparent;
      color: ${theme.color.fg};
      cursor: text;
      transition: ${theme.transition.input || theme.transition.standard || theme.transition.none};
    `,
    standard: css`
      padding: ${getInputPadding(variant)};
      border-bottom: ${getInputBorder(theme, `base`, disabled, error, warning, success)};
      &:hover {
        border-bottom: ${getInputBorder(theme, `hover`, disabled, error, warning, success)};
      }
      &:focus-within {
        border-bottom: ${getInputBorder(theme, `focus`, disabled, error, warning, success)};
      }
    `,
    transparent: css`
      padding: ${getInputPadding(variant)};
      border-bottom: ${getInputBorder(theme, `base`, disabled, error, warning, success)};
      border-radius: ${theme.radius.input || theme.radius.none} ${theme.radius.input || theme.radius.none} 0 0;
      background-color: ${theme.color.fg[0]}16;
      &:hover {
        border-bottom: ${getInputBorder(theme, `hover`, disabled, error, warning, success)};
        background-color: ${theme.color.fg[0]}24;
      }
      &:focus-within {
        border-bottom: ${getInputBorder(theme, `focus`, disabled, error, warning, success)};
        background-color: ${theme.color.fg[0]}16;
      }
    `,
    outline: css`
      padding: ${getInputPadding(variant)};
      border-radius: ${theme.radius.input || theme.radius.none};
      outline: ${getInputBorder(theme, `base`, disabled, error, warning, success)};
      outline-offset: -1px;
      &:hover {
        outline: ${getInputBorder(theme, `hover`, disabled, error, warning, success)};
      }
      &:focus-within {
        outline: ${getInputBorder(theme, `focus`, disabled, error, warning, success)};
      }
    `,
    fullWidth: css`
      width: 100%;
    `,
    backdropBlur: css`
      backdrop-filter: blur(12px);
    `,
    disabled: css`
      cursor: not-allowed;
      user-select: none;
      pointer-events: none;
      &::placeholder {
        color: transparent;
      }
    `,
  };

  let styles: any = [stylesheet.wrapper];
  if (variant === `standard`) styles.push(stylesheet.standard);
  if (variant === `transparent`) styles.push(stylesheet.transparent);
  if (variant === `outline`) styles.push(stylesheet.outline);
  if (fullWidth) styles.push(stylesheet.fullWidth);
  if (backdropBlur) styles.push(stylesheet.backdropBlur);
  if (disabled) styles.push(stylesheet.disabled);
  return styles;
};

export const useInputStyles = (theme: any, props: any) => {
  const { multiline, fullWidth, disabled } = props;

  const stylesheet: any = {
    input: css`
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0;
      border: 0;
      margin: 0;
      line-height: ${theme.text.input.height || theme.text.height};
      font-family: ${theme.text.input.family || theme.text.family};
      font-size: ${theme.text.input.size || theme.text.size};
      font-weight: ${theme.text.input.weight || theme.text.weight};
      background-color: transparent;
      color: ${theme.color.fg};
      transition: ${theme.transition.input || theme.transition.standard || theme.transition.none};
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: ${theme.color.fg[3]};
      }
    `,
    multiline: css`
      text-overflow: initial;
      white-space: initial;
      height: auto;
    `,
    fullWidth: css`
      width: 100%;
    `,
    disabled: css`
      cursor: not-allowed;
      user-select: none;
      pointer-events: none;
      &::placeholder {
        color: transparent;
      }
    `,
  };

  let styles: any = [stylesheet.input];
  if (multiline) styles.push(stylesheet.multiline);
  if (fullWidth) styles.push(stylesheet.fullWidth);
  if (disabled) styles.push(stylesheet.disabled);
  return styles;
};
