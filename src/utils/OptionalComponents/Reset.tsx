// DEPENDENCIES -------------------------------------------------- //

import React from "react";

import "static/styles/reset.css";

// PROPS -------------------------------------------------- //

interface ResetProps {
  children?: React.ReactNode;
}

// COMPONENT -------------------------------------------------- //

const Reset = ({ children }: ResetProps) => {
  return <React.Fragment>{children}</React.Fragment>;
};

// EXPORT -------------------------------------------------- //

export default Reset;
