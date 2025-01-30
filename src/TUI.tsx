// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import deepmerge from "deepmerge";

import defaultTheme from "./utils/theme/defaultTheme";
import extendTheme from "./utils/theme/extendTheme";
import { BoolValues, Theme } from "./utils/types";

import Preset from "./Preset";

import "../static/styles/tui.css";

// HELPERS ---------------------------------------------------------------- //

/** Extend the default theme */
const extendedDefaultTheme = extendTheme(defaultTheme, undefined);

/** Detect system preferences for theme mode */
const detectSystemThemeMode = () => {
  if (window?.matchMedia("(prefers-color-scheme: dark)")?.matches) return `dark`;
  return `light`;
};

// PROPS ---------------------------------------------------------------- //

interface TuiThemeProviderProps {
  children?: React.ReactNode;

  theme?: Theme;
  customThemeName?: string;

  cssPreset?: BoolValues;
}

// interface TuiThemeContextProps {
//   theme?: Theme;
//   customThemeName?: string;
//   detectSystemThemeMode?: any;
// }

// CONTEXT/HOOK ---------------------------------------------------------------- //

const TuiThemeContext = React.createContext({
  theme: extendedDefaultTheme,
  customThemeName: undefined,
});
const useTui = () => React.useContext(TuiThemeContext);

// PROVIDER ---------------------------------------------------------------- //

const TuiThemeProvider = ({
  children,
  theme = {},
  customThemeName = undefined,
  cssPreset = true,
}: TuiThemeProviderProps) => {
  // Merge the override theme and extend the merged theme
  let extendedTheme = deepmerge(defaultTheme, theme) as any;
  extendedTheme = extendTheme(extendedTheme, customThemeName);

  const ctx = {
    theme: extendedTheme,
    customThemeName: customThemeName,
    detectSystemThemeMode: detectSystemThemeMode,
  } as any;

  console.log(`Extended Theme (${customThemeName || `default`}):`, extendedTheme);

  return (
    <TuiThemeContext.Provider value={ctx}>
      {cssPreset && <Preset theme={extendedTheme} />}
      {children}
    </TuiThemeContext.Provider>
  );
};

// EXPORT ---------------------------------------------------------------- //

export { TuiThemeProvider, useTui };
