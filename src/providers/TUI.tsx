// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import deepmerge from "deepmerge";

import "../static/styles/index.css";

import defaultTheme from "../utils/theme/defaultTheme";
import extendTheme from "../utils/theme/extendTheme";
import { BoolValues } from "../utils/types";

import CssPreset from "../components/CssPreset";

const extendedDefaultTheme = extendTheme(defaultTheme);

// PROPS ---------------------------------------------------------------- //

interface TUIProviderProps {
  children?: React.ReactNode;

  theme?: any;

  cssPreset?: BoolValues;
}

// CONTEXT/HOOK ---------------------------------------------------------------- //

const TUIContext = React.createContext({ theme: extendedDefaultTheme, mode: `dark` });
const useTUI = () => React.useContext(TUIContext);

// PROVIDER ---------------------------------------------------------------- //

const TUIProvider = ({ children, theme = {}, cssPreset = true }: TUIProviderProps) => {
  let extendedTheme = deepmerge(defaultTheme, theme);
  extendedTheme = extendTheme(extendedTheme);

  const ctx = {
    theme: extendedTheme,
    mode: `dark`,
  };

  console.log(`Extended Theme:`, extendedTheme);

  return (
    <TUIContext.Provider value={ctx}>
      {cssPreset && <CssPreset theme={extendedTheme} />}
      {children}
    </TUIContext.Provider>
  );
};

// EXPORT ---------------------------------------------------------------- //

export { TUIProvider, useTUI };
