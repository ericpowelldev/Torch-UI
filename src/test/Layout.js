//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";

import Header from "components/layout/Header";
import Main from "components/layout/Main";
import Footer from "components/layout/Footer";

import Sidebar from "components/layout/Sidebar";

//////////////////////// COMPONENT ////////////////////////

function Layout(props) {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      <Footer />

      <Sidebar />

      {/* <ScrollToTop /> */}
    </>
  );
}

//////////////////////// EXPORT ////////////////////////

export default Layout;
