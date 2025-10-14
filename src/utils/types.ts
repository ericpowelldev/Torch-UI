// THEME TYPES ---------------------------------------------------------------- //

/** Extended theme type */
export type Theme = any;

/** Simple theme type */
export type SimpleTheme = any;

// GENERAL TYPES ---------------------------------------------------------------- //

/** Array of accepted bools */
export const boolValues = [false, null, undefined, NaN, 0, -0, ``, true, 1];
export type BoolValues = false | null | undefined | typeof NaN | 0 | -0 | `` | true | 1;

/** Array of accepted breakpoints */
export const breakpointValues = [`min`, `xs`, `sm`, `md`, `lg`, `xl`, `max`];
export type BreakpointValues = `min` | `xs` | `sm` | `md` | `lg` | `xl` | `max`;

/** Array of accepted percentile */
export const percentValues = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
export type PercentValues = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

/** Array of accepted selectors */
export const selectorValues = [`base`, `hover`, `active`, `focus`];
export type SelectorValues = `base` | `hover` | `active` | `focus`;

/** Array of accepted sizes */
export const sizeValues = [`min`, `xs`, `sm`, `md`, `lg`, `xl`, `max`];
export type SizeValues = `min` | `xs` | `sm` | `md` | `lg` | `xl` | `max`;

/** Array of accepted extended sizes */
export const sizeValuesExtended = [
  `4xs`,
  `3xs`,
  `2xs`,
  `xs`,
  `sm`,
  `md`,
  `lg`,
  `xl`,
  `2xl`,
  `3xl`,
  `4xl`,
];
export type SizeValuesExtended =
  | `4xs`
  | `3xs`
  | `2xs`
  | `xs`
  | `sm`
  | `md`
  | `lg`
  | `xl`
  | `2xl`
  | `3xl`
  | `4xl`;

/** Array of accepted statuses */
export const statusValues = [`error`, `warning`, `success`, `info`];
export type StatusValues = `error` | `warning` | `success` | `info`;

/** Array of accepted variants */
export const variantValues = [`solid`, `soft`, `plain`, `outlined`];
export type VariantValues = `solid` | `soft` | `plain` | `outlined`;

// BOX TYPES ---------------------------------------------------------------- //

/** Array of accepted box components */
export const boxComponentValues = [`div`, `span`];
export type BoxComponentValues = `div` | `span`;

// BUTTON TYPES ---------------------------------------------------------------- //

/** Array of accepted button variants */
export const buttonVariantValues = [`solid`, `soft`, `plain`, `outlined`];
export type ButtonVariantValues = `solid` | `soft` | `plain` | `outlined`;

// CHECKBOX TYPES ---------------------------------------------------------------- //

/** Array of accepted checkbox components */
export const checkboxComponentValues = [`div`, `span`];
export type CheckboxComponentValues = `div` | `span`;

/** Array of accepted checkbox variants */
export const checkboxVariantValues = [`solid`, `soft`, `plain`, `outlined`];
export type CheckboxVariantValues = `solid` | `soft` | `plain` | `outlined`;

// COLOR TYPES ---------------------------------------------------------------- //

/** Array of accepted colors */
export const colorValues = [
  `primary`,
  `secondary`,
  `utility`,
  `info`,
  `error`,
  `warning`,
  `success`,
  `grayscale`,
];
export type ColorValues =
  | `primary`
  | `secondary`
  | `utility`
  | `info`
  | `error`
  | `warning`
  | `success`
  | `grayscale`;

/** Array of accepted background colors */
export const bgColorValues = [
  `bg1`,
  `bg2`,
  `bg3`,
  `bg4`,
  `bgInverse1`,
  `bgInverse2`,
  `bgInverse3`,
  `bgInverse4`,
];
export type BGColorValues =
  | `bg1`
  | `bg2`
  | `bg3`
  | `bg4`
  | `bgInverse1`
  | `bgInverse2`
  | `bgInverse3`
  | `bgInverse4`;

/** Array of accepted foreground colors */
export const fgColorValues = [
  `fg1`,
  `fg2`,
  `fg3`,
  `fg4`,
  `fgInverse1`,
  `fgInverse2`,
  `fgInverse3`,
  `fgInverse4`,
];
export type FGColorValues =
  | `fg1`
  | `fg2`
  | `fg3`
  | `fg4`
  | `fgInverse1`
  | `fgInverse2`
  | `fgInverse3`
  | `fgInverse4`;

/** Array of accepted main color tints */
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

/** Array of accepted inverse color tints */
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

