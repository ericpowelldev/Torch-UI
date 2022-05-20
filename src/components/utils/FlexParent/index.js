//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { useFui } from "providers/Fui";
import useSpace from "hooks/useSpace";

//////////////////////// COMPONENT ////////////////////////

function FlexParent({ children, className, classes, space, direction, alignContent, alignItems, justifyContent, justifyItems, ...rest }) {
  // HOOKS //
  const { theme } = useFui();
  const { getSpaceSize } = useSpace();

  // DYNAMIC STYLED-COMPONENTS //
  const MyFlexParent = styled.div`
    position: relative;
    display: flex;
    width: 100%;

    ${alignContent &&
    css`
      align-content: ${alignContent};
    `}
    ${alignItems &&
    css`
      align-items: ${alignItems};
    `}
    ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
    ${justifyItems &&
    css`
      justify-items: ${justifyItems};
    `}
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
    <MyFlexParent className={getClassNames_root(`parent`)} {...rest}>
      {children}
    </MyFlexParent>
  );
}

//////////////////////// PROPS ////////////////////////

FlexParent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,
};

FlexParent.defaultProps = {
  className: null,
  classes: null,
  style: null,
};

//////////////////////// EXPORT ////////////////////////

export default FlexParent;
