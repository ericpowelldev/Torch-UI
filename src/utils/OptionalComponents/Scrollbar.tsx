// DEPENDENCIES -------------------------------------------------- //

import React from "react";

import "static/styles/scrollbar.css";

// PROPS -------------------------------------------------- //

interface ScrollbarProps {
  children?: React.ReactNode;
}

// COMPONENT -------------------------------------------------- //

const Scrollbar = ({ children }: ScrollbarProps) => {
  return <React.Fragment>{children}</React.Fragment>;
};

// EXPORT -------------------------------------------------- //

export default Scrollbar;
