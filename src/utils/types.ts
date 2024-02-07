// GENERAL TYPES ---------------------------------------------------------------- //

/** Array of accepted bool values */
export const boolValues = [false, null, undefined, NaN, 0, -0, ``, true, 1];
export type BoolValues = false | null | undefined | typeof NaN | 0 | -0 | `` | true | 1;

/** Array of accepted selector values */
export const selectorValues = [`base`, `hover`, `active`, `focus`];
export type SelectorValues = `base` | `hover` | `active` | `focus`;

/** Array of accepted size values */
export const sizeValues = [`min`, `xs`, `sm`, `md`, `lg`, `xl`, `max`];
export type SizeValues = `min` | `xs` | `sm` | `md` | `lg` | `xl` | `max`;

/** Array of accepted extended size values */
export const sizeValuesExtended = [`4xs`, `3xs`, `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`];
export type SizeValuesExtended = `4xs` | `3xs` | `2xs` | `xs` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl` | `4xl`;

// BUTTON TYPES ---------------------------------------------------------------- //

/** Array of accepted button variants */
export const buttonVariantValues = [`solid`, `transparent`, `simple`, `outline`];
export type ButtonVariantValues = `solid` | `transparent` | `simple` | `outline`;

// COLOR TYPES ---------------------------------------------------------------- //

/** Array of accepted color values */
export const colorValues = [`primary`, `secondary`, `tertiary`, `utility`, `info`, `error`, `warning`, `success`, `grayscale`];
export type ColorValues =
  | `primary`
  | `secondary`
  | `tertiary`
  | `utility`
  | `info`
  | `error`
  | `warning`
  | `success`
  | `grayscale`;

/** Array of accepted background color values */
export const bgColorValues = [`bg1`, `bg2`, `bg3`, `bg4`, `bgi1`, `bgi2`, `bgi3`, `bgi4`];
export type BGColorValues = `bg1` | `bg2` | `bg3` | `bg4` | `bgi1` | `bgi2` | `bgi3` | `bgi4`;

/** Array of accepted foreground color values */
export const fgColorValues = [`fg1`, `fg2`, `fg3`, `fg4`, `fgi1`, `fgi2`, `fgi3`, `fgi4`];
export type FGColorValues = `fg1` | `fg2` | `fg3` | `fg4` | `fgi1` | `fgi2` | `fgi3` | `fgi4`;

/** Array of accepted main color tint values */
export const tintValues = [
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
export type TintValues =
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

/** Array of accepted inverse color tint values */
export const inverseTintValues = [
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
export type InverseTintValues =
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

/** Array of accepted alpha color tint values */
export const alphaTintValues = [
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
export type AlphaTintValues =
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

// CONTAINER TYPES ---------------------------------------------------------------- //

/** Array of accepted container component values */
export const containerComponentValues = [`div`, `span`];
export type ContainerComponentValues = `div` | `span`;

// INPUT TYPES ---------------------------------------------------------------- //

export const inputVariantValues = [`standard`, `transparent`, `outline`];
export type InputVariantValues = `standard` | `transparent` | `outline`;

// SPACER TYPES ---------------------------------------------------------------- //

/** Array of accepted spacer component values */
export const spacerComponentValues = [`div`, `span`];
export type SpacerComponentValues = `div` | `span`;

/** Array of accepted spacer direction values */
export const spacerDirectionValues = [`horizontal`, `vertical`];
export type SpacerDirectionValues = `horizontal` | `vertical`;

// TEXT TYPES ---------------------------------------------------------------- //

/** Array of accepted text variants */
export const textAlignValues = [`left`, `center`, `right`, `justify`];
export type TextAlignValues = `left` | `center` | `right` | `justify`;

/** Array of accepted text variants */
export const textComponentValues = [`div`, `span`];
export type TextComponentValues = `div` | `span`;

/** Array of accepted text variants */
export const textVariantValues = [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p1`, `p2`, `p3`, `p4`, `p5`, `p6`];
export type TextVariantValues = `h1` | `h2` | `h3` | `h4` | `h5` | `h6` | `p1` | `p2` | `p3` | `p4` | `p5` | `p6`;

// TOGGLE TYPES ---------------------------------------------------------------- //

/** Array of accepted toggle variants */
export const toggleVariantValues = [`solid`, `transparent`, `outline`];
export type ToggleVariantValues = `solid` | `transparent` | `outline`;
