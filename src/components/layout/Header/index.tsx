//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";

//////////////////////// PROPS ////////////////////////

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
    header: string;
  };
  style?: React.CSSProperties;
}

//////////////////////// COMPONENT ////////////////////////

const Header = ({ children, className, classes, ...rest }: HeaderProps) => {
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
    <header id="header" className={getClassNames_root(`header`)} {...rest}>
      {children}
    </header>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Header;
