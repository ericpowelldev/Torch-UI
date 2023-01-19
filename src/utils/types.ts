//////////////////////// TYPES ////////////////////////

/** Array of accepted bool values */
const boolValues = [false, null, undefined, NaN, 0, -0, ``, true, 1];
type BoolValues = false | null | undefined | typeof NaN | 0 | -0 | `` | true | 1;

/** Array of accepted button variants */
const buttonVariants = [`solid`, `outline`, `transparent`, `link`];
type ButtonVariants = `solid` | `outline` | `transparent` | `link`;

/** Array of accepted color values */
const colorValues = [`primary`, `secondary`, `tertiary`, `utility`, `info`, `error`, `warning`, `success`];
type ColorValues = `primary` | `secondary` | `tertiary` | `utility` | `info` | `error` | `warning` | `success`;

/** Array of accepted color values, including black and white */
const extendedColorValues = [
  `primary`,
  `secondary`,
  `tertiary`,
  `utility`,
  `info`,
  `error`,
  `warning`,
  `success`,
  `black`,
  `white`,
];
type ExtendedColorValues =
  | `primary`
  | `secondary`
  | `tertiary`
  | `utility`
  | `info`
  | `error`
  | `warning`
  | `success`
  | `black`
  | `white`;

/** Array of accepted size values */
const sizeValues = [`min`, `xs`, `sm`, `md`, `lg`, `xl`, `max`];
type SizeValues = `min` | `xs` | `sm` | `md` | `lg` | `xl` | `max`;

/** Array of accepted color tint values */
const tintValues = [`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`];
type TintValues = `100` | `200` | `300` | `400` | `500` | `600` | `700` | `800` | `900`;

//////////////////////// EXPORT ////////////////////////
export {
  boolValues,
  buttonVariants,
  colorValues,
  extendedColorValues,
  sizeValues,
  tintValues,
  BoolValues,
  ButtonVariants,
  ColorValues,
  ExtendedColorValues,
  SizeValues,
  TintValues,
};
