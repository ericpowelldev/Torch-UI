// DEPENDENCIES -------------------------------------------------- //

import { css } from "@emotion/css";

import { getSpacerSize } from "utils/helpers";

// STYLES -------------------------------------------------- //

export const useSpacerStyles = (theme: any, props: any) => {
  const { size, vertical } = props;

  const stylesheet: any = {
    horizontal: css`
      position: relative;
      width: 100%;
      height: ${theme.space(getSpacerSize(size))};
    `,
    vertical: css`
      position: relative;
      width: ${theme.space(getSpacerSize(size))};
      height: auto;
    `,
  };

  if (vertical) return stylesheet.vertical;
  return stylesheet.horizontal;
};
