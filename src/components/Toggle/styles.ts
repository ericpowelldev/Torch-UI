// DEPENDENCIES ---------------------------------------------------------------- //

import { css } from "@emotion/css";

import {
  getColorFg,
  getColorBg,
  getToggleSize,
  getToggleSlideSize,
  getToggleSlideGradientSize,
  getToggleIconSize,
} from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useToggleStyles = (theme: any, props: any) => {
  const { variant, color, tint, size, disabled } = props;

  const stylesheet: any = {
    toggle: css`
      position: relative;
      width: ${getToggleSize(size) * 2}px;
      height: ${getToggleSize(size)}px;
      transition: ${theme.transition.standard || theme.transition.none};
    `,
    disabled: css`
      opacity: 0.7;
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
  const { variant, color, tint, size, shadowTrack } = props;

  const stylesheet: any = {
    track: css`
      position: relative;
      display: inline-flex;
      width: ${getToggleSize(size) * 2}px;
      height: ${getToggleSize(size)}px;
      border-radius: 16px;
      background-color: ${theme.color.fg[2]};
      transition: ${theme.transition.standard || theme.transition.none};
      &:has(> input[type="checkbox"]:checked) {
        background-color: ${getColorBg(theme, color, tint)};
      }
    `,
    size: css``,
    shadow: css`
      box-shadow: ${theme.shadow.toggleTrack || theme.shadow.none};
    `,
  };

  let styles: any = [stylesheet.track];
  if (size) styles.push(stylesheet.size);
  if (shadowTrack) styles.push(stylesheet.shadow);
  return styles;
};

export const useSlideStyles = (theme: any, props: any) => {
  const { variant, color, tint, size, shadowSlide, disabled } = props;

  const stylesheet: any = {
    slide: css`
      z-index: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${getToggleSlideSize(size)}px;
      height: ${getToggleSlideSize(size)}px;
      border-radius: 16px;
      margin: 2px;
      background-color: ${theme.color.white};
      transition: ${theme.transition.standard || theme.transition.none};
      &:has(~ input[type="checkbox"]:checked) {
        transform: translateX(${getToggleSize(size)}px);
        background-color: ${getColorFg(theme, color, tint)};
      }
    `,
    size: css``,
    shadow: css`
      box-shadow: ${theme.shadow.toggleSlide || theme.shadow.none};
    `,
    disabled: css`
      background-color: transparent !important;
      background-image: repeating-linear-gradient(135deg, ${theme.color.white}80, ${theme.color.white}80 ${getToggleSlideGradientSize(size)}px, ${theme.color.white} ${getToggleSlideGradientSize(size)}px, ${theme.color.white} ${getToggleSlideGradientSize(size) * 2}px) !important;
      &:has(~ input[type="checkbox"]:checked) {
        background-color: transparent !important;
        background-image: repeating-linear-gradient(135deg, ${theme.color.white}80, ${theme.color.white}80 ${getToggleSlideGradientSize(size)}px, ${theme.color.white} ${getToggleSlideGradientSize(size)}px, ${theme.color.white} ${getToggleSlideGradientSize(size) * 2}px) !important;
      }
    `,
  };

  let styles: any = [stylesheet.slide];
  if (size) styles.push(stylesheet.size);
  if (shadowSlide) styles.push(stylesheet.shadow);
  if (disabled) styles.push(stylesheet.disabled);
  return styles;
};

export const useInputStyles = (theme: any, props: any) => {
  const { variant, color, tint, size, disabled } = props;

  const stylesheet: any = {
    input: css`
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
      transition: ${theme.transition.standard || theme.transition.none};
    `,
  };

  return stylesheet.input;
};

export const useIconCheckedStyles = (theme: any, props: any) => {
  const { variant, color, tint, size } = props;

  const stylesheet: any = {
    iconChecked: css`
      position: absolute;
      display: inline-flex;
      top: 0;
      left: 4px;
      width: ${getToggleIconSize(size)}px;
      height: ${getToggleIconSize(size)}px;
      margin: 3px;
      line-height: 1.133;
      font-size: ${getToggleIconSize(size)}px;
      transition: ${theme.transition.standard || theme.transition.none};
      opacity: 0;
      & svg {
        display: block;
        width: ${getToggleIconSize(size)}px;
        height: ${getToggleIconSize(size)}px;
        color: ${getColorFg(theme, color, tint)};
        transition: ${theme.transition.standard || theme.transition.none};
      }
      &:has(~ input[type="checkbox"]:checked) {
        left: 0;
        opacity: 1;
      }
    `,
  };

  let styles: any = [stylesheet.iconChecked];
  return styles;
};

export const useIconUncheckedStyles = (theme: any, props: any) => {
  const { variant, color, tint, size } = props;

  const stylesheet: any = {
    iconUnchecked: css`
      position: absolute;
      display: inline-flex;
      top: 0;
      right: 0;
      width: ${getToggleIconSize(size)}px;
      height: ${getToggleIconSize(size)}px;
      margin: 3px;
      line-height: 1.133;
      font-size: ${getToggleIconSize(size)}px;
      transition: ${theme.transition.standard || theme.transition.none};
      opacity: 1;
      & svg {
        display: block;
        width: ${getToggleIconSize(size)}px;
        height: ${getToggleIconSize(size)}px;
        color: ${theme.color.white};
        transition: ${theme.transition.standard || theme.transition.none};
      }
      &:has(~ input[type="checkbox"]:checked) {
        right: 4px;
        opacity: 0;
      }
    `,
  };

  let styles: any = [stylesheet.iconUnchecked];
  return styles;
};
