// DEPENDENCIES ---------------------------------------------------------------- //

import { css } from "@emotion/css";

import { getBoxColor } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useBoxStyles = (theme: any, props: any) => {
  const { color, tint, width, height, radius, shadow, backdropBlur } = props;

  const stylesheet: any = {
    box: css`
      width: ${typeof width === `number` ? `${width}px` : typeof width === `string` ? width : `inherit`};
      height: ${typeof height === `number` ? `${height}px` : typeof height === `string` ? height : `inherit`};
      border-radius: ${typeof radius === `number` ? `${radius}px` : typeof radius === `string` ? radius : `inherit`};
      background-color: ${getBoxColor(theme, color, tint)};
      box-shadow: ${shadow ? theme.shadow.medium : `none`};
      backdrop-filter: ${backdropBlur ? theme.blur.medium : `none`};
    `,
  };

  return stylesheet.box;
};
