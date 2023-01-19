//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";

import "static/styles/reset.css";
import "static/styles/custom.css";
import "static/styles/scrollbar.css";

import _theme from "utils/_theme";
import { BoolValues } from "utils/types";

//////////////////////// PROPS ////////////////////////

interface TUIProviderProps {
  children?: React.ReactNode;

  theme?: any;

  resetCss?: BoolValues;
  customScrollbar?: BoolValues;
}

//////////////////////// CONTEXT/HOOK ////////////////////////

const TUIContext = React.createContext({ theme: _theme });
const useTUI = () => React.useContext(TUIContext);

//////////////////////// PROVIDER ////////////////////////

const TUIProvider = ({ children, theme = _theme, resetCss = true, customScrollbar = true }: TUIProviderProps) => {
  const ctx = {
    theme: theme,
  };

  return (
    <TUIContext.Provider value={ctx}>
      {/* {resetCss ? <ResetCss /> : null} */}
      {/* {customScrollbar ? <ScrollbarCss /> : null} */}
      {children}
    </TUIContext.Provider>
  );
};

//////////////////////// EXPORT ////////////////////////

export { TUIProvider, useTUI };
