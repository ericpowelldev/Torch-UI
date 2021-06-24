import React from "react";

import Header from "components/layout/header/Header";
import Main from "components/layout/_Main";
import Footer from "components/layout/footer/Footer";

import Sidebar from "components/layout/sidebar/Sidebar";

//////////////////////// COMPONENT ////////////////////////
export default function Wrapper(props) {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      <Footer />

      <Sidebar />
      
      {/* <Loading /> */}
      {/* <Preview /> */}
      {/* <ScrollToTop /> */}
    </>
  );
}
