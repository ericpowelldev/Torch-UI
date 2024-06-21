// DEPENDENCIES ---------------------------------------------------------------- //

import { css, cx } from "../../utils/emotion";

// STYLES ---------------------------------------------------------------- //

export const useOptionStyles = (theme: any, props: any) => {
  const { hidden, disabled, error, warning, success } = props;

  const stylesheet: any = {
    option: css`
      background-color: ${theme.color.bg[0]};
      color: ${theme.color.fg[0]};
    `,
  };

  let styles: any = [stylesheet.option];
  return styles;
};
