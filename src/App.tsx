// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TUIProvider } from "providers/TUI";

import Layout from "_test/Layout";
import Page from "_test/Page";
import theme from "_test/theme";

// COMPONENT -------------------------------------------------- //

const App = () => {
  return (
    <Router>
      <TUIProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Page />} />
          </Routes>
        </Layout>
      </TUIProvider>
    </Router>
  );
};

// EXPORT -------------------------------------------------- //

export default App;
