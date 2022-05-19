//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { FuiProvider } from "providers/Fui";

import theme from "utils/defaultTheme";

import Layout from "_test/Layout";
import Page from "_test/Page";

//////////////////////// COMPONENT ////////////////////////

function App(props) {
  return (
    <Router>
      <FuiProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path="/" component={() => <Page />} />
          </Switch>
        </Layout>
      </FuiProvider>
    </Router>
  );
}

//////////////////////// EXPORT ////////////////////////

export default App;
