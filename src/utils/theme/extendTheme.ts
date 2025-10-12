// DEPENDENCIES ---------------------------------------------------------------- //

import deepmerge from "deepmerge";
import { SimpleTheme } from "@utils/types";

const Color = require("color");

// HELPERS ---------------------------------------------------------------- //

/** Generate a lighter shade of a color */
const lightenColor = (color: string, amount: number) => {
  const rgb = Color(color).rgb().array();
  const newRGB = rgb.map((value: number) => {
    return value + (255 - value) * amount;
  });
  return Color.rgb(newRGB).hex();
};

/** Generate a darker shade of a color */
const darkenColor = (color: string, amount: number) => {
  const rgbColor = Color(color).rgb().array();
  const newRGB = rgbColor.map((value: number) => {
    return value - value * amount;
  });
  return Color.rgb(newRGB).hex();
};

/** Build standard colors */
const buildColors = (color: string, themeMode?: string) => {
  // Generate the main hexes
  const main = {
    [`0`]: themeMode === `dark` ? darkenColor(color, 1) : lightenColor(color, 1),
    [`50`]: themeMode === `dark` ? darkenColor(color, 0.9) : lightenColor(color, 0.9),
    [`100`]: themeMode === `dark` ? darkenColor(color, 0.8) : lightenColor(color, 0.8),
    [`150`]: themeMode === `dark` ? darkenColor(color, 0.7) : lightenColor(color, 0.7),
    [`200`]: themeMode === `dark` ? darkenColor(color, 0.6) : lightenColor(color, 0.6),
    [`250`]: themeMode === `dark` ? darkenColor(color, 0.5) : lightenColor(color, 0.5),
    [`300`]: themeMode === `dark` ? darkenColor(color, 0.4) : lightenColor(color, 0.4),
    [`350`]: themeMode === `dark` ? darkenColor(color, 0.3) : lightenColor(color, 0.3),
    [`400`]: themeMode === `dark` ? darkenColor(color, 0.2) : lightenColor(color, 0.2),
    [`450`]: themeMode === `dark` ? darkenColor(color, 0.1) : lightenColor(color, 0.1),
    [`500`]: color,
    [`550`]: themeMode === `dark` ? lightenColor(color, 0.1) : darkenColor(color, 0.1),
    [`600`]: themeMode === `dark` ? lightenColor(color, 0.2) : darkenColor(color, 0.2),
    [`650`]: themeMode === `dark` ? lightenColor(color, 0.3) : darkenColor(color, 0.3),
    [`700`]: themeMode === `dark` ? lightenColor(color, 0.4) : darkenColor(color, 0.4),
    [`750`]: themeMode === `dark` ? lightenColor(color, 0.5) : darkenColor(color, 0.5),
    [`800`]: themeMode === `dark` ? lightenColor(color, 0.6) : darkenColor(color, 0.6),
    [`850`]: themeMode === `dark` ? lightenColor(color, 0.7) : darkenColor(color, 0.7),
    [`900`]: themeMode === `dark` ? lightenColor(color, 0.8) : darkenColor(color, 0.8),
    [`950`]: themeMode === `dark` ? lightenColor(color, 0.9) : darkenColor(color, 0.9),
    [`1000`]: themeMode === `dark` ? lightenColor(color, 1) : darkenColor(color, 1),
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
    [`a0`]: Color(color).fade(1).hexa(),
    [`a50`]: Color(color).fade(0.95).hexa(),
    [`a100`]: Color(color).fade(0.9).hexa(),
    [`a150`]: Color(color).fade(0.85).hexa(),
    [`a200`]: Color(color).fade(0.8).hexa(),
    [`a250`]: Color(color).fade(0.75).hexa(),
    [`a300`]: Color(color).fade(0.7).hexa(),
    [`a350`]: Color(color).fade(0.65).hexa(),
    [`a400`]: Color(color).fade(0.6).hexa(),
    [`a450`]: Color(color).fade(0.55).hexa(),
    [`a500`]: Color(color).fade(0.5).hexa(),
    [`a550`]: Color(color).fade(0.45).hexa(),
    [`a600`]: Color(color).fade(0.4).hexa(),
    [`a650`]: Color(color).fade(0.35).hexa(),
    [`a700`]: Color(color).fade(0.3).hexa(),
    [`a750`]: Color(color).fade(0.25).hexa(),
    [`a800`]: Color(color).fade(0.2).hexa(),
    [`a850`]: Color(color).fade(0.15).hexa(),
    [`a900`]: Color(color).fade(0.1).hexa(),
    [`a950`]: Color(color).fade(0.05).hexa(),
    [`a1000`]: color,
  };

  // Return all the hexes
  return { ...main, ...inverse, ...alpha };
};

