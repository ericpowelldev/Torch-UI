// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx, keyframes } from "@utils/emotion";

import { Theme } from "@utils/types";
import {
  getColorFg,
  getColorBg,
  getStatusIconAnimate,
  getStatusIconAnimationSpeed,
} from "@utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useIconStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { animate, animateMs, color, disabled, size, status, tint, variant } = props;

  // Keyframe Stylesheet
  const blinkKF = keyframes`
    0% {
      opacity: 0.5;
    }
    45% {
      opacity: 1;
    }
    55% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  `;

  // CSS Stylesheet
  const iconCSS = css`
    label: StatusIcon;
    position: relative;
    display: block;
    width: ${size}px;
    height: ${size}px;
    padding: 0;
    border: 0;
    margin: 0;
    line-height: 1;
    color: ${variant === `bg`
      ? getColorBg(theme, color || status || `info`, tint, disabled, `fg`)
      : getColorFg(theme, color || status || `info`, tint, disabled)};
    user-select: none;
  `;

  const animateCSS = getStatusIconAnimate(status, animate)
    ? css`
        animation: ${blinkKF} ${getStatusIconAnimationSpeed(status, animateMs)}ms infinite;
      `
    : null;

  // Return Styles
  return cx(iconCSS, animateCSS, overrides) || undefined;
};
