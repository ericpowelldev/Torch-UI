//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import { useFui } from "providers/Fui";

//////////////////////// COMPONENT ////////////////////////

function ButtonBase(props) {
  const { children, classes, className, ...rest } = props;

  // HOOKS //
  const { theme } = useFui();

  // STYLES //
  const useStyles = createUseStyles(
    {
      root: {
        position: `relative`,
        overflow: `hidden`,
        display: `inline-flex`,
        alignItems: `center`,
        padding: 0,
        border: 0,
        borderRadius: theme.radius(1),
        margin: 0,
        lineHeight: theme.txt.fontHeight,
        fontFamily: theme.txt.fontFamily,
        fontSize: 14,
        fontWeight: 600,
        background: `inherit`,
        color: `inherit`,
        cursor: `pointer`,
        transition: theme.trans(0.2),
        userSelect: `none`,
      },
    },
    {
      name: `FuiButtonBase`,
      index: 0,
    }
  );
  const cls = useStyles();

  // CLASS - generic //
  const getClassNames = (name) => {
    let classNames = [cls[name]];
    if (classes && classes[name]) classNames.push(classes[name]);
    return classNames.join(` `);
  };

  // CLASS - root //
  const getClassNames_root = () => {
    let classNames = [cls.root];
    if (className) classNames.push(className);
    if (classes && classes.root) classNames.push(classes.root);
    return classNames.join(` `);
  };

  // RETURN //
  return (
    <button className={getClassNames_root()} {...rest}>
      <span className={getClassNames(`label`)}>{children}</span>
    </button>
  );
}

//////////////////////// PROPS ////////////////////////

ButtonBase.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,
};

ButtonBase.defaultProps = {
  className: null,
  classes: null,
  style: null,
};

//////////////////////// EXPORT ////////////////////////

export default ButtonBase;
