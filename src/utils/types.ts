// TYPES -------------------------------------------------- //

/** Array of accepted alpha color tint values */
const alphaTintValues = [`a0`, `a50`, `a100`, `a200`, `a300`, `a400`, `a500`, `a600`, `a700`, `a800`, `a900`, `a950`, `a1000`];
type AlphaTintValues =
  | `a0`
  | `a50`
  | `a100`
  | `a200`
  | `a300`
  | `a400`
  | `a500`
  | `a600`
  | `a700`
  | `a800`
  | `a900`
  | `a950`
  | `a1000`;

/** Array of accepted bool values */
const boolValues = [false, null, undefined, NaN, 0, -0, ``, true, 1];
type BoolValues = false | null | undefined | typeof NaN | 0 | -0 | `` | true | 1;

/** Array of accepted button variants */
const buttonVariants = [`solid`, `outline`, `transparent`, `link`];
type ButtonVariants = `solid` | `outline` | `transparent` | `link`;

/** Array of accepted color values */
const colorValues = [`primary`, `secondary`, `tertiary`, `utility`, `info`, `error`, `warning`, `success`, `grayscale`];
type ColorValues = `primary` | `secondary` | `tertiary` | `utility` | `info` | `error` | `warning` | `success` | `grayscale`;

/** Array of accepted contrast color tint values */
const contrastTintValues = [
  `c0`,
  `c50`,
  `c100`,
  `c200`,
  `c300`,
  `c400`,
  `c500`,
  `c600`,
  `c700`,
  `c800`,
  `c900`,
  `c950`,
  `c1000`,
];
type ContrastTintValues =
  | `c0`
  | `c50`
  | `c100`
  | `c200`
  | `c300`
  | `c400`
  | `c500`
  | `c600`
  | `c700`
  | `c800`
  | `c900`
  | `c950`
  | `c1000`;

/** Array of accepted size values */
const sizeValues = [`min`, `xs`, `sm`, `md`, `lg`, `xl`, `max`];
type SizeValues = `min` | `xs` | `sm` | `md` | `lg` | `xl` | `max`;

/** Array of accepted main color tint values */
const tintValues = [`0`, `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`, `1000`];
type TintValues = `0` | `50` | `100` | `200` | `300` | `400` | `500` | `600` | `700` | `800` | `900` | `950` | `1000`;

// EXPORT -------------------------------------------------- //
export {
  alphaTintValues,
  boolValues,
  buttonVariants,
  colorValues,
  contrastTintValues,
  sizeValues,
  tintValues,
  AlphaTintValues,
  BoolValues,
  ButtonVariants,
  ColorValues,
  ContrastTintValues,
  SizeValues,
  TintValues,
};
