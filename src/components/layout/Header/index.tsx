//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";

import { joinClassNames } from "utils/helpers";

//////////////////////// PROPS ////////////////////////

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
  };
  style?: React.CSSProperties;

  [x: string]: any; // Handle default HTML props
}

//////////////////////// COMPONENT ////////////////////////

const Header = ({ children, className, classes, ...rest }: HeaderProps) => {
  // RETURN //
  return (
    <header id="header" className={joinClassNames(classes, `root`, className)} {...rest}>
      {children}
    </header>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Header;
