//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TUIProvider } from "providers/TUI";

import theme from "utils/_theme";

import Layout from "_test/Layout";
import Page from "_test/Page";

//////////////////////// COMPONENT ////////////////////////

function App(props) {
  return (
    <Router>
      <TUIProvider theme={theme}>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Page />} />
          </Routes>
        </Layout>
      </TUIProvider>
    </Router>
  );
}

//////////////////////// EXPORT ////////////////////////

export default App;
