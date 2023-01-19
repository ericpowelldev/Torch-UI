//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";

import "static/styles/reset.css";
import "static/styles/custom.css";
import "static/styles/scrollbar.css";

import _theme from "utils/_theme";
import { boolValues } from "utils/standards";

//////////////////////// CONTEXT/HOOK ////////////////////////

const TUIContext = React.createContext();
const useTUI = () => React.useContext(TUIContext);

//////////////////////// PROVIDER ////////////////////////

function TUIProvider({ children, theme, resetCss, customScrollbar }) {
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
}

//////////////////////// PROPS ////////////////////////

TUIProvider.propTypes = {
  theme: PropTypes.object,

  resetCss: PropTypes.oneOf(boolValues),
  customScrollbar: PropTypes.oneOf(boolValues),
};

TUIProvider.defaultProps = {
  theme: _theme,

  resetCss: true,
  customScrollbar: true,
};

//////////////////////// EXPORT ////////////////////////

export { TUIProvider, useTUI };
