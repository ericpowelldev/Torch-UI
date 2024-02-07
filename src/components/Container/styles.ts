// DEPENDENCIES ---------------------------------------------------------------- //

import clsx from "clsx";
import { css } from "@emotion/css";

import { getContainerMaxWidth } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useContainerStyles = (theme: any, props: any) => {
  const { maxWidth, disablePadding, visualize } = props;

  const clsContainer = css`
    display: block;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: ${theme.break.md.down}) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media (max-width: ${theme.break.sm.down}) {
      padding-left: 16px;
      padding-right: 16px;
    }
    @media (max-width: ${theme.break.xs.down}) {
      padding-left: 12px;
      padding-right: 12px;
    }
  `;

  const clsMaxWidth = maxWidth
    ? css`
        max-width: ${getContainerMaxWidth(theme, maxWidth)};
      `
    : null;

  const clsDisablePadding = disablePadding
    ? css`
        padding: 0;
      `
    : null;

  const clsVisualize = visualize
    ? css`
        outline: 2px dashed gray;
        outline-offset: -2px;
      `
    : null;

  return clsx(clsContainer, clsMaxWidth, clsDisablePadding, clsVisualize);
};
