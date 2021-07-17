//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import 'styles/reset.css';

import defaultTheme from "utils/defaultTheme";

import { jss, JssProvider } from "react-jss";
import jssPreset from "jss-preset-default";

jss.setup(jssPreset());

//////////////////////// CONTEXT/HOOK ////////////////////////

const FuiContext = React.createContext();
const useFui = () => React.useContext(FuiContext);

//////////////////////// PROVIDER ////////////////////////

function FuiProvider({ children, theme, cssReset }) {
  const ctx = {
    theme: theme,
  };
  
  return (
    <FuiContext.Provider value={ctx}>
      <JssProvider jss={jss}>{children}</JssProvider>
    </FuiContext.Provider>
  );
}

//////////////////////// PROPS ////////////////////////

FuiProvider.propTypes = {
  theme: PropTypes.object,
  cssReset: PropTypes.bool,
};

FuiProvider.defaultProps = {
  theme: defaultTheme,
  cssReset: true,
};

//////////////////////// EXPORT ////////////////////////

export { FuiProvider, useFui };
