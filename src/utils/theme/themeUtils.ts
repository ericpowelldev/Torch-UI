// DEPENDENCIES ---------------------------------------------------------------- //

const Color = require("color");

// HELPERS ---------------------------------------------------------------- //

/** Generate a lighter shade of a color */
export const lightenColor = (color: string, amount: number) => {
  const rgb = Color(color).rgb().array();
  const newRGB = rgb.map((value: number) => {
    return value + (255 - value) * amount;
  });
  return Color.rgb(newRGB).hex();
};

/** Generate a darker shade of a color */
export const darkenColor = (color: string, amount: number) => {
  const rgbColor = Color(color).rgb().array();
  const newRGB = rgbColor.map((value: number) => {
    return value - value * amount;
  });
  return Color.rgb(newRGB).hex();
};

/** Build standard colors */
export const buildColors = (color: string, themeMode?: string) => {
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
    [`i450`]: main[`900`],
    [`i500`]: themeMode === `dark` ? main[`100`] : `#ffffff`,
    [`i550`]: main[`100`],
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
export const buildForegroundColors = (color: string, themeMode?: string) => {
  const alphas = [``, `98`, `70`, `48`];
  const foregroundColors = alphas.map((alpha) => `${Color(color).hex()}${alpha}`);
  return foregroundColors;
};

/** Build foreground inverse colors */
export const buildForegroundInverseColors = (color: string, themeMode?: string) => {
  const alphas = [``, `98`, `70`, `48`];
  const foregroundColors = alphas.map((alpha) => `${Color(color).hex()}${alpha}`);
  return foregroundColors;
};

/** Build foreground disabled color */
export const buildForegroundDisabledColor = (color: string, themeMode?: string) => {
  return Color(color).fade(0.2).hexa();
};

/** Build background colors */
export const buildBackgroundColors = (color: string, themeMode?: string) => {
  // Normalize the main color
  const normalizedColor = Color(color).lightness(50).hex();

  // Create shades of the normalized color
  const shades = [
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 8 : 100)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 12 : 96)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 16 : 92)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 20 : 88)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 24 : 84)
      .hex(),
  ];

  // Return the shades
  return shades;
};

/** Build background inverse colors */
export const buildBackgroundInverseColors = (color: string, themeMode?: string) => {
  // Normalize the main color
  const normalizedColor = Color(color).lightness(50).hex();

  // Create shades of the normalized color
  const shades = [
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 100 : 8)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 96 : 12)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 92 : 16)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 88 : 20)
      .hex(),
    Color(normalizedColor)
      .lightness(themeMode === `dark` ? 84 : 24)
      .hex(),
  ];

  // Return the shades
  return shades;
};

/** Build background disabled color */
export const buildBackgroundDisabledColor = (color: string, themeMode?: string) => {
  return Color(color).fade(0.6).hexa();
};

/** Build divider colors */
export const buildDividerColors = (color: string, themeMode?: string) => {
  const shades = [
    Color(color).fade(0.82).hexa(),
    Color(color).fade(0.76).hexa(),
    Color(color).fade(0.7).hexa(),
  ];

  return shades;
};

/** Build glass colors */
export const buildGlassColors = (color: string, themeMode?: string) => {
  const shades = [
    Color(color).fade(0.975).hexa(),
    Color(color).fade(0.925).hexa(),
    Color(color).fade(0.875).hexa(),
  ];

  return shades;
};

/** Build action colors */
export const buildActionColors = (color: string, themeMode?: string) => {
  return {
    hover: Color(color).fade(0.95).hexa(),
    focus: Color(color).fade(0.9).hexa(),
    active: Color(color).fade(0.85).hexa(),
    selected: Color(color).fade(0.8).hexa(),
  };
};
