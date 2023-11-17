// DEPENDENCIES -------------------------------------------------- //

import Color from "color";

// THEME -------------------------------------------------- //

const defaultTheme = {
  // Colors
  color: {
    // Brand colors
    primary: `#f42460`,
    secondary: `#10c0f0`,
    tertiary: `#40c8a0`,

    // Utility colors
    utility: `#303640`,
    info: `#2496f4`,
    error: `#ff0000`,
    warning: `#ffb400`,
    success: `#20d840`,

    // Grayscale colors
    grayscale: `#808890`,

    // Foreground/Text colors
    fg: `#ffffff`,
    fgContrast: `#303640`,

    // Background/Wall colors
    bg: [`#101216`, `#181b20`, `#202428`, `#282d32`],
    bgContrast: [`#ffffff`, `#fafafa`, `#f5f5f5`, `#f0f0f0`],
  },

  // Text Options
  text: {
    // Font families
    family: `"Saira Semi Condensed", "Roboto", "Helvetica", "Arial", sans-serif`,
    familyButton: `"Saira Semi Condensed", "Roboto", "Helvetica", "Arial", sans-serif`,

    // Font sizes
    size: 16,
    sizeButton: 14,

    // Font weights
    weight: 300,
    weightButton: 600,
    weightThin: 100,
    weightLight: 200,
    weightRegular: 300,
    weightMedium: 500,
    weightBold: 700,
    weightBlack: 900,

    // Font heights
    height: 1.333,
    heightButton: 1.25,

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

  // Radius Options
  radius: {
    button: 4,
    card: 8,
  },

  // Transition Options
  transition: {
    button: `all 0.15s ease-in-out`,
    none: `none`,
  },

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

// HELPERS -------------------------------------------------- //

const buildForegroundColors = (color) => {
  const alphas = [`ff`, `96`, `72`, `48`];
  const foregroundColors = alphas.map((alpha) => `${Color(color).hex()}${alpha}`);
  return foregroundColors;
};

const buildFgDisabledColor = (color) => {
  return Color(color).lightness(60).hex();
};
const buildFgDisabledContrastColor = (color) => {
  return Color(color).lightness(30).hex();
};

const buildBgDisabledColor = (color) => {
  return Color(color).lightness(30).hex();
};
const buildBgDisabledContrastColor = (color) => {
  return Color(color).lightness(60).hex();
};

const buildColors = (color) => {
  // Normalize the main color
  const normalizedColor = Color(color).lightness(50).hex();

  // Generate the main hexes
  const main = {
    [`0`]: Color(normalizedColor).lightness(100).hex(),
    [`50`]: Color(normalizedColor).lightness(95).hex(),
    [`100`]: Color(normalizedColor).lightness(90).hex(),
    [`200`]: Color(normalizedColor).lightness(80).hex(),
    [`300`]: Color(normalizedColor).lightness(70).hex(),
    [`400`]: Color(normalizedColor).lightness(60).hex(),
    [`500`]: normalizedColor,
    [`600`]: Color(normalizedColor).lightness(40).hex(),
    [`700`]: Color(normalizedColor).lightness(30).hex(),
    [`800`]: Color(normalizedColor).lightness(20).hex(),
    [`900`]: Color(normalizedColor).lightness(10).hex(),
    [`950`]: Color(normalizedColor).lightness(5).hex(),
    [`1000`]: Color(normalizedColor).lightness(0).hex(),
  };

  // Generate the contrasted hexes
  const contrast = {
    [`c0`]: `#000000`,
    [`c50`]: main[`500`],
    [`c100`]: main[`500`],
    [`c200`]: main[`600`],
    [`c300`]: main[`600`],
    [`c400`]: main[`700`],
    [`c500`]: `#ffffff`,
    [`c600`]: main[`50`],
    [`c700`]: main[`100`],
    [`c800`]: main[`200`],
    [`c900`]: main[`300`],
    [`c950`]: main[`400`],
    [`c1000`]: `#ffffff`,
  };

  // Generate the alpha hexes
  const alpha = {
    [`a0`]: Color(normalizedColor).fade(1).hexa(),
    [`a50`]: Color(normalizedColor).fade(0.95).hexa(),
    [`a100`]: Color(normalizedColor).fade(0.9).hexa(),
    [`a200`]: Color(normalizedColor).fade(0.8).hexa(),
    [`a300`]: Color(normalizedColor).fade(0.7).hexa(),
    [`a400`]: Color(normalizedColor).fade(0.6).hexa(),
    [`a500`]: Color(normalizedColor).fade(0.5).hexa(),
    [`a600`]: Color(normalizedColor).fade(0.4).hexa(),
    [`a700`]: Color(normalizedColor).fade(0.3).hexa(),
    [`a800`]: Color(normalizedColor).fade(0.2).hexa(),
    [`a900`]: Color(normalizedColor).fade(0.1).hexa(),
    [`a950`]: Color(normalizedColor).fade(0.05).hexa(),
    [`a1000`]: normalizedColor,
  };

  // Return all the hexes
  return { ...main, ...contrast, ...alpha };
};

// ORCHESTRATION -------------------------------------------------- //

const extendTheme = (theme) => {
  // Create a copy of the theme object to edit
  let themeEdit = {
    ...theme,

    color: {
      ...theme.color,

      primary: {
        ...buildColors(theme.color.primary),
      },
      secondary: {
        ...buildColors(theme.color.secondary),
      },
      tertiary: {
        ...buildColors(theme.color.tertiary),
      },

      utility: {
        ...buildColors(theme.color.utility),
      },
      info: {
        ...buildColors(theme.color.info),
      },
      error: {
        ...buildColors(theme.color.error),
      },
      warning: {
        ...buildColors(theme.color.warning),
      },
      success: {
        ...buildColors(theme.color.success),
      },

      grayscale: {
        ...buildColors(theme.color.grayscale),
      },

      fg: buildForegroundColors(theme.color.fg),
      fgContrast: buildForegroundColors(theme.color.fgContrast),

      fgDisabled: buildFgDisabledColor(theme.color.grayscale),
      fgDisabledContrast: buildFgDisabledContrastColor(theme.color.grayscale),

      bgDisabled: buildBgDisabledColor(theme.color.grayscale),
      bgDisabledContrast: buildBgDisabledContrastColor(theme.color.grayscale),
    },
  };

  // Return the edited theme object
  return themeEdit;
};

// EXPORT -------------------------------------------------- //

const theme = extendTheme(defaultTheme);
console.log(`Theme:`, theme);
export default theme;
