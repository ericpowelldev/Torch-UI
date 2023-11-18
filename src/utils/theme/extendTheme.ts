// DEPENDENCIES -------------------------------------------------- //

const Color = require("color");

// HELPERS -------------------------------------------------- //

/** Build standard colors */
const buildColors = (color, darkMode) => {
  // Normalize the main color
  const normalizedColor = Color(color).lightness(50).hex();

  // Generate the main hexes
  const main = {
    [`0`]: Color(normalizedColor)
      .lightness(darkMode ? 0 : 100)
      .hex(),
    [`50`]: Color(normalizedColor)
      .lightness(darkMode ? 5 : 95)
      .hex(),
    [`100`]: Color(normalizedColor)
      .lightness(darkMode ? 10 : 90)
      .hex(),
    [`150`]: Color(normalizedColor)
      .lightness(darkMode ? 15 : 85)
      .hex(),
    [`200`]: Color(normalizedColor)
      .lightness(darkMode ? 20 : 80)
      .hex(),
    [`250`]: Color(normalizedColor)
      .lightness(darkMode ? 25 : 75)
      .hex(),
    [`300`]: Color(normalizedColor)
      .lightness(darkMode ? 30 : 70)
      .hex(),
    [`350`]: Color(normalizedColor)
      .lightness(darkMode ? 35 : 65)
      .hex(),
    [`400`]: Color(normalizedColor)
      .lightness(darkMode ? 40 : 60)
      .hex(),
    [`450`]: Color(normalizedColor)
      .lightness(darkMode ? 45 : 55)
      .hex(),
    [`500`]: normalizedColor,
    [`550`]: Color(normalizedColor)
      .lightness(darkMode ? 55 : 45)
      .hex(),
    [`600`]: Color(normalizedColor)
      .lightness(darkMode ? 60 : 40)
      .hex(),
    [`650`]: Color(normalizedColor)
      .lightness(darkMode ? 65 : 35)
      .hex(),
    [`700`]: Color(normalizedColor)
      .lightness(darkMode ? 70 : 30)
      .hex(),
    [`750`]: Color(normalizedColor)
      .lightness(darkMode ? 75 : 25)
      .hex(),
    [`800`]: Color(normalizedColor)
      .lightness(darkMode ? 80 : 20)
      .hex(),
    [`850`]: Color(normalizedColor)
      .lightness(darkMode ? 85 : 15)
      .hex(),
    [`900`]: Color(normalizedColor)
      .lightness(darkMode ? 90 : 10)
      .hex(),
    [`950`]: Color(normalizedColor)
      .lightness(darkMode ? 95 : 5)
      .hex(),
    [`1000`]: Color(normalizedColor)
      .lightness(darkMode ? 100 : 0)
      .hex(),
  };

  // Generate the inverse hexes
  const inverse = {
    [`i0`]: darkMode ? main[`500`] : main[`500`],
    [`i50`]: darkMode ? main[`450`] : main[`550`],
    [`i100`]: darkMode ? main[`400`] : main[`600`],
    [`i150`]: darkMode ? main[`350`] : main[`650`],
    [`i200`]: darkMode ? main[`300`] : main[`700`],
    [`i250`]: darkMode ? main[`250`] : main[`750`],
    [`i300`]: darkMode ? main[`200`] : main[`800`],
    [`i350`]: darkMode ? main[`150`] : main[`850`],
    [`i400`]: darkMode ? main[`100`] : main[`900`],
    [`i450`]: darkMode ? main[`50`] : main[`950`],
    [`i500`]: `#ffffff`,
    [`i550`]: darkMode ? main[`950`] : main[`50`],
    [`i600`]: darkMode ? main[`900`] : main[`100`],
    [`i650`]: darkMode ? main[`850`] : main[`150`],
    [`i700`]: darkMode ? main[`800`] : main[`200`],
    [`i750`]: darkMode ? main[`750`] : main[`250`],
    [`i800`]: darkMode ? main[`700`] : main[`300`],
    [`i850`]: darkMode ? main[`650`] : main[`350`],
    [`i900`]: darkMode ? main[`600`] : main[`400`],
    [`i950`]: darkMode ? main[`550`] : main[`450`],
    [`i1000`]: darkMode ? main[`500`] : main[`500`],
  };

  // Generate the alpha hexes
  const alpha = {
    [`a0`]: Color(normalizedColor).fade(1).hexa(),
    [`a50`]: Color(normalizedColor).fade(0.95).hexa(),
    [`a100`]: Color(normalizedColor).fade(0.9).hexa(),
    [`a150`]: Color(normalizedColor).fade(0.85).hexa(),
    [`a200`]: Color(normalizedColor).fade(0.8).hexa(),
    [`a250`]: Color(normalizedColor).fade(0.75).hexa(),
    [`a300`]: Color(normalizedColor).fade(0.7).hexa(),
    [`a350`]: Color(normalizedColor).fade(0.65).hexa(),
    [`a400`]: Color(normalizedColor).fade(0.6).hexa(),
    [`a450`]: Color(normalizedColor).fade(0.55).hexa(),
    [`a500`]: Color(normalizedColor).fade(0.5).hexa(),
    [`a550`]: Color(normalizedColor).fade(0.45).hexa(),
    [`a600`]: Color(normalizedColor).fade(0.4).hexa(),
    [`a650`]: Color(normalizedColor).fade(0.35).hexa(),
    [`a700`]: Color(normalizedColor).fade(0.3).hexa(),
    [`a750`]: Color(normalizedColor).fade(0.25).hexa(),
    [`a800`]: Color(normalizedColor).fade(0.2).hexa(),
    [`a850`]: Color(normalizedColor).fade(0.15).hexa(),
    [`a900`]: Color(normalizedColor).fade(0.1).hexa(),
    [`a950`]: Color(normalizedColor).fade(0.05).hexa(),
    [`a1000`]: normalizedColor,
  };

  // Return all the hexes
  return { ...main, ...inverse, ...alpha };
};

