//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { useTUI } from "providers/TUI";

//////////////////////// COMPONENT ////////////////////////

function FlexChild({ children, className, classes, ...rest }) {
  // HOOKS //
  const { theme } = useTUI();

  // DYNAMIC STYLED-COMPONENTS //
  const MyFlexChild = styled.div`
    position: relative;
  `;

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
    <MyFlexChild className={getClassNames_root(`child`)} {...rest}>
      {children}
    </MyFlexChild>
  );
}

//////////////////////// PROPS ////////////////////////

FlexChild.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,
};

FlexChild.defaultProps = {
  className: null,
  classes: null,
  style: null,
};

//////////////////////// EXPORT ////////////////////////

export default FlexChild;
