// DEPENDENCIES -------------------------------------------------- //

import { css } from "@emotion/css";

// STYLES -------------------------------------------------- //

export const useButtonStyles = (theme: any) => {
  const stylesheet: any = {
    button: css`
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      padding: 0;
      border: 0;
      margin: 0;
      line-height: ${theme.text.heightButton || theme.text.height};
      font-family: ${theme.text.familyButton || theme.text.family};
      font-size: ${theme.text.sizeButton || theme.text.size};
      font-weight: ${theme.text.weightButton || theme.text.weight};
      background-color: transparent;
      color: inherit;
      cursor: pointer;
      transition: ${theme.transition.button || theme.transition.none};
      user-select: none;
    `,
  };

  return stylesheet.button;
};

export const useLabelStyles = (theme: any) => {
  const stylesheet: any = {
    label: css`
      line-height: ${theme.text.heightButton || theme.text.height};
      font-family: ${theme.text.familyButton || theme.text.family};
      font-size: ${theme.text.sizeButton || theme.text.size};
      font-weight: ${theme.text.weightButton || theme.text.weight};
      user-select: none;
      pointer-events: none;
    `,
  };

  return stylesheet.label;
};
