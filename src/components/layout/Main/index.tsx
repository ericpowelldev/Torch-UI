//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";

//////////////////////// PROPS ////////////////////////

interface MainProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
    header: string;
  };
  style?: React.CSSProperties;
}

//////////////////////// COMPONENT ////////////////////////

const Main = ({ children, className, classes, ...rest }: MainProps) => {
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
    <main id="main" className={getClassNames_root(`main`)} {...rest}>
      {children}
    </main>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Main;
