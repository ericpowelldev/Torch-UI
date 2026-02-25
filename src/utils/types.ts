// THEME TYPES ---------------------------------------------------------------- //

/** Extended theme type */
export type Theme = any;

/** Simple theme type */
export type SimpleTheme = any;

// GENERAL TYPES ---------------------------------------------------------------- //

/** Array of accepted bools */
export const boolValues = [false, null, undefined, NaN, 0, -0, ``, true, 1] as const;
export type BoolValues = (typeof boolValues)[number];

/** Array of accepted breakpoints */
export const breakpointValues = [`min`, `xs`, `sm`, `md`, `lg`, `xl`, `max`] as const;
export type BreakpointValues = (typeof breakpointValues)[number];

/** Array of accepted elevations */
export const elevationValues = [0, 1, 2, 3, 4, 5] as const;
export type ElevationValues = (typeof elevationValues)[number];

/** Array of accepted percentile */
export const percentValues = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] as const;
export type PercentValues = (typeof percentValues)[number];

/** Array of accepted selectors */
export const selectorValues = [`base`, `hover`, `active`, `focus`] as const;
export type SelectorValues = (typeof selectorValues)[number];

/** Array of accepted sizes */
export const sizeValues = [`min`, `xs`, `sm`, `md`, `lg`, `xl`, `max`] as const;
export type SizeValues = (typeof sizeValues)[number];

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
] as const;
export type SizeValuesExtended = (typeof sizeValuesExtended)[number];

/** Array of accepted statuses */
export const statusValues = [`error`, `warning`, `success`, `info`] as const;
export type StatusValues = (typeof statusValues)[number];

/** Array of accepted variants */
export const variantValues = [`solid`, `soft`, `plain`, `outlined`, `glass`] as const;
export type VariantValues = (typeof variantValues)[number];

// BOX TYPES ---------------------------------------------------------------- //

/** Array of accepted box components */
export const boxComponentValues = [`div`, `span`] as const;
export type BoxComponentValues = (typeof boxComponentValues)[number];

// BUTTON TYPES ---------------------------------------------------------------- //

/** Array of accepted button variants */
export const buttonVariantValues = [`solid`, `soft`, `plain`, `outlined`, `glass`] as const;
export type ButtonVariantValues = (typeof buttonVariantValues)[number];

// CHECKBOX TYPES ---------------------------------------------------------------- //

/** Array of accepted checkbox components */
export const checkboxComponentValues = [`div`, `span`] as const;
export type CheckboxComponentValues = (typeof checkboxComponentValues)[number];

/** Array of accepted checkbox variants */
export const checkboxVariantValues = [`solid`, `soft`, `plain`, `outlined`, `glass`] as const;
export type CheckboxVariantValues = (typeof checkboxVariantValues)[number];

// COLOR TYPES ---------------------------------------------------------------- //

/** Array of accepted colors */
export const colorValues = [
  `primary`,
  `secondary`,
  `tertiary`,
  `utility`,
  `info`,
  `error`,
  `warning`,
  `success`,
  `grayscale`,
] as const;
export type ColorValues = (typeof colorValues)[number];

/** Array of accepted alternate colors */
export const alternateColorValues = [`fg`, `fgInverse`, `bg`, `bgInverse`] as const;
export type AlternateColorValues = (typeof alternateColorValues)[number];

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
] as const;
export type BGColorValues = (typeof bgColorValues)[number];

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
] as const;
export type FGColorValues = (typeof fgColorValues)[number];

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
] as const;
export type TintValues = (typeof tintValues)[number];

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
] as const;
export type InverseTintValues = (typeof inverseTintValues)[number];

/** Array of accepted color overrides */
export const colorOverrideValues = [`none`, `default`, `inverse`] as const;
export type ColorOverrideValues = (typeof colorOverrideValues)[number];

// CONTAINER TYPES ---------------------------------------------------------------- //