/** Build foreground colors */
const buildForegroundColors = (color, darkMode) => {
  const alphas = [``, `96`, `72`, `48`];
  const foregroundColors = alphas.map((alpha) => `${Color(color).hex()}${alpha}`);
  return foregroundColors;
};

/** Build background colors */
const buildBackgroundColors = (color, darkMode) => {
  // Normalize the main color
  const normalizedColor = Color(color).lightness(50).hex();

  // Create shades of the normalized color
  const shades = [
    Color(normalizedColor)
      .lightness(darkMode ? 5 : 100)
      .hex(),
    Color(normalizedColor)
      .lightness(darkMode ? 10 : 95)
      .hex(),
    Color(normalizedColor)
      .lightness(darkMode ? 15 : 90)
      .hex(),
    Color(normalizedColor)
      .lightness(darkMode ? 20 : 85)
      .hex(),
    Color(normalizedColor)
      .lightness(darkMode ? 25 : 80)
      .hex(),
  ];

  // Return the shades
  return shades;
};

/** Build foreground disabled color */
const buildForegroundDisabledColor = (color, darkMode) => {
  if (darkMode) return Color(color).fade(0.6).hexa();
  return Color(color).fade(0.4).hexa();
};

/** Build background disabled color */
const buildBackgroundDisabledColor = (color, darkMode) => {
  if (darkMode) return Color(color).fade(0.4).hexa();
  return Color(color).fade(0.6).hexa();
};

// ORCHESTRATION -------------------------------------------------- //

const extendTheme = (theme) => {
  // Create a copy of the theme object to edit
  let themeEdit = {
    ...theme,

    color: {
      ...theme.color,

      primary: {
        ...buildColors(theme.color.primary, false),
      },
      secondary: {
        ...buildColors(theme.color.secondary, false),
      },
      tertiary: {
        ...buildColors(theme.color.tertiary, false),
      },

      utility: {
        ...buildColors(theme.color.utility, false),
      },
      info: {
        ...buildColors(theme.color.info, false),
      },
      error: {
        ...buildColors(theme.color.error, false),
      },
      warning: {
        ...buildColors(theme.color.warning, false),
      },
      success: {
        ...buildColors(theme.color.success, false),
      },

      grayscale: {
        ...buildColors(theme.color.grayscale, false),
      },

      fg: buildForegroundColors(theme.color.fg, false),
      fgi: buildForegroundColors(theme.color.bg, true),
      fgd: buildForegroundDisabledColor(theme.color.grayscale, false),
      fgdi: buildForegroundDisabledColor(theme.color.grayscale, true),

      bg: buildBackgroundColors(theme.color.bg, false),
      bgi: buildBackgroundColors(theme.color.fg, true),
      bgd: buildBackgroundDisabledColor(theme.color.grayscale, false),
      bgdi: buildBackgroundDisabledColor(theme.color.grayscale, true),
    },
  };

  // Return the edited theme object
  return themeEdit;
};

// EXPORT -------------------------------------------------- //

export default extendTheme;