/** Build foreground colors */
const buildForegroundColors = (color: string, themeMode?: string) => {
  const alphas = [``, `98`, `70`, `48`];
  const foregroundColors = alphas.map((alpha) => `${Color(color).hex()}${alpha}`);
  return foregroundColors;
};

/** Build foreground inverse colors */
const buildForegroundInverseColors = (color: string, themeMode?: string) => {
  const alphas = [``, `98`, `70`, `48`];
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
      .lightness(themeMode === `dark` ? 10 : 97.5)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 15 : 95)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 20 : 92.5)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 25 : 90)
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
      .lightness(themeMode === `dark` ? 97.5 : 10)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 95 : 15)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 92.5 : 20)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 90 : 25)
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

/** Build interaction colors */
const buildInteractionColors = (color: string, themeMode?: string) => {
  return {
    hover: Color(color).fade(0.96).hexa(),
    focus: Color(color).fade(0.92).hexa(),
    active: Color(color).fade(0.88).hexa(),
    selected: Color(color).fade(0.84).hexa(),
  };
};

/** Build divider colors */
const buildDividerColors = (color: string, themeMode?: string) => {
  const shades = [
    Color(color).fade(0.88).hexa(),
    Color(color).fade(0.82).hexa(),
    Color(color).fade(0.76).hexa(),
    Color(color).fade(0.7).hexa(),
  ];

  return shades;
};

/** Build divider inverse colors */
const buildDividerInverseColors = (color: string, themeMode?: string) => {
  const shades = [
    Color(color).fade(0.12).hexa(),
    Color(color).fade(0.18).hexa(),
    Color(color).fade(0.24).hexa(),
    Color(color).fade(0.3).hexa(),
  ];

  return shades;
};

// ORCHESTRATION ---------------------------------------------------------------- //

const extendTheme = (theme: SimpleTheme, customThemeName?: string) => {
  // Set the initial theme props to use when extending
  // Check the theme object for the custom style props
  let customTheme =
    customThemeName && theme?.custom?.[customThemeName] ? theme?.custom?.[customThemeName] : {};
  const themeMode = customTheme?.mode || `light`;

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
      fgInverse: buildForegroundInverseColors(customTheme?.color?.bg, themeMode),
      fgDisabled: buildForegroundDisabledColor(customTheme?.color?.grayscale),

      bg: buildBackgroundColors(customTheme?.color?.bg, themeMode),
      bgInverse: buildBackgroundInverseColors(customTheme?.color?.fg, themeMode),
      bgDisabled: buildBackgroundDisabledColor(customTheme?.color?.grayscale),

      divider: buildDividerColors(customTheme?.color?.fg, themeMode),
      dividerInverse: buildDividerInverseColors(customTheme?.color?.bg, themeMode),

      interaction: buildInteractionColors(customTheme?.color?.fg, themeMode),
    },
  };

  // Override the main theme object with the edited theme object
  themeEdit = deepmerge(customTheme, themeEdit);

  // Return the edited theme object
  return themeEdit;
};

// EXPORT ---------------------------------------------------------------- //

export default extendTheme;
