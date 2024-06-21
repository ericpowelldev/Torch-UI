// DEPENDENCIES ---------------------------------------------------------------- //

import { css, keyframes } from "../../utils/emotion";

import { getColorFg, getColorBg } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useIconStyles = (theme: any, props: any) => {
  const { variant, color, tint, size, animate, animationSpeed, disabled } = props;

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
      animation: ${blinkKeyframes} ${animate ? animationSpeed : 0}ms infinite;
      color: ${variant === `bg` ? getColorBg(theme, color, tint, disabled, `fg`) : getColorFg(theme, color, tint, disabled)};
    `,
  };

  return stylesheet.icon;
};
