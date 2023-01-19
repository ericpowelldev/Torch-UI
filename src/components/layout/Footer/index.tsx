//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";

//////////////////////// PROPS ////////////////////////

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
    footer: string;
  };
  style?: React.CSSProperties;
}

//////////////////////// COMPONENT ////////////////////////

const Footer = ({ children, className, classes, ...rest }: FooterProps) => {
  // CLASSNAMES ROOT //
  const getClassNames_root = (name: string) => {
    let classNames = [];
    if (className) classNames.push(className);
    if (classes && classes.root) classNames.push(classes.root);
    if (classes && name && classes[name]) classNames.push(classes[name]);
    return classNames.join(` `);
  };

  // RETURN //
  return (
    <footer id="footer" className={getClassNames_root(`footer`)} {...rest}>
      {children}
    </footer>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Footer;
