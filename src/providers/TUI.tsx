// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import deepmerge from "deepmerge";

import "static/styles/index.css";

import defaultTheme from "utils/theme/defaultTheme";
import { BoolValues } from "utils/types";

import Reset from "components/_app/Reset";
import Scrollbar from "components/_app/Scrollbar";
import extendTheme from "utils/theme/extendTheme";

const extendedDefaultTheme = extendTheme(defaultTheme);

// PROPS -------------------------------------------------- //

interface TUIProviderProps {
  children?: React.ReactNode;

  theme?: any;

  cssReset?: BoolValues;
  cssScrollbar?: BoolValues;
}

// CONTEXT/HOOK -------------------------------------------------- //

const TUIContext = React.createContext({ theme: extendedDefaultTheme, mode: `dark` });
const useTUI = () => React.useContext(TUIContext);

// PROVIDER -------------------------------------------------- //

const TUIProvider = ({ children, theme = {}, cssReset = true, cssScrollbar = false }: TUIProviderProps) => {
  let extendedTheme = deepmerge(defaultTheme, theme);
  extendedTheme = extendTheme(extendedTheme);

  const ctx = {
    theme: extendedTheme,
    mode: `dark`,
  };

  console.log(`Extended Theme:`, extendedTheme);

  return (
    <TUIContext.Provider value={ctx}>
      {cssReset ? <Reset /> : null}
      {cssScrollbar ? <Scrollbar /> : null}
      {children}
    </TUIContext.Provider>
  );
};

// EXPORT -------------------------------------------------- //

export { TUIProvider, useTUI };
