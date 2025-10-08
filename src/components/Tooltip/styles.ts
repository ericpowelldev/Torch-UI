// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx, keyframes } from "@utils/emotion";

import { Theme } from "@utils/types";
import { getColorBg } from "@utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useRootStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { followCursor, placement } = props;

  // CSS Keyframes
  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

  const fadeInMove = keyframes`
    0% {
      opacity: 0;
      transform: ${placement?.includes("top") ? "translate(0, -12px)" : placement?.includes("bottom") ? "translate(0, 12px)" : placement?.includes("left") ? "translate(-12px, 0)" : "translate(12px, 0)"};
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  `;

  // CSS Stylesheet
  const rootCSS = css`
    label: TuiTooltip-root;
    position: fixed;
    z-index: ${theme?.zIndex?.tooltip || theme?.zIndex?.base};
    animation: ${followCursor ? `${fadeIn} 0.25s ease-out` : `${fadeInMove} 0.25s ease-out`};
    user-select: none;
    pointer-events: none;
  `;

  // Return Styles
  return cx(rootCSS, overrides) || undefined;
};

export const useContentStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { color, disabled, maxWidth, tint } = props;

  // CSS Stylesheet
  const contentCSS = css`
    label: TuiTooltip-content;
    word-wrap: break-word;
    padding: ${theme?.padding?.tooltip || theme?.padding?.none};
    border-radius: ${theme?.radius?.tooltip || theme?.radius?.none};
    line-height: ${theme?.text?.tooltip?.height || theme?.text?.height};
    font-family: ${theme?.text?.tooltip?.family || theme?.text?.family};
    font-size: ${theme?.text?.tooltip?.size || theme?.text?.size};
    font-weight: ${theme?.text?.tooltip?.weight || theme?.text?.weight};
    background-color: ${getColorBg(theme, color, tint)};
    color: ${theme?.color?.white || "#ffffff"};
    box-shadow: ${theme?.shadow?.tooltip || theme?.shadow?.none};
    opacity: ${disabled ? 0.5 : 1};
    max-width: ${typeof maxWidth === "number"
      ? `${maxWidth}px`
      : typeof maxWidth === "string"
        ? maxWidth
        : "256px"};
  `;

  // Return Styles
  return cx(contentCSS, overrides) || undefined;
};

export const useArrowStyles = (
  theme: Theme,
  props?: any,
  overrides?: (string | undefined)[]
) => {
  // Props
  const { color, disabled, placement, tint } = props;

  // CSS Stylesheet
  const arrowCSS = css`
    label: TuiTooltip-arrow;
    position: absolute;
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    background-color: ${getColorBg(theme, color, tint)};
    opacity: ${disabled ? 0.5 : 1};
  `;

  let positionCSS = undefined;
  if (placement === "top") {
    positionCSS = css`
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    `;
  } else if (placement === "top-start") {
    positionCSS = css`
      bottom: -4px;
      left: 8px;
      transform: rotate(45deg);
    `;
  } else if (placement === "top-end") {
    positionCSS = css`
      bottom: -4px;
      right: 8px;
      transform: rotate(45deg);
    `;
  } else if (placement === "bottom") {
    positionCSS = css`
      top: -4px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    `;
  } else if (placement === "bottom-start") {
    positionCSS = css`
      top: -4px;
      left: 8px;
      transform: rotate(45deg);
    `;
  } else if (placement === "bottom-end") {
    positionCSS = css`
      top: -4px;
      right: 8px;
      transform: rotate(45deg);
    `;
  } else if (placement === "left") {
    positionCSS = css`
      right: -4px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    `;
  } else if (placement === "left-start") {
    positionCSS = css`
      right: -4px;
      top: 8px;
      transform: rotate(45deg);
    `;
  } else if (placement === "left-end") {
    positionCSS = css`
      right: -4px;
      bottom: 8px;
      transform: rotate(45deg);
    `;
  } else if (placement === "right") {
    positionCSS = css`
      left: -4px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    `;
  } else if (placement === "right-start") {
    positionCSS = css`
      left: -4px;
      top: 8px;
      transform: rotate(45deg);
    `;
  } else if (placement === "right-end") {
    positionCSS = css`
      left: -4px;
      bottom: 8px;
      transform: rotate(45deg);
    `;
  }

  // Return Styles
  return cx(arrowCSS, positionCSS, overrides) || undefined;
};
