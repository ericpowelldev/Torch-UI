// DEPENDENCIES -------------------------------------------------- //

import { css, keyframes } from "@emotion/css";

import { getColorFg, getColorBg } from "utils/helpers";

// STYLES -------------------------------------------------- //

const useIconStyles = (theme: any, props: any) => {
  const { type, color, tint, size, speed, blink, disabled } = props;

  const blinkKeyframes = keyframes`
    0% {
      opacity: 0.5;
    }
    45% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  `;

  const stylesheet: any = {
    icon: css`
      position: relative;
      display: block;
      width: ${size}px;
      height: ${size}px;
      padding: 0;
      border: 0;
      border-radius: 50%;
      margin: 0;
      line-height: 1;
      user-select: none;
      animation: ${blinkKeyframes} ${blink ? speed : 0}ms infinite;
      color: ${type === `bg` ? getColorBg(theme, color, tint, disabled, `fg`) : getColorFg(theme, color, tint, disabled)};
    `,
  };

  return stylesheet.icon;
};

// EXPORT -------------------------------------------------- //

export { useIconStyles };
