//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FuiProvider } from "providers/Fui";

import theme from "utils/_theme";

import Layout from "_test/Layout";
import Page from "_test/Page";

//////////////////////// COMPONENT ////////////////////////

function App(props) {
  return (
    <Router>
      <FuiProvider theme={theme}>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Page />} />
          </Routes>
        </Layout>
      </FuiProvider>
    </Router>
  );
}

//////////////////////// EXPORT ////////////////////////

export default App;
