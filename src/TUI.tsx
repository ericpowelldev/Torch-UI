// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import deepmerge from "deepmerge";

import defaultTheme from "./utils/theme/defaultTheme";
import extendTheme from "./utils/theme/extendTheme";
import { BoolValues } from "./utils/types";

import Preset from "./Preset";

import "./static/styles/tui.css";

const extendedDefaultTheme = extendTheme(defaultTheme, undefined, `light`);

// PROPS ---------------------------------------------------------------- //

interface TUIProviderProps {
  children?: React.ReactNode;

  theme?: any;
  themeStyle?: string;
  themeMode?: `light` | `dark` | `system`;

  cssPreset?: BoolValues;
}

// CONTEXT/HOOK ---------------------------------------------------------------- //

const TUIContext = React.createContext({ theme: extendedDefaultTheme, themeStyle: undefined, themeMode: `light` });
const useTUI = () => React.useContext(TUIContext);

// PROVIDER ---------------------------------------------------------------- //

const TUIProvider = ({ children, theme = {}, themeStyle = `dark`, themeMode = `system`, cssPreset = true }: TUIProviderProps) => {
  let detectedThemeMode = themeMode;

  // Detect system preferences for theme mode
  if (themeMode === `system` && window?.matchMedia("(prefers-color-scheme: light)")?.matches) {
    detectedThemeMode = `light`;
  }
  if (themeMode === `system` && window?.matchMedia("(prefers-color-scheme: dark)")?.matches) {
    detectedThemeMode = `dark`;
  }

  // Merge the override theme and extend the merged theme
  let extendedTheme = deepmerge(defaultTheme, theme);
  extendedTheme = extendTheme(extendedTheme, themeStyle, detectedThemeMode);

  const ctx = {
    theme: extendedTheme,
    themeStyle: themeStyle,
    themeMode: detectedThemeMode,
  };

  console.log(`Extended Theme:`, extendedTheme, detectedThemeMode);

  return (
    <TUIContext.Provider value={ctx}>
      {cssPreset && <Preset theme={extendedTheme} />}
      {children}
    </TUIContext.Provider>
  );
};

// EXPORT ---------------------------------------------------------------- //

export { TUIProvider, useTUI };
