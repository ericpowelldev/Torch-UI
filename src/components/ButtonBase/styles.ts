// DEPENDENCIES ---------------------------------------------------------------- //

import clsx from "clsx";
import { css } from "@emotion/css";

// STYLES ---------------------------------------------------------------- //

export const useButtonStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const buttonCSS = css`
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 0;
    border: 0;
    margin: 0;
    line-height: ${theme?.text?.button?.height || theme?.text?.height};
    font-family: ${theme?.text?.button?.family || theme?.text?.family};
    font-size: ${theme?.text?.button?.size || theme?.text?.size};
    font-weight: ${theme?.text?.button?.weight || theme?.text?.weight};
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    transition: ${theme?.transition?.button || theme?.transition?.none};
    user-select: none;
  `;

  return clsx(buttonCSS, overrides) || undefined;
};

export const useLabelStyles = (theme?: any, props?: any, overrides?: (string | undefined)[]) => {
  const labelCSS = css`
    line-height: ${theme?.text?.button?.height || theme?.text?.height};
    font-family: ${theme?.text?.button?.family || theme?.text?.family};
    font-size: ${theme?.text?.button?.size || theme?.text?.size};
    font-weight: ${theme?.text?.button?.weight || theme?.text?.weight};
    user-select: none;
    pointer-events: none;
  `;

  return clsx(labelCSS, overrides) || undefined;
};
