//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled from "styled-components";

import Header from "components/layout/Header";
import Main from "components/layout/Main";
import Footer from "components/layout/Footer";

import Sidebar from "components/layout/Sidebar";

//////////////////////// STYLED-COMPONENTS ////////////////////////

const Root = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  /* background-color: #202428; */
`;

//////////////////////// COMPONENT ////////////////////////

function Layout(props) {
  return (
    <Root>
      <Header />
      <Main>{props.children}</Main>
      <Footer />

      <Sidebar />

      {/* <ScrollToTop /> */}
    </Root>
  );
}

//////////////////////// EXPORT ////////////////////////

export default Layout;
