//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import { boolValues, colorValues, tintValues } from "utils/standards";
import { useColors } from "hooks/useColors";

import { AiOutlineWarning } from "react-icons/ai";

//////////////////////// COMPONENT ////////////////////////

function WarningIcon(props) {
  const { children, className, classes, type, color, tint, size, disabled, ...rest } = props;

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
        color: props.type === `bg` ? getColorBg(props.color, props.tint, props.disabled) : getColorFg(props.color, props.tint, props.disabled),
      }),
    },
    {
      name: `FuiWarningIcon`,
      index: 3,
    }
  );
  const cls = useStyles(props);

  // CLASSNAMES //
  const getClassNames = (name) => {
    let classNames = [cls[name]];
    if (classes && classes[name]) classNames.push(classes[name]);
    return classNames.join(` `);
  };

  // CLASSNAMES - root //
  const getClassNames_root = () => {
    let classNames = [cls.root];
    if (className) classNames.push(className);
    if (classes && classes.root) classNames.push(classes.root);
    return classNames.join(` `);
  };

  // RETURN //
  return <AiOutlineWarning className={getClassNames_root()} {...rest} />;
}

//////////////////////// PROPS ////////////////////////

WarningIcon.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,

  type: PropTypes.oneOf([`bg`, `fg`]),
  color: PropTypes.oneOf(colorValues),
  tint: PropTypes.oneOf(tintValues),
  size: PropTypes.number,

  disabled: PropTypes.oneOf(boolValues),
};

WarningIcon.defaultProps = {
  className: null,
  classes: null,
  style: null,

  type: `bg`,
  color: `default`,
  tint: `500`,
  size: 40,

  disabled: false,
};

//////////////////////// EXPORT ////////////////////////

export default WarningIcon;
