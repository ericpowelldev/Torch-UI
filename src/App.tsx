// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TUIProvider } from "providers/TUI";

import Layout from "_test/Layout";
import Test from "_test/Test";
import theme from "_test/theme";

// COMPONENT -------------------------------------------------- //

const App = () => {
  return (
    <Router>
      <TUIProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Test />} />
          </Routes>
        </Layout>
      </TUIProvider>
    </Router>
  );
};

// EXPORT -------------------------------------------------- //

export default App;
