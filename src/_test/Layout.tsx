// DEPENDENCIES -------------------------------------------------- //

import React from "react";

// PROPS -------------------------------------------------- //

interface LayoutProps {
  children?: React.ReactNode;
}

// COMPONENT -------------------------------------------------- //

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

// EXPORT -------------------------------------------------- //

export default Layout;
