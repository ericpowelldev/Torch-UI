// DEPENDENCIES -------------------------------------------------- //

import { css } from "@emotion/css";

// STYLES -------------------------------------------------- //

const useButtonStyles = (theme: any) => {
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
      border-radius: ${theme.radius.button};
      margin: 0;
      line-height: ${theme.text.heightButton};
      font-family: ${theme.text.familyButton};
      font-size: ${theme.text.sizeButton};
      font-weight: ${theme.text.weightButton};
      background: inherit;
      color: inherit;
      cursor: pointer;
      transition: ${theme.transition.button};
      user-select: none;
    `,
  };

  return stylesheet.button;
};

const useLabelStyles = (theme: any) => {
  const stylesheet: any = {
    label: css`
      line-height: ${theme.text.heightButton};
      font-family: ${theme.text.familyButton};
      font-size: ${theme.text.sizeButton};
      font-weight: ${theme.text.weightButton};
      user-select: none;
      pointer-events: none;
    `,
  };

  return stylesheet.label;
};

// EXPORT -------------------------------------------------- //

export { useButtonStyles, useLabelStyles };
