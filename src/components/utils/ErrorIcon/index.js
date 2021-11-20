//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import { boolValues, colorValues, tintValues } from "utils/standards";
import { useColors } from "hooks/useColors";
import { createUseStyles } from "react-jss";

import { MdError } from "react-icons/md";

//////////////////////// COMPONENT ////////////////////////

function ErrorIcon(props) {
  const { children, className, classes, type, color, tint, size, speed, blink, disabled, ...rest } = props;

  // HOOKS //
  const { getColorBg, getColorFg } = useColors();

  // STYLES //
  const useStyles = createUseStyles(
    {
      root: (props) => ({
        position: `relative`,
        display: `block`,
        width: props.size,
        height: props.size,
        padding: 0,
        border: 0,
        margin: 0,
        lineHeight: 1,
        userSelect: `none`,
        animation: props.blink ? `$blink ${props.speed}ms infinite` : `none`,
        color: props.type === `bg` ? getColorBg(props.color, props.tint, props.disabled) : getColorFg(props.color, props.tint, props.disabled),
      }),
      "@keyframes blink": {
        "0%": {
          opacity: 1,
        },
        "50%": {
          opacity: 0.5,
        },
        "100%": {
          opacity: 1,
        },
      },
    },
    {
      name: `FuiErrorIcon`,
      index: 4,
    }
  );
  const cls = useStyles(props);

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
  return <MdError className={getClassNames_root()} {...rest} />;
}

//////////////////////// PROPS ////////////////////////

ErrorIcon.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,

  type: PropTypes.oneOf([`bg`, `fg`]),
  color: PropTypes.oneOf(colorValues),
  tint: PropTypes.oneOf(tintValues),
  size: PropTypes.number,
  speed: PropTypes.number,

  blink: PropTypes.oneOf(boolValues),

  disabled: PropTypes.oneOf(boolValues),
};

ErrorIcon.defaultProps = {
  className: null,
  classes: null,
  style: null,

  type: `bg`,
  color: `default`,
  tint: `500`,
  size: 40,
  speed: 1000,

  blink: true,

  disabled: false,
};

//////////////////////// EXPORT ////////////////////////

export default ErrorIcon;
