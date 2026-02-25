// DEPENDENCIES ---------------------------------------------------------------- //

import { lightenColor, darkenColor } from "./themeUtils";

// THEME ---------------------------------------------------------------- //

const baseTheme = {
  // Theme Mode Options
  mode: `light`,

  // Color Options
  color: {
    // Brand colors
    primary: `#6068f8`,
    secondary: `#f85090`,
    tertiary: `#50c890`,

    // Utility colors
    utility: `#687890`,
    error: `#dc0818`,
    warning: `#e89808`,
    success: `#20a008`,
    info: `#3080e0`,

    // General colors
    grayscale: `#687890`,

    // Foreground/Text colors
    fg: `#242c40`,

    // Background/Wall colors
    bg: `#ffffff`,

    // Black and White colors
    black: `#000000`,
    white: `#ffffff`,
  },

  // Text Options
  text: {
    // Font families
    family: `"Inter Tight", "Roboto", "Helvetica", "Arial", sans-serif`,

    // Font sizes
    size: `16px`,

    // Font weights
    weight: 400,
    weightThin: 200,
    weightLight: 300,
    weightRegular: 400,
    weightMedium: 500,
    weightBold: 700,
    weightBlack: 900,

    // Font heights
    height: 1.333,

    // Header text
    h1: {
      size: `64px`,
      weight: 900,
      height: 1.333,
    },
    h2: {
      size: `48px`,
      weight: 700,
      height: 1.333,
    },
    h3: {
      size: `32px`,
      weight: 700,
      height: 1.333,
    },
    h4: {
      size: `24px`,
      weight: 500,
      height: 1.333,
    },
    h5: {
      size: `21px`,
      weight: 500,
      height: 1.333,
    },
    h6: {
      size: `18px`,
      weight: 500,
      height: 1.333,
    },

    // Paragraph text
    p1: {
      size: `16px`,
      weight: 400,
      height: 1.333,
    },
    p2: {
      size: `14px`,
      weight: 400,
      height: 1.333,
    },
    p3: {
      size: `12px`,
      weight: 400,
      height: 1.333,
    },
    p4: {
      size: `10px`,
      weight: 400,
      height: 1.333,
    },

    // Special text
    button: {
      size: `14px`,
      weight: 600,
      height: 1,
    },
    input: {
      size: `16px`,
      weight: 400,
      height: `20px`,
    },
    divider: {
      size: `16px`,
      weight: 600,
      height: 1.333,
    },
    label: {
      size: `12px`,
      weight: 500,
      height: 1,
    },
    sublabel: {
      size: `10px`,
      weight: 400,
      height: 1,
    },
    placeholder: {
      size: `16px`,
      weight: 400,
      height: 1,
    },
    tableBodyCell: {
      size: `14px`,
      weight: 400,
      height: 1.333,
    },
    tableFooterCell: {
      size: `16px`,
      weight: 400,
      height: 1.333,
    },
    tableHeaderCell: {
      size: `12px`,
      weight: 600,
      height: 1.333,
    },
    tooltip: {
      size: `12px`,
      weight: 400,
      height: 1.333,
    },
  },

  // Pixel Spacing Options
  space: (num1: number = 2, num2?: number, num3?: number, num4?: number) => {
    const pix = (num: number) => `${4 * num}px`;

    let pixSpace = [];
    if ((num1 || num1 === 0) && typeof num1 === `number`) pixSpace.push(pix(num1));
    if ((num2 || num2 === 0) && typeof num2 === `number`) pixSpace.push(pix(num2));
    if ((num3 || num3 === 0) && typeof num3 === `number`) pixSpace.push(pix(num3));
    if ((num4 || num4 === 0) && typeof num4 === `number`) pixSpace.push(pix(num4));
    return pixSpace.join(` `);
  },

  // Padding Options
  padding: {
    none: 0,

    input: `6px 8px`,
    tooltip: `4px 8px`,
  },

  // Radius Options
  radius: {
    none: 0,

    button: `6px`,
    card: `10px`,
    checkbox: `4px`,
    input: `6px`,
    rounded: `10000px`,
    table: `10px`,
    tooltip: `6px`,
  },

  // Transition Options
  transition: {
    none: `none`,
    standard: `all 0.15s ease-in-out`,

    button: `all 0.15s ease-in-out`,
    checkbox: `outline-color 0.15s ease-in-out, background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out`,
    input: `all 0.15s ease-in-out, outline-color 0.0s, outline-offset 0.0s, outline-width 0.0s`,
    table: `all 0.15s ease-in-out`,
  },

  // Elevation Options
  elevation: {
    0: `none`,
    1: `0px 2px 4px #00000030, 0px 1px 2px #00000018`,
    2: `1px 4px 8px #00000034, -1px 2px 4px #0000001a`,
    3: `2px 6px 12px #00000038, -2px 3px 6px #0000001c`,
    4: `3px 8px 16px #0000003c, -3px 4px 8px #0000001e`,
    5: `4px 10px 20px #00000040, -4px 5px 10px #00000020`,
  },

  // Shadow Options
  shadow: {
    none: `none`,
    soft: `0 0 12px #00000016`,
    medium: `0 0 12px #00000024`,
    harsh: `0 0 12px #00000048`,

    text: `1px 1px 2px #00000040`,
    toggleSlide: `1px 1px 2px #00000040`,
    toggleTrack: `1px 1px 2px #00000040`,
    tooltip: `1px 1px 2px #00000060`,
  },

  // Blur Options
  blur: {
    none: `none`,
    soft: `blur(3px)`,
    medium: `blur(6px)`,
    harsh: `blur(9px)`,
  },

  // Z-Index Options
  zIndex: {
    base: `0`,
    footer: `1000`,
    header: `1100`,
    menu: `1200`,
    dropdown: `1300`,
    modal: `2000`,
    modalDropdown: `2100`,
    tooltip: `3000`,
    notification: `5000`,
  },

  // Breakpoint Options
  break: {
    min: `0px`,
    xs: `480px`,
    sm: `640px`,
    md: `960px`,
    lg: `1280px`,
    xl: `1600px`,
    max: `1920px`,
  },

  // Breakpoint Query Options
  query: {
    only: (breakpoint: string) =>
      `@media (min-width: ${breakpoint}) and (max-width: ${breakpoint})`,
    up: (minBreakpoint: string) => `@media (min-width: ${minBreakpoint})`,
    down: (maxBreakpoint: string) => `@media (max-width: ${maxBreakpoint})`,
    between: (minBreakpoint: string, maxBreakpoint: string) =>
      `@media (min-width: ${minBreakpoint}) and (max-width: ${maxBreakpoint})`,
  },

  // Container Max-Width Options
  container: {
    min: `100%`,
    xs: `480px`,
    sm: `640px`,
    md: `960px`,
    lg: `1280px`,
    xl: `1600px`,
    max: `100%`,
  },

  // Visualize Options
  visualize: `repeating-linear-gradient(135deg, #00000010, #00000010 8px, #00000008 8px, #00000008 16px)`,
};

