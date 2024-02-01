// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import deepmerge from "deepmerge";

import defaultTheme from "./utils/theme/defaultTheme";
import extendTheme from "./utils/theme/extendTheme";
import { BoolValues } from "./utils/types";

import Preset from "./Preset";

import "./static/styles/tui.css";

const extendedDefaultTheme = extendTheme(defaultTheme, `light`);

// PROPS ---------------------------------------------------------------- //

interface TUIProviderProps {
  children?: React.ReactNode;

  theme?: any;
  themeMode?: `light` | `dark` | `system`;

  cssPreset?: BoolValues;
}

// CONTEXT/HOOK ---------------------------------------------------------------- //

const TUIContext = React.createContext({ theme: extendedDefaultTheme, themeMode: `light` });
const useTUI = () => React.useContext(TUIContext);

// PROVIDER ---------------------------------------------------------------- //

const TUIProvider = ({ children, theme = {}, themeMode = `system`, cssPreset = true }: TUIProviderProps) => {
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
  extendedTheme = extendTheme(extendedTheme, detectedThemeMode);

  const ctx = {
    theme: extendedTheme,
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
