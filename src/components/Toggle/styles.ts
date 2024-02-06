// DEPENDENCIES ---------------------------------------------------------------- //

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

export const useToggleStyles = (theme: any, props: any) => {
  const { variant, color, tint, size, shadow, checked, disabled } = props;

  const stylesheet: any = {
    toggle: css`
      position: relative;
      transition: ${theme.transition.standard || theme.transition.none};
    `,
    disabled: css`
      cursor: not-allowed;
      user-select: none;
      pointer-events: none;
    `,
  };

  let styles: any = [stylesheet.toggle];
  if (disabled) styles.push(stylesheet.disabled);
  return styles;
};

export const useTrackStyles = (theme: any, props: any) => {
  const { variant, color, tint, size, shadow, checked, disabled } = props;

  const stylesheet: any = {
    track: css`
      display: inline-flex;
      width: 64px;
      height: 32px;
      padding: 4px;
      border-radius: 16px;
      background-color: ${getColorBg(theme, color, tint, disabled)};
      transition: ${theme.transition.standard || theme.transition.none};
    `,
    size: css``,
    shadow: css`
      box-shadow: ${theme.shadow.medium || theme.shadow.none};
    `,
  };

  let styles: any = [stylesheet.track];
  if (size) styles.push(stylesheet.size);
  if (shadow) styles.push(stylesheet.shadow);
  if (disabled) styles.push(stylesheet.disabled);
  return styles;
};

export const useSlideStyles = (theme: any, props: any) => {
  const { variant, color, tint, size, shadow, checked, disabled } = props;

  const stylesheet: any = {
    slide: css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 12px;
      background-color: #fff;
      transition: ${theme.transition.standard || theme.transition.none};
    `,
    size: css``,
    checked: css`
      transform: translateX(32px);
    `,
  };

  let styles: any = [stylesheet.slide];
  if (size) styles.push(stylesheet.size);
  if (checked) styles.push(stylesheet.checked);
  if (disabled) styles.push(stylesheet.disabled);
  return styles;
};

export const useInputStyles = (theme: any, props: any) => {
  const { variant, color, tint, size, shadow, checked, disabled } = props;

  const stylesheet: any = {
    input: css`
      width: 64px;
      height: 32px;
      padding: 0;
      border: 0;
      margin: 0;
      cursor: pointer;
    `,
  };

  return stylesheet.input;
};
