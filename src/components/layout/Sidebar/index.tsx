//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";

import { joinClassNames } from "utils/helpers";

//////////////////////// PROPS ////////////////////////

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
  };
  style?: React.CSSProperties;

  [x: string]: any; // Handle default HTML props
}

//////////////////////// COMPONENT ////////////////////////

const Sidebar = ({ children, className, classes, ...rest }: SidebarProps) => {
  // RETURN //
  return (
    <aside id="sidebar" className={joinClassNames(classes, `root`, className)} {...rest}>
      {children}
    </aside>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Sidebar;
