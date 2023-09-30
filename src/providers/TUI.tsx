// DEPENDENCIES -------------------------------------------------- //

import React from "react";

import "static/styles/index.css";

import defaultTheme from "utils/_theme";
import { BoolValues } from "utils/types";

import Reset from "utils/OptionalComponents/Reset";
import Scrollbar from "utils/OptionalComponents/Scrollbar";

// PROPS -------------------------------------------------- //

interface TUIProviderProps {
  children?: React.ReactNode;

  theme?: any;

  cssReset?: BoolValues;
  cssScrollbar?: BoolValues;
}

// CONTEXT/HOOK -------------------------------------------------- //

const TUIContext = React.createContext({ theme: defaultTheme });
const useTUI = () => React.useContext(TUIContext);

// PROVIDER -------------------------------------------------- //

const TUIProvider = ({ children, theme = {}, cssReset = true, cssScrollbar = false }: TUIProviderProps) => {
  const ctx = {
    theme: { ...defaultTheme, ...theme },
  };

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
