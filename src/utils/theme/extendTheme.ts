// DEPENDENCIES ---------------------------------------------------------------- //

import deepmerge from "deepmerge";
const Color = require("color");

// HELPERS ---------------------------------------------------------------- //

/** Build standard colors */
const buildColors = (color: string, themeMode?: string) => {
  // Normalize the main color
  const normalizedColor = Color(color).lightness(50).hex();

  // Generate the main hexes
  const main = {
    [`0`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 0 : 100)
      .hex(),
    [`50`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 5 : 95)
      .hex(),
    [`100`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 10 : 90)
      .hex(),
    [`150`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 15 : 85)
      .hex(),
    [`200`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 20 : 80)
      .hex(),
    [`250`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 25 : 75)
      .hex(),
    [`300`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 30 : 70)
      .hex(),
    [`350`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 35 : 65)
      .hex(),
    [`400`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 40 : 60)
      .hex(),
    [`450`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 45 : 55)
      .hex(),
    [`500`]: normalizedColor,
    [`550`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 55 : 45)
      .hex(),
    [`600`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 60 : 40)
      .hex(),
    [`650`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 65 : 35)
      .hex(),
    [`700`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 70 : 30)
      .hex(),
    [`750`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 75 : 25)
      .hex(),
    [`800`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 80 : 20)
      .hex(),
    [`850`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 85 : 15)
      .hex(),
    [`900`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 90 : 10)
      .hex(),
    [`950`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 95 : 5)
      .hex(),
    [`1000`]: Color(normalizedColor)
      .lightness(themeMode === `dark` ? 100 : 0)
      .hex(),
  };

  // Generate the inverse hexes
  const inverse = {
    [`i0`]: main[`500`],
    [`i50`]: main[`550`],
    [`i100`]: main[`600`],
    [`i150`]: main[`650`],
    [`i200`]: main[`700`],
    [`i250`]: main[`750`],
    [`i300`]: main[`800`],
    [`i350`]: main[`850`],
    [`i400`]: main[`900`],
    [`i450`]: main[`950`],
    [`i500`]: `#ffffff`,
    [`i550`]: main[`50`],
    [`i600`]: main[`100`],
    [`i650`]: main[`150`],
    [`i700`]: main[`200`],
    [`i750`]: main[`250`],
    [`i800`]: main[`300`],
    [`i850`]: main[`350`],
    [`i900`]: main[`400`],
    [`i950`]: main[`450`],
    [`i1000`]: main[`500`],
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
const buildForegroundColors = (color: string, themeMode?: string) => {
  const alphas = [``, `96`, `72`, `48`];
  const foregroundColors = alphas.map((alpha) => `${Color(color).hex()}${alpha}`);
  return foregroundColors;
};

/** Build foreground inverse colors */
const buildForegroundInverseColors = (color: string, themeMode?: string) => {
  const alphas = [``, `96`, `72`, `48`];
  const foregroundColors = alphas.map((alpha) => `${Color(color).hex()}${alpha}`);
  return foregroundColors;
};

/** Build background colors */
const buildBackgroundColors = (color: string, themeMode?: string) => {
  // Normalize the main color
  const normalizedColor = Color(color).lightness(50).hex();

  // Create shades of the normalized color
  const shades = [
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 5 : 100)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 10 : 95)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 15 : 90)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 20 : 85)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 25 : 80)
      .hex(),
  ];

  // Return the shades
  return shades;
};

/** Build background inverse colors */
const buildBackgroundInverseColors = (color: string, themeMode?: string) => {
  // Normalize the main color
  const normalizedColor = Color(color).lightness(50).hex();

  // Create shades of the normalized color
  const shades = [
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 100 : 5)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 95 : 10)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 90 : 15)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 85 : 20)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 80 : 25)
      .hex(),
  ];

  // Return the shades
  return shades;
};

/** Build foreground disabled color */
const buildForegroundDisabledColor = (color: string, themeMode?: string) => {
  return Color(color).fade(0.2).hexa();
};

/** Build background disabled color */
const buildBackgroundDisabledColor = (color: string, themeMode?: string) => {
  return Color(color).fade(0.6).hexa();
};

// ORCHESTRATION ---------------------------------------------------------------- //

const extendTheme = (theme: any, themeStyle?: string, themeMode?: string) => {
  // Set the initial theme props to use when extending
  // Check the theme object for the custom style props
  let customTheme = themeStyle && theme?.custom?.[themeStyle] ? theme?.custom?.[themeStyle] : {};

  // Override the standard theme with the custom theme
  customTheme = deepmerge(theme, customTheme);
  if (customTheme.custom) delete customTheme.custom;

  // Create a copy of the theme object to edit
  let themeEdit = {
    color: {
      primary: {
        ...buildColors(customTheme?.color?.primary, themeMode),
      },
      secondary: {
        ...buildColors(customTheme?.color?.secondary, themeMode),
      },
      tertiary: {
        ...buildColors(customTheme?.color?.tertiary, themeMode),
      },

      utility: {
        ...buildColors(customTheme?.color?.utility, themeMode),
      },
      error: {
        ...buildColors(customTheme?.color?.error, themeMode),
      },
      warning: {
        ...buildColors(customTheme?.color?.warning, themeMode),
      },
      success: {
        ...buildColors(customTheme?.color?.success, themeMode),
      },
      info: {
        ...buildColors(customTheme?.color?.info, themeMode),
      },

      grayscale: {
        ...buildColors(customTheme?.color?.grayscale, themeMode),
      },

      fg: buildForegroundColors(customTheme?.color?.fg, themeMode),
      fgi: buildForegroundInverseColors(customTheme?.color?.bg, themeMode),
      fgd: buildForegroundDisabledColor(customTheme?.color?.grayscale),

      bg: buildBackgroundColors(customTheme?.color?.bg, themeMode),
      bgi: buildBackgroundInverseColors(customTheme?.color?.fg, themeMode),
      bgd: buildBackgroundDisabledColor(customTheme?.color?.grayscale),
    },
  };

  // Override the main theme object with the edited theme object
  themeEdit = deepmerge(customTheme, themeEdit);

  // Return the edited theme object
  return themeEdit;
};

// EXPORT ---------------------------------------------------------------- //

export default extendTheme;
