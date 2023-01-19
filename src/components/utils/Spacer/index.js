//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { boolValues } from "utils/standards";

import { useTUI } from "providers/TUI";
import useSpacer from "hooks/useSpace";

//////////////////////// COMPONENT ////////////////////////

function Spacer({ children, className, classes, size, vertical, ...rest }) {
  // HOOKS //
  const { theme } = useTUI();
  const { getSpaceSize } = useSpacer();

  // DYNAMIC STYLED-COMPONENTS //
  const MyHorizontalSpacer = styled.div`
    position: relative;
    width: 100%;
    height: ${theme.space(getSpaceSize(size))};
  `;

  const MyVerticalSpacer = styled.div`
    position: relative;
    width: ${theme.space(getSpaceSize(size))};
    height: auto;
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
    <>
      {!vertical ? (
        <MyHorizontalSpacer className={getClassNames_root(`spacer`)} {...rest} />
      ) : (
        <MyVerticalSpacer className={getClassNames_root(`spacer`)} {...rest} />
      )}
    </>
  );
}

//////////////////////// PROPS ////////////////////////

Spacer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,

  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  vertical: PropTypes.oneOf(boolValues),
};

Spacer.defaultProps = {
  className: null,
  classes: null,
  style: null,

  size: 4,

  vertical: false,
};

//////////////////////// EXPORT ////////////////////////

export default Spacer;
