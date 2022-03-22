import Color from "color";

const beforeTheme = {
  // Colors
  color: {
    // Default Colors
    default: `#303640`,

    // Design Colors
    primary: `#f42460`,
    secondary: `#20c0f0`,
    tertiary: `#20c8a0`,

    // Utility Colors
    info: `#2496f4`,
    error: `#ff0000`,
    warning: `#ffb400`,
    success: `#20d840`,

    // Black & White Colors
    black: `#000000`,
    white: `#ffffff`,

    // Foreground Colors
    fg: `#303640`,
    fgContrast: `#ffffff`,

    // Background Colors
    bg: {
      body: `#ffffff`,
      light: `#fafafa`,
      main: `#f5f5f5`,
      dark: `#f0f0f0`,
    },
    bgContrast: {
      body: `#101216`,
      light: `#181b20`,
      main: `#202428`,
      dark: `#282d32`,
    },

    // Disabled Colors
    disabled: `#d4d8de`,
    // disabled: `#404650`,
    disabledContrast: `#404650`,

    // Divider Colors
    divider: {},
    dividerContrast: {},
  },

  // Text Options
  txt: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
    fontHeight: 1.333,
    fontHeightReset: 1,
    fontWeightVeryLight: 100,
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 900,
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
    const pix = (num) => `${4 * num}px`;

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
    footer: `1000`,
    header: `1100`,
    menu: `1200`,
    dropdown: `1300`,
    modal: `1500`,
    modalDropdown: `1600`,
    tooltip: `2000`,
    notification: `2500`,
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

// const buildContrastColor = (color) => {
//   const fgLight = beforeTheme.color.fgContrast;
//   const fgDark = beforeTheme.color.fg;
//   let isLight = false;

//   if (Color(color).luminosity() > 0.75) isLight = true;

//   return isLight ? fgDark : fgLight;
// };

// const buildHoverColor = (color) => {
//   const lumin = Color(color).luminosity();
//   const isLight = lumin > 0.4 ? true : false;

//   if (!isLight) Color(color).lighten(0.25).hex();
//   return Color(color).darken(0.2).hex();
// };

const buildAlphaColors = (color) => {
  const alphas = [`00`, `10`, `20`, `30`, `40`, `50`, `60`, `70`, `80`, `90`, `A0`, `B0`, `C0`, `D0`, `E0`, `F0`];
  const alpha = alphas.map((alpha) => `${Color(color).hex()}${alpha}`);
  return alpha;
};

const buildForegroundColors = (color) => {
  const primary = Color(color).hex();
  const secondary = Color(color).hex() + `96`;
  const tertiary = Color(color).hex() + `72`;
  return { primary, secondary, tertiary };
};

const buildDisabledColors = (color) => {
  const fg = Color(color).darken(0.25).hex();
  const bg = color;
  return { fg, bg };
};

const buildDisabledContrastColors = (color) => {
  const fg = Color(color).lighten(0.4).hex();
  const bg = color;
  return { fg, bg };
};

const buildDividerColors = (color) => {
  const light = `${color}12`;
  const main = `${color}18`;
  const dark = `${color}20`;
  return { light, main, dark };
};

const buildColors = (color) => {
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
    [`500`]: Color(beforeTheme.color.fgContrast).hex(),
    [`600`]: main[`200`],
    [`700`]: main[`300`],
    [`800`]: main[`400`],
    [`900`]: main[`500`],
  };
  const alpha = buildAlphaColors(Color(color).hex());
  return { main, contrast, alpha };
};

const theme = {
  ...beforeTheme,
  color: {
    ...beforeTheme.color,
    default: {
      ...buildColors(beforeTheme.color.default),
    },
    primary: {
      ...buildColors(beforeTheme.color.primary),
    },
    secondary: {
      ...buildColors(beforeTheme.color.secondary),
    },
    tertiary: {
      ...buildColors(beforeTheme.color.tertiary),
    },
    info: {
      ...buildColors(beforeTheme.color.info),
    },
    error: {
      ...buildColors(beforeTheme.color.error),
    },
    warning: {
      ...buildColors(beforeTheme.color.warning),
    },
    success: {
      ...buildColors(beforeTheme.color.success),
    },
    black: {
      main: beforeTheme.color.black,
      alpha: buildAlphaColors(beforeTheme.color.black),
    },
    white: {
      main: beforeTheme.color.white,
      alpha: buildAlphaColors(beforeTheme.color.white),
    },
    fg: {
      ...buildForegroundColors(beforeTheme.color.fg),
    },
    fgContrast: {
      ...buildForegroundColors(beforeTheme.color.fgContrast),
    },
    disabled: {
      ...buildDisabledColors(beforeTheme.color.disabled),
    },
    disabledContrast: {
      ...buildDisabledContrastColors(beforeTheme.color.disabledContrast),
    },
    divider: {
      ...buildDividerColors(beforeTheme.color.fg),
    },
    dividerContrast: {
      ...buildDividerColors(beforeTheme.color.fgContrast),
    },
  },
};

console.log(`Theme:`, theme);

export default theme;
