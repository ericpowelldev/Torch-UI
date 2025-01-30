// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx, keyframes } from "../../utils/emotion";

import { Theme } from "../../utils/types";
import { getColorFg, getColorBg, getTrackSize } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useBaseStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // CSS Stylesheet
  const baseCSS = css`
    label: ProgressCircleBase;
    position: relative;
    overflow: hidden;
    padding: 0;
    border: 0;
    margin: 0;
    line-height: 1;
    user-select: none;
  `;

  // Return Styles
  return cx(baseCSS, overrides) || undefined;
};

export const useTrackStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { color, disabled, size, thickness, tint, variant } = props;

  // CSS Stylesheet
  const trackCSS = css`
    label: ProgressCircleTrack;
    position: relative;
    width: ${size}px;
    height: ${size}px;
    border: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid
      ${variant === `bg`
        ? getColorBg(theme, color, tint, disabled, `fg`)
        : getColorFg(theme, color, tint, disabled)};
    border-radius: 50%;
    background-color: transparent;
    opacity: 20%;
  `;

  // Return Styles
  return cx(trackCSS, overrides) || undefined;
};

export const useBarStyles = (theme: Theme, props?: any, overrides?: (string | undefined)[]) => {
  // Props
  const { animateMs, color, disabled, size, thickness, tint, variant } = props;

  // Keyframes Stylesheet
  const spinKF = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    `;

  // CSS Stylesheet
  const barCSS = css`
    label: ProgressCircleBar;
    position: absolute;
    top: 0;
    left: 0;
    width: ${size}px;
    height: ${size}px;
    border: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid transparent;
    border-top: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid
      ${variant === `bg`
        ? getColorBg(theme, color, tint, disabled, `fg`)
        : getColorFg(theme, color, tint, disabled)};
    border-radius: 50%;
    background-color: transparent;
    animation: ${spinKF} ${animateMs}ms linear infinite;
  `;

  // Return Styles
  return cx(barCSS, overrides) || undefined;
};
