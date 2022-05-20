//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";

//////////////////////// COMPONENT ////////////////////////

function Sidebar({ children, className, classes, ...rest }) {
  // CLASSNAMES ROOT //
  const getClassNames_root = (name) => {
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
}

//////////////////////// PROPS ////////////////////////

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,
};

Sidebar.defaultProps = {
  className: null,
  classes: null,
  style: null,
};

//////////////////////// EXPORT ////////////////////////

export default Sidebar;
