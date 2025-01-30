// THEME ---------------------------------------------------------------- //

const theme = {
  // Theme Mode Options
  mode: `light`,

  // Color Options
  color: {
    // Brand colors
    primary: `#6068f8`,
    secondary: `#f85090`,

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
      weight: 600,
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
  },

  // Radius Options
  radius: {
    none: 0,
    button: `6px`,
    card: `10px`,
    input: `6px`,
    checkbox: `4px`,
    pill: `10000px`,
  },

  // Transition Options
  transition: {
    none: `none`,
    standard: `all 0.15s ease-in-out`,
    button: `all 0.15s ease-in-out`,
    input: `all 0.15s ease-in-out`,
    inputWithOutline: `all 0.15s ease-in-out, outline-color 0.0s, outline-offset 0.0s, outline-width 0.0s`,
    checkbox: `outline-color 0.15s ease-in-out, background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out`,
  },

  // Shadow Options
  shadow: {
    none: `none`,
    soft: `0 0 12px #00000016`,
    medium: `0 0 12px #00000024`,
    harsh: `0 0 12px #00000048`,

    button: `0px 4px 12px #00000048`,
    text: `1px 1px 2px #00000048`,
    toggleTrack: `1px 1px 2px #00000048`,
    toggleSlide: `1px 1px 2px #00000048`,
  },

  // Blur Options
  blur: {
    none: `none`,
    soft: `blur(3px)`,
    medium: `blur(6px)`,
    harsh: `blue(9px)`,
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

  // Custom theme overrides
  custom: {
    dark: {
      mode: `dark`,
      color: {
        fg: `#ffffff`,
        bg: `#242c40`,
      },
      visualize: `repeating-linear-gradient(135deg, #ffffff10, #ffffff10 8px, #ffffff08 8px, #ffffff08 16px)`,
    },
  },
};

// EXPORT ---------------------------------------------------------------- //

export default theme;
