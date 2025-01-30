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

interface TUIProviderProps {
  children?: React.ReactNode;

  theme?: Theme;
  customThemeName?: string;

  cssPreset?: BoolValues;
}

// interface TUIContextProps {
//   theme?: Theme;
//   customThemeName?: string;
//   detectSystemThemeMode?: any;
// }

// CONTEXT/HOOK ---------------------------------------------------------------- //

const TUIContext = React.createContext({
  theme: extendedDefaultTheme,
  customThemeName: undefined,
});
const useTUI = () => React.useContext(TUIContext);

// PROVIDER ---------------------------------------------------------------- //

const TUIProvider = ({
  children,
  theme = {},
  customThemeName = undefined,
  cssPreset = true,
}: TUIProviderProps) => {
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
    <TUIContext.Provider value={ctx}>
      {cssPreset && <Preset theme={extendedTheme} />}
      {children}
    </TUIContext.Provider>
  );
};

// EXPORT ---------------------------------------------------------------- //

export { TUIProvider, useTUI };
