//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";

import { joinClassNames } from "utils/helpers";

//////////////////////// PROPS ////////////////////////

interface MainProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
  };
  style?: React.CSSProperties;

  [x: string]: any; // Handle default HTML props
}

//////////////////////// COMPONENT ////////////////////////

const Main = ({ children, className, classes, ...rest }: MainProps) => {
  // RETURN //
  return (
    <main id="main" className={joinClassNames(classes, `root`, className)} {...rest}>
      {children}
    </main>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Main;
