//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";

//////////////////////// PROPS ////////////////////////

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
    header: string;
  };
  style?: React.CSSProperties;
}

//////////////////////// COMPONENT ////////////////////////

const Sidebar = ({ children, className, classes, ...rest }: SidebarProps) => {
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
    <aside id="sidebar" className={getClassNames_root(`sidebar`)} {...rest}>
      {children}
    </aside>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Sidebar;
