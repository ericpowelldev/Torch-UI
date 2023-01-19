//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";

import { joinClassNames } from "utils/helpers";

//////////////////////// PROPS ////////////////////////

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
  };
  style?: React.CSSProperties;

  [x: string]: any; // Handle default HTML props
}

//////////////////////// COMPONENT ////////////////////////

const Footer = ({ children, className, classes, ...rest }: FooterProps) => {
  // RETURN //
  return (
    <footer id="footer" className={joinClassNames(classes, `root`, className)} {...rest}>
      {children}
    </footer>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Footer;