/** Array of accepted alpha color tints */
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

/** Array of accepted container components */
export const containerComponentValues = [`div`, `span`];
export type ContainerComponentValues = `div` | `span`;

// DIVIDER TYPES ---------------------------------------------------------------- //

/** Array of accepted divider components */
export const dividerComponentValues = [`div`, `span`];
export type DividerComponentValues = `div` | `span`;

/** Array of accepted divider directions */
export const dividerDirectionValues = [`horizontal`, `vertical`];
export type DividerDirectionValues = `horizontal` | `vertical`;

// FLEX TYPES ---------------------------------------------------------------- //

/** Array of accepted flex components */
export const flexComponentValues = [`div`, `span`];
export type FlexComponentValues = `div` | `span`;

// INPUT TYPES ---------------------------------------------------------------- //

/** Array of accepted input components */
export const inputComponentValues = [`div`, `span`];
export type InputComponentValues = `div` | `span`;

/** Array of accepted input variants */
export const inputVariantValues = [`solid`, `soft`, `plain`, `outlined`];
export type InputVariantValues = `solid` | `soft` | `plain` | `outlined`;

// SORT TYPES ---------------------------------------------------------------- //

/** Array of accepted sort directions */
export const sortDirectionValues = [`asc`, `desc`];
export type SortDirectionValues = `asc` | `desc`;

// SPACER TYPES ---------------------------------------------------------------- //

/** Array of accepted spacer components */
export const spacerComponentValues = [`div`, `span`];
export type SpacerComponentValues = `div` | `span`;

/** Array of accepted spacer directions */
export const spacerDirectionValues = [`horizontal`, `vertical`];
export type SpacerDirectionValues = `horizontal` | `vertical`;

// TABLE TYPES ---------------------------------------------------------------- //

/** Array of accepted table alignments */
export const tableAlignmentValues = [`left`, `center`, `right`, `justify`];
export type TableAlignmentValues = `left` | `center` | `right` | `justify`;

/** Array of accepted table cell sort components */
export const tableCellSortComponentValues = [`div`, `span`];
export type TableCellSortComponentValues = `div` | `span`;

/** Array of accepted table section variants */
export const tableSectionVariantValues = [`header`, `body`, `footer`];
export type TableSectionVariantValues = `header` | `body` | `footer`;

/** Array of accepted table components */
export const tableWrapperComponentValues = [`div`, `span`];
export type TableWrapperComponentValues = `div` | `span`;

// TEXT TYPES ---------------------------------------------------------------- //

/** Array of accepted text alignments */
export const textAlignValues = [`left`, `center`, `right`, `justify`];
export type TextAlignValues = `left` | `center` | `right` | `justify`;

/** Array of accepted text components */
export const textComponentValues = [
  `a`,
  `div`,
  `h1`,
  `h2`,
  `h3`,
  `h4`,
  `h5`,
  `h6`,
  `p`,
  `span`,
];
export type TextComponentValues =
  | `a`
  | `div`
  | `h1`
  | `h2`
  | `h3`
  | `h4`
  | `h5`
  | `h6`
  | `p`
  | `span`;

/** Array of accepted text variants */
export const textVariantValues = [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p1`, `p2`, `p3`, `p4`];
export type TextVariantValues =
  | `h1`
  | `h2`
  | `h3`
  | `h4`
  | `h5`
  | `h6`
  | `p1`
  | `p2`
  | `p3`
  | `p4`;

// TOGGLE TYPES ---------------------------------------------------------------- //

/** Array of accepted toggle components */
export const toggleComponentValues = [`div`, `span`];
export type ToggleComponentValues = `div` | `span`;

/** Array of accepted toggle variants */
export const toggleVariantValues = [`solid`, `soft`, `plain`, `outlined`];
export type ToggleVariantValues = `solid` | `soft` | `plain` | `outlined`;

// TOOLTIP TYPES ---------------------------------------------------------------- //

/** Array of accepted tooltip placements */
export const tooltipPlacementValues = [
  `top`,
  `top-start`,
  `top-end`,
  `bottom`,
  `bottom-start`,
  `bottom-end`,
  `left`,
  `left-start`,
  `left-end`,
  `right`,
  `right-start`,
  `right-end`,
];
export type TooltipPlacementValues =
  | `top`
  | `top-start`
  | `top-end`
  | `bottom`
  | `bottom-start`
  | `bottom-end`
  | `left`
  | `left-start`
  | `left-end`
  | `right`
  | `right-start`
  | `right-end`;
