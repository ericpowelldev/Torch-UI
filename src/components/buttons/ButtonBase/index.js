//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import { useFui } from "providers/Fui";
import { createUseStyles } from "react-jss";

//////////////////////// COMPONENT ////////////////////////

function ButtonBase({ children, className, onClick, ...props }) {
  const { theme } = useFui();
  const useStyles = createUseStyles(
    {
      root: {
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

  const getClassNames = () => {
    let classNames = [cls.root];
    if (className) classNames.push(className);
    return classNames.join(` `);
  };

  return (
    <button className={getClassNames()} onClick={onClick || null} {...props}>
      {children}
    </button>
  );
}

//////////////////////// PROPS ////////////////////////

ButtonBase.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

ButtonBase.defaultProps = {
  className: null,
  style: null,
};

//////////////////////// EXPORT ////////////////////////

export default ButtonBase;
