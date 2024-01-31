// DEPENDENCIES ---------------------------------------------------------------- //

import { css } from "@emotion/css";

import { getColorText } from "../../utils/helpers";

// STYLES ---------------------------------------------------------------- //

export const useTextStyles = (theme: any, props: any) => {
  const { variant, color, tint, align } = props;

  const stylesheet: any = {
    text: css`
      line-height: ${theme.text.height};
      font-family: ${theme.text.family};
      font-size: ${theme.text.size};
      font-weight: ${theme.text.weight};
    `,
    variant: css`
      line-height: ${theme.text[variant].height || theme.text.height};
      font-family: ${theme.text[variant].family || theme.text.family};
      font-size: ${theme.text[variant].size || theme.text.size};
      font-weight: ${theme.text[variant].weight || theme.text.weight};
    `,
    color: css`
      color: ${getColorText(theme, color, tint)};
    `,
    align: css`
      text-align: ${align};
    `,
  };

  const styles: any = [stylesheet.text];

  if (variant) styles.push(stylesheet.variant);
  if (color) styles.push(stylesheet.color);
  if (align) styles.push(stylesheet.align);

  return styles;
};
