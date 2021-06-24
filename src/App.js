import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { jss, JssProvider } from "react-jss";
import jssPreset from "jss-preset-default";

import Wrapper from "components/_Wrapper";
import Test from "pages/Test";

jss.setup(jssPreset());

//////////////////////// COMPONENT ////////////////////////
export default function App() {
  return (
    <Router>
      <JssProvider jss={jss}>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={() => <Test />} />
          </Switch>
        </Wrapper>
      </JssProvider>
    </Router>
  );
}

//////////////////////// STYLES ////////////////////////
const styles = {
  "@global": {
    body: {
      background: `blue`,
    },
  },
};
