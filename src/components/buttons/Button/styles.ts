// DEPENDENCIES -------------------------------------------------- //

import { css } from "@emotion/css";

import {
  getColorFg,
  getColorBg,
  getColorHover,
  getColorActive,
  getButtonPadding,
  getButtonLabelSize,
  getButtonIconSize,
  getButtonIconMargin,
} from "utils/helpers";

// STYLES -------------------------------------------------- //

export const useButtonStyles = (theme: any, props: any) => {
  const { variant, color, tint, size, pill, buttonShadow, textShadow, fullWidth, disabled } = props;

  const stylesheet: any = {
    button: css`
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      padding: 0;
      border: 0;
      border-radius: ${theme.radius.button || theme.radius.none};
      margin: 0;
      line-height: ${theme.text.heightButton || theme.text.height};
      font-family: ${theme.text.familyButton || theme.text.family};
      font-size: ${theme.text.sizeButton || theme.text.size};
      font-weight: ${theme.text.weightButton || theme.text.weight};
      text-align: center;
      background-color: transparent;
      color: inherit;
      cursor: pointer;
      transition: ${theme.transition.button || theme.transition.none};
      user-select: none;

      &:hover {
        transform: translateY(-2px);
        @media (hover: none) {
          transform: none;
        }
      }

      &:active {
        transition: ${theme.transition.none};
      }
    `,
    solid: css`
      background-color: ${getColorBg(theme, color, tint, disabled)};
      color: ${getColorFg(theme, color, tint, disabled)};
      backdrop-filter: blur(12px);

      &:hover {
        background-color: ${getColorHover(theme, `solid`, color, tint)};
        box-shadow: 0 0 16px -2px ${getColorBg(theme, color, tint, disabled)}48;
        @media (hover: none) {
          background-color: ${getColorBg(theme, color, tint, disabled)};
          box-shadow: ${theme.shadow.none};
        }
      }

      &:active {
        background-color: ${getColorActive(theme, `solid`, color, tint)};
      }
    `,
    transparent: css`
      background-color: ${getColorBg(theme, color, tint, disabled, `fg`)}24;
      color: ${getColorBg(theme, color, tint, disabled, `fg`)};
      backdrop-filter: blur(12px);

      &:hover {
        background-color: ${getColorHover(theme, `transparent`, color, tint)};
        @media (hover: none) {
          background-color: ${getColorBg(theme, color, tint, disabled, `fg`)}24;
        }
      }

      &:active {
        background-color: ${getColorActive(theme, `transparent`, color, tint)};
      }
    `,
    simple: css`
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
    `,
    outline: css`
      outline: 1px solid ${getColorBg(theme, color, tint, disabled, `fg`)};
      outline-offset: -1px;
      background-color: transparent;
      color: ${getColorBg(theme, color, tint, disabled, `fg`)};
      backdrop-filter: blur(12px);

      &:hover {
        background-color: ${getColorHover(theme, `outline`, color, tint)};
        box-shadow: 0 0 16px -2px ${getColorBg(theme, color, tint, disabled)}48;
        @media (hover: none) {
          background-color: transparent;
          box-shadow: ${theme.shadow.none};
        }
      }

      &:active {
        background-color: ${getColorActive(theme, `outline`, color, tint)};
      }
    `,
    size: css`
      padding: ${getButtonPadding(size)};
    `,
    pill: css`
      border-radius: ${theme.radius.pill || theme.radius.button || theme.radius.none};
    `,
    fullWidth: css`
      width: 100%;
    `,
    buttonShadow: css`
      box-shadow: ${theme.shadow.button || theme.shadow.none};
    `,
    textShadow: css`
      text-shadow: ${theme.shadow.text || theme.shadow.none};
    `,
    disabled: css`
      cursor: not-allowed;
      user-select: none;
      pointer-events: none;
    `,
  };

  let styles: any = [stylesheet.button];
  if (variant === `solid`) styles.push(stylesheet.solid);
  if (variant === `transparent`) styles.push(stylesheet.transparent);
  if (variant === `simple`) styles.push(stylesheet.simple);
  if (variant === `outline`) styles.push(stylesheet.outline);
  if (size) styles.push(stylesheet.size);
  if (pill) styles.push(stylesheet.pill);
  if (fullWidth) styles.push(stylesheet.fullWidth);
  if (buttonShadow && variant === `solid` && !disabled) styles.push(stylesheet.buttonShadow);
  if (textShadow && variant === `solid` && !disabled) styles.push(stylesheet.textShadow);
  if (disabled) styles.push(stylesheet.disabled);
  return styles;
};

export const useLabelStyles = (theme: any, props: any) => {
  const { size, uppercase } = props;

  const stylesheet: any = {
    label: css`
      line-height: ${theme.text.heightButton};
      font-family: ${theme.text.familyButton};
      font-size: ${theme.text.sizeButton};
      font-weight: ${theme.text.weightButton};
      user-select: none;
      pointer-events: none;
    `,
    size: css`
      font-size: ${getButtonLabelSize(size)}px;
    `,
    uppercase: css`
      text-transform: uppercase;
    `,
  };

  let styles: any = [stylesheet.label];
  if (size) styles.push(stylesheet.size);
  if (uppercase) styles.push(stylesheet.uppercase);
  return styles;
};

export const useStartIconStyles = (theme: any, props: any) => {
  const { size } = props;

  const stylesheet: any = {
    startIcon: css`
      margin-left: -2px;
      margin-right: ${getButtonIconMargin(size)}px;
      & svg {
        display: block;
        width: ${getButtonIconSize(size)}px;
        height: ${getButtonIconSize(size)}px;
      }
    `,
  };

  let styles: any = [stylesheet.startIcon];
  return styles;
};

export const useEndIconStyles = (theme: any, props: any) => {
  const { size } = props;

  const stylesheet: any = {
    endIcon: css`
      margin-left: ${getButtonIconMargin(size)}px;
      margin-right: -2px;
      & svg {
        display: block;
        width: ${getButtonIconSize(size)}px;
        height: ${getButtonIconSize(size)}px;
      }
    `,
  };

  let styles: any = [stylesheet.endIcon];
  return styles;
};
