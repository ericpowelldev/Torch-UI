// DEPENDENCIES ---------------------------------------------------------------- //

import deepmerge from "deepmerge";
import { SimpleTheme } from "@utils/types";

import {
  buildColorTints,
  buildForegroundColors,
  buildForegroundInverseColors,
  buildForegroundDisabledColor,
  buildBackgroundColors,
  buildBackgroundInverseColors,
  buildBackgroundDisabledColor,
  buildDividerColors,
  buildGlassColors,
  buildActionColors,
} from "./themeUtils";

// EXTEND THEME ---------------------------------------------------------------- //

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
        ...buildColorTints(customTheme?.color?.primary, themeMode),
      },
      secondary: {
        ...buildColorTints(customTheme?.color?.secondary, themeMode),
      },
      tertiary: {
        ...buildColorTints(customTheme?.color?.tertiary, themeMode),
      },

      utility: {
        ...buildColorTints(customTheme?.color?.utility, themeMode),
      },
      error: {
        ...buildColorTints(customTheme?.color?.error, themeMode),
      },
      warning: {
        ...buildColorTints(customTheme?.color?.warning, themeMode),
      },
      success: {
        ...buildColorTints(customTheme?.color?.success, themeMode),
      },
      info: {
        ...buildColorTints(customTheme?.color?.info, themeMode),
      },

      grayscale: {
        ...buildColorTints(customTheme?.color?.grayscale, themeMode),
      },

      fg: buildForegroundColors(customTheme?.color?.fg, themeMode),
      fgInverse: buildForegroundInverseColors(customTheme?.color?.bg, themeMode),
      fgDisabled: buildForegroundDisabledColor(customTheme?.color?.grayscale),

      bg: buildBackgroundColors(customTheme?.color?.bg, themeMode),
      bgInverse: buildBackgroundInverseColors(customTheme?.color?.fg, themeMode),
      bgDisabled: buildBackgroundDisabledColor(customTheme?.color?.grayscale),

      divider: buildDividerColors(customTheme?.color?.fg, themeMode),
      dividerInverse: buildDividerColors(customTheme?.color?.bg, themeMode),

      glass: buildGlassColors(customTheme?.color?.fg, themeMode),
      glassInverse: buildGlassColors(customTheme?.color?.bg, themeMode),

      action: buildActionColors(customTheme?.color?.fg, themeMode),
      actionInverse: buildActionColors(customTheme?.color?.bg, themeMode),
    },
  };

  // Override the main theme object with the edited theme object
  themeEdit = deepmerge(customTheme, themeEdit);

  // Return the edited theme object
  return themeEdit;
};

// EXPORT ---------------------------------------------------------------- //

export default extendTheme;