const customTheme = {
  // Custom Theme Overrides
  custom: {
    dark: {
      mode: `dark`,
      color: {
        // Brand colors
        primary: lightenColor(baseTheme?.color?.primary, 0.1),
        secondary: lightenColor(baseTheme?.color?.secondary, 0.1),
        tertiary: lightenColor(baseTheme?.color?.tertiary, 0.1),

        // Utility colors
        utility: lightenColor(baseTheme?.color?.utility, 0.1),
        error: lightenColor(baseTheme?.color?.error, 0.1),
        warning: lightenColor(baseTheme?.color?.warning, 0.1),
        success: lightenColor(baseTheme?.color?.success, 0.1),
        info: lightenColor(baseTheme?.color?.info, 0.1),

        // General colors
        grayscale: lightenColor(baseTheme?.color?.grayscale, 0.1),

        // Foreground/Text colors
        fg: baseTheme?.color?.bg,

        // Background/Wall colors
        bg: baseTheme?.color?.fg,
      },
      visualize: `repeating-linear-gradient(135deg, #ffffff10, #ffffff10 8px, #ffffff08 8px, #ffffff08 16px)`,
    },
  },
};

const theme = {
  ...baseTheme,
  ...customTheme,
};

// EXPORT ---------------------------------------------------------------- //

export default theme;
