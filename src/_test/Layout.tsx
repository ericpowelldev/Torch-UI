//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled from "styled-components";

import Header from "components/layout/Header";
import Main from "components/layout/Main";
import Footer from "components/layout/Footer";

import Sidebar from "components/layout/Sidebar";

//////////////////////// PROPS ////////////////////////

interface LayoutProps {
  children?: React.ReactNode;
}

//////////////////////// STYLED-COMPONENTS ////////////////////////

const Root = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  /* background-color: #202428; */
`;

//////////////////////// COMPONENT ////////////////////////

const Layout = ({ children }: LayoutProps) => {
  return (
    <Root>
      <Header />
      <Main>{children}</Main>
      <Footer />

      <Sidebar />

      {/* <ScrollToTop /> */}
    </Root>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Layout;
