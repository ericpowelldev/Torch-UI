// DEPENDENCIES -------------------------------------------------- //

import React from "react";

import Header from "components/layout/Header";
import Main from "components/layout/Main";
import Footer from "components/layout/Footer";

import Sidebar from "components/layout/Sidebar";

// PROPS -------------------------------------------------- //

interface LayoutProps {
  children?: React.ReactNode;
}

// COMPONENT -------------------------------------------------- //

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative w-screen h-screen bg-zinc-900">
      <Header />
      <Main>{children}</Main>
      <Footer />

      <Sidebar />

      {/* <ScrollToTop /> */}
    </div>
  );
};

// EXPORT -------------------------------------------------- //

export default Layout;