/** Array of accepted container components */
export const containerComponentValues = [`div`, `span`] as const;
export type ContainerComponentValues = (typeof containerComponentValues)[number];

// DIVIDER TYPES ---------------------------------------------------------------- //

/** Array of accepted divider components */
export const dividerComponentValues = [`div`, `span`] as const;
export type DividerComponentValues = (typeof dividerComponentValues)[number];

/** Array of accepted divider directions */
export const dividerDirectionValues = [`horizontal`, `vertical`] as const;
export type DividerDirectionValues = (typeof dividerDirectionValues)[number];

// FLEX TYPES ---------------------------------------------------------------- //

/** Array of accepted flex components */
export const flexComponentValues = [`div`, `span`] as const;
export type FlexComponentValues = (typeof flexComponentValues)[number];

// INPUT TYPES ---------------------------------------------------------------- //

/** Array of accepted input components */
export const inputComponentValues = [`div`, `span`] as const;
export type InputComponentValues = (typeof inputComponentValues)[number];

/** Array of accepted input variants */
export const inputVariantValues = [`solid`, `soft`, `plain`, `outlined`, `glass`] as const;
export type InputVariantValues = (typeof inputVariantValues)[number];

// SORT TYPES ---------------------------------------------------------------- //

/** Array of accepted sort directions */
export const sortDirectionValues = [`asc`, `desc`] as const;
export type SortDirectionValues = (typeof sortDirectionValues)[number];

// SPACER TYPES ---------------------------------------------------------------- //

/** Array of accepted spacer components */
export const spacerComponentValues = [`div`, `span`] as const;
export type SpacerComponentValues = (typeof spacerComponentValues)[number];

/** Array of accepted spacer directions */
export const spacerDirectionValues = [`horizontal`, `vertical`] as const;
export type SpacerDirectionValues = (typeof spacerDirectionValues)[number];

// TABLE TYPES ---------------------------------------------------------------- //

/** Array of accepted table alignments */
export const tableAlignmentValues = [`left`, `center`, `right`, `justify`] as const;
export type TableAlignmentValues = (typeof tableAlignmentValues)[number];

/** Array of accepted table cell sort components */
export const tableCellSortComponentValues = [`div`, `span`] as const;
export type TableCellSortComponentValues = (typeof tableCellSortComponentValues)[number];

/** Array of accepted table section variants */
export const tableSectionVariantValues = [`header`, `body`, `footer`] as const;
export type TableSectionVariantValues = (typeof tableSectionVariantValues)[number];

/** Array of accepted table components */
export const tableWrapperComponentValues = [`div`, `span`] as const;
export type TableWrapperComponentValues = (typeof tableWrapperComponentValues)[number];

// TEXT TYPES ---------------------------------------------------------------- //

/** Array of accepted text alignments */
export const textAlignValues = [`left`, `center`, `right`, `justify`] as const;
export type TextAlignValues = (typeof textAlignValues)[number];

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
] as const;
export type TextComponentValues = (typeof textComponentValues)[number];

/** Array of accepted text variants */
export const textVariantValues = [
  `h1`,
  `h2`,
  `h3`,
  `h4`,
  `h5`,
  `h6`,
  `p1`,
  `p2`,
  `p3`,
  `p4`,
] as const;
export type TextVariantValues = (typeof textVariantValues)[number];

// TOGGLE TYPES ---------------------------------------------------------------- //

/** Array of accepted toggle components */
export const toggleComponentValues = [`div`, `span`] as const;
export type ToggleComponentValues = (typeof toggleComponentValues)[number];

/** Array of accepted toggle variants */
export const toggleVariantValues = [`solid`, `soft`, `plain`, `outlined`, `glass`] as const;
export type ToggleVariantValues = (typeof toggleVariantValues)[number];

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
] as const;
export type TooltipPlacementValues = (typeof tooltipPlacementValues)[number];
