// DEPENDENCIES ---------------------------------------------------------------- //

import { css, keyframes } from "../../utils/emotion";

import { getColorFg, getColorBg, getTrackSize } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useBaseStyles = (theme: any) => {
  const stylesheet: any = {
    base: css`
      position: relative;
      overflow: hidden;
      padding: 0;
      border: 0;
      margin: 0;
      line-height: 1;
      user-select: none;
    `,
  };

  return stylesheet.base;
};

export const useTrackStyles = (theme: any, props: any) => {
  const { variant, color, tint, size, thickness, disabled } = props;

  const stylesheet: any = {
    track: css`
      position: relative;
      width: ${size}px;
      height: ${size}px;
      border: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid
        ${variant === `bg` ? getColorBg(theme, color, tint, disabled, `fg`) : getColorFg(theme, color, tint, disabled)};
      border-radius: 50%;
      background-color: transparent;
      opacity: 25%;
    `,
  };

  return stylesheet.track;
};

export const useBarStyles = (theme: any, props: any) => {
  const { variant, color, tint, size, thickness, animationSpeed, disabled } = props;

  const spinKeyframes = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  const stylesheet: any = {
    bar: css`
      position: absolute;
      top: 0;
      left: 0;
      width: ${size}px;
      height: ${size}px;
      border: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid transparent;
      border-top: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid
        ${variant === `bg` ? getColorBg(theme, color, tint, disabled, `fg`) : getColorFg(theme, color, tint, disabled)};
      border-radius: 50%;
      background-color: transparent;
      animation: ${spinKeyframes} ${animationSpeed}ms linear infinite;
    `,
  };

  return stylesheet.bar;
};
