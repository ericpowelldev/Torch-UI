import Color from "color";

const defaultTheme = {
  // Colors
  color: {
    // Brand colors
    primary: `#f42460`,
    secondary: `#20c0f0`,
    tertiary: `#20c8a0`,

    // Utility colors
    utility: `#303640`,
    info: `#2496f4`,
    error: `#ff0000`,
    warning: `#ffb400`,
    success: `#20d840`,

    // Black & White colors
    black: `#000000`,
    white: `#ffffff`,

    // Foreground/Text colors
    fg: [
      `#ffffff`,
      `#ffffff96`,
      `#ffffff72`,
      `#ffffff50`,
    ],
    fgContrast: [
      `#303640`,
      `#30364096`,
      `#30364072`,
      `#30364050`,
    ],
    fgDisabled: `#5a6270`,
    fgDisabledContrast: `#97a0af`,
    
    // Background/Wall colors
    bg: [
      `#101216`,
      `#181b20`,
      `#202428`,
      `#282d32`,
    ],
    bgContrast: [
      `#ffffff`,
      `#fafafa`,
      `#f5f5f5`,
      `#f0f0f0`,
    ],
    bgDisabled: `#404650`,
    bgDisabledContrast: `#d4d8de`,

    // Divider colors
    divider: [
      `#ffffff24`,
      `#ffffff2e`,
      `#ffffff18`,
      `#ffffff12`,
    ],
    dividerContrast: [
      `#30364024`,
      `#3036402e`,
      `#30364018`,
      `#30364012`,
    ],
  },

  // Text Options
  txt: {
    // Font families
    fontFamily: `"Saira Semi Condensed", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontFamilyButton: `"Saira Semi Condensed", "Roboto", "Helvetica", "Arial", sans-serif`,

    // Font sizes
    fontSize: 16,
    fontSizeButton: 14,

    // Font weights
    fontWeight: 300,
    fontWeightButton: 600,
    fontWeightThin: 100,
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightBlack: 900,

    // Font heights
    fontHeight: 1.333,
    fontHeightButton: 1.25,

    // Header text
    h1: {
      size: 64,
      weight: 900,
      height: 1.333,
    },
    h2: {
      size: 48,
      weight: 700,
      height: 1.333,
    },
    h3: {
      size: 32,
      weight: 700,
      height: 1.333,
    },
    h4: {
      size: 24,
      weight: 500,
      height: 1.333,
    },
    h5: {
      size: 21,
      weight: 500,
      height: 1.333,
    },
    h6: {
      size: 18,
      weight: 500,
      height: 1.333,
    },

    // Paragraph text
    p1: {
      size: 16,
      weight: 300,
      height: 1.333,
    },
    p2: {
      size: 14,
      weight: 300,
      height: 1.333,
    },
    p3: {
      size: 12,
      weight: 300,
      height: 1.333,
    },
    p4: {
      size: 10,
      weight: 300,
      height: 1.333,
    },
    p5: {
      size: 9,
      weight: 300,
      height: 1.333,
    },
    p6: {
      size: 8,
      weight: 300,
      height: 1.333,
    },
  },

  // Pixel Spacing
  space: (num1 = 2, num2 = null, num3 = null, num4 = null) => {
    const pix = (num: number) => `${4 * num}px`;

    let pixSpace = [];
    if (num1 && typeof num1 === `number`) pixSpace.push(pix(num1));
    if (num2 && typeof num2 === `number`) pixSpace.push(pix(num2));
    if (num3 && typeof num3 === `number`) pixSpace.push(pix(num3));
    if (num4 && typeof num4 === `number`) pixSpace.push(pix(num4));
    return pixSpace.join(` `);
  },

  // Transition Options
  trans: (sec = 0.2) => `all ${sec}s ease-in-out`,

  // Shadow Options
  shadow: {
    none: `none`,
    soft: `0 0 12px #00000016`,
    medium: `0 0 12px #00000024`,
    harsh: `0 0 12px #00000040`,
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
    xs: {
      up: `481px`,
      down: `480px`,
    },
    sm: {
      up: `769px`,
      down: `768px`,
    },
    md: {
      up: `1025px`,
      down: `1024px`,
    },
    lg: {
      up: `1281px`,
      down: `1280px`,
    },
    xl: {
      up: `1601px`,
      down: `1600px`,
    },
    max: `1920px`,
  },

  // Container Max-Width Options
  container: {
    min: `100%`,
    xs: `420px`,
    sm: `680px`,
    md: `960px`,
    lg: `1200px`,
    xl: `1400px`,
    max: `100%`,
  },
};

const buildAlphaColors = (color: string) => {
  const alphas = [`00`, `10`, `20`, `30`, `40`, `50`, `60`, `70`, `80`, `90`, `A0`, `B0`, `C0`, `D0`, `E0`, `F0`];
  const alpha = alphas.map((alpha) => `${Color(color).hex()}${alpha}`);
  return alpha;
};

const buildColors = (color: string) => {
  const main = {
    [`100`]: Color(color).darken(0.6).hex(),
    [`200`]: Color(color).darken(0.45).hex(),
    [`300`]: Color(color).darken(0.3).hex(),
    [`400`]: Color(color).darken(0.15).hex(),
    [`500`]: Color(color).hex(),
    [`600`]: Color(color).lighten(0.15).hex(),
    [`700`]: Color(color).lighten(0.3).hex(),
    [`800`]: Color(color).lighten(0.45).hex(),
    [`900`]: Color(color).lighten(0.6).hex(),
  };
  const contrast = {
    [`100`]: main[`500`],
    [`200`]: main[`700`],
    [`300`]: main[`800`],
    [`400`]: main[`900`],
    [`500`]: Color(defaultTheme.color.fg[0]).hex(),
    [`600`]: main[`200`],
    [`700`]: main[`300`],
    [`800`]: main[`400`],
    [`900`]: main[`500`],
  };
  const alpha = buildAlphaColors(Color(color).hex());
  return { main, contrast, alpha };
};

const theme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
    primary: {
      ...buildColors(defaultTheme.color.primary),
    },
    secondary: {
      ...buildColors(defaultTheme.color.secondary),
    },
    tertiary: {
      ...buildColors(defaultTheme.color.tertiary),
    },
    utility: {
      ...buildColors(defaultTheme.color.utility),
    },
    info: {
      ...buildColors(defaultTheme.color.info),
    },
    error: {
      ...buildColors(defaultTheme.color.error),
    },
    warning: {
      ...buildColors(defaultTheme.color.warning),
    },
    success: {
      ...buildColors(defaultTheme.color.success),
    },
    black: {
      main: defaultTheme.color.black,
      alpha: buildAlphaColors(defaultTheme.color.black),
    },
    white: {
      main: defaultTheme.color.white,
      alpha: buildAlphaColors(defaultTheme.color.white),
    },
  },
};

console.log(`Theme:`, theme);

export default theme;
