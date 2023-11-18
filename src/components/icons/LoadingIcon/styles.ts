// DEPENDENCIES -------------------------------------------------- //

import { css, keyframes } from "@emotion/css";

import { getColorFg, getColorBg, getTrackSize } from "utils/helpers";

// STYLES -------------------------------------------------- //

const useBaseStyles = (theme: any) => {
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

const useTrackStyles = (theme: any, props: any) => {
  const { type, color, tint, size, thickness, disabled } = props;

  const stylesheet: any = {
    track: css`
      position: relative;
      width: ${size}px;
      height: ${size}px;
      border: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid
        ${type === `bg` ? getColorBg(theme, color, tint, disabled, `fg`) : getColorFg(theme, color, tint, disabled)};
      border-radius: 50%;
      background-color: transparent;
      opacity: 25%;
    `,
  };

  return stylesheet.track;
};

const useBarStyles = (theme: any, props: any) => {
  const { type, color, tint, size, thickness, speed, disabled } = props;

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
        ${type === `bg` ? getColorBg(theme, color, tint, disabled, `fg`) : getColorFg(theme, color, tint, disabled)};
      border-radius: 50%;
      background-color: transparent;
      animation: ${spinKeyframes} ${speed}ms linear infinite;
    `,
  };

  return stylesheet.bar;
};

// EXPORT -------------------------------------------------- //

export { useBaseStyles, useTrackStyles, useBarStyles };
