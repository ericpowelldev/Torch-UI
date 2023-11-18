// TYPES -------------------------------------------------- //

/** Array of accepted alpha color tint values */
const alphaTintValues = [
  `a0`,
  `a50`,
  `a100`,
  `a150`,
  `a200`,
  `a250`,
  `a300`,
  `a350`,
  `a400`,
  `a450`,
  `a500`,
  `a550`,
  `a600`,
  `a650`,
  `a700`,
  `a750`,
  `a800`,
  `a850`,
  `a900`,
  `a950`,
  `a1000`,
];
type AlphaTintValues =
  | `a0`
  | `a50`
  | `a100`
  | `a150`
  | `a200`
  | `a250`
  | `a300`
  | `a350`
  | `a400`
  | `a450`
  | `a500`
  | `a550`
  | `a600`
  | `a650`
  | `a700`
  | `a750`
  | `a800`
  | `a850`
  | `a900`
  | `a950`
  | `a1000`;

/** Array of accepted bool values */
const boolValues = [false, null, undefined, NaN, 0, -0, ``, true, 1];
type BoolValues = false | null | undefined | typeof NaN | 0 | -0 | `` | true | 1;

/** Array of accepted button variants */
const buttonVariantValues = [`solid`, `transparent`, `simple`, `outline`];
type ButtonVariantValues = `solid` | `transparent` | `simple` | `outline`;

/** Array of accepted color values */
const colorValues = [`primary`, `secondary`, `tertiary`, `utility`, `info`, `error`, `warning`, `success`, `grayscale`];
type ColorValues = `primary` | `secondary` | `tertiary` | `utility` | `info` | `error` | `warning` | `success` | `grayscale`;

/** Array of accepted contrast color tint values */
const contrastTintValues = [
  `i0`,
  `i50`,
  `i100`,
  `i150`,
  `i200`,
  `i250`,
  `i300`,
  `i350`,
  `i400`,
  `i450`,
  `i500`,
  `i550`,
  `i600`,
  `i650`,
  `i700`,
  `i750`,
  `i800`,
  `i850`,
  `i900`,
  `i950`,
  `i1000`,
];
type ContrastTintValues =
  | `i0`
  | `i50`
  | `i100`
  | `i150`
  | `i200`
  | `i250`
  | `i300`
  | `i350`
  | `i400`
  | `i450`
  | `i500`
  | `i550`
  | `i600`
  | `i650`
  | `i700`
  | `i750`
  | `i800`
  | `i850`
  | `i900`
  | `i950`
  | `i1000`;

/** Array of accepted size values */
const sizeValues = [`min`, `xs`, `sm`, `md`, `lg`, `xl`, `max`];
type SizeValues = `min` | `xs` | `sm` | `md` | `lg` | `xl` | `max`;

/** Array of accepted extended size values */
const sizeValuesExtended = [`4xs`, `3xs`, `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`];
type SizeValuesExtended = `4xs` | `3xs` | `2xs` | `xs` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl` | `4xl`;

/** Array of accepted main color tint values */
const tintValues = [
  `0`,
  `50`,
  `100`,
  `150`,
  `200`,
  `250`,
  `300`,
  `350`,
  `400`,
  `450`,
  `500`,
  `550`,
  `600`,
  `650`,
  `700`,
  `750`,
  `800`,
  `850`,
  `900`,
  `950`,
  `1000`,
  0,
  50,
  100,
  150,
  200,
  250,
  300,
  350,
  400,
  450,
  500,
  550,
  600,
  650,
  700,
  750,
  800,
  850,
  900,
  950,
  1000,
];
type TintValues =
  | `0`
  | `50`
  | `100`
  | `150`
  | `200`
  | `250`
  | `300`
  | `350`
  | `400`
  | `450`
  | `500`
  | `550`
  | `600`
  | `650`
  | `700`
  | `750`
  | `800`
  | `850`
  | `900`
  | `950`
  | `1000`
  | 0
  | 50
  | 100
  | 150
  | 200
  | 250
  | 300
  | 350
  | 400
  | 450
  | 500
  | 550
  | 600
  | 650
  | 700
  | 750
  | 800
  | 850
  | 900
  | 950
  | 1000;

// EXPORT -------------------------------------------------- //

export {
  alphaTintValues,
  boolValues,
  buttonVariantValues,
  colorValues,
  contrastTintValues,
  sizeValues,
  sizeValuesExtended,
  tintValues,
  AlphaTintValues,
  BoolValues,
  ButtonVariantValues,
  ColorValues,
  ContrastTintValues,
  SizeValues,
  SizeValuesExtended,
  TintValues,
};
