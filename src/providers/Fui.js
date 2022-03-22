//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";

import 'styles/reset.css';
import 'styles/custom.css';
import 'styles/scrollbar.css';

import defaultTheme from "utils/defaultTheme";
import { boolValues } from "utils/standards";

//////////////////////// CONTEXT/HOOK ////////////////////////

const FuiContext = React.createContext();
const useFui = () => React.useContext(FuiContext);

//////////////////////// PROVIDER ////////////////////////

function FuiProvider({ children, theme, resetCss, customScrollbar }) {
  const ctx = {
    theme: theme,
  };
  
  return (
    <FuiContext.Provider value={ctx}>
      {/* {resetCss ? <ResetCss /> : null} */}
      {/* {customScrollbar ? <ScrollbarCss /> : null} */}
      {children}
    </FuiContext.Provider>
  );
}

//////////////////////// PROPS ////////////////////////

FuiProvider.propTypes = {
  theme: PropTypes.object,

  resetCss: PropTypes.oneOf(boolValues),
  customScrollbar: PropTypes.oneOf(boolValues),
};

FuiProvider.defaultProps = {
  theme: defaultTheme,

  resetCss: true,
  customScrollbar: true,
};

//////////////////////// EXPORT ////////////////////////

export { FuiProvider, useFui };
