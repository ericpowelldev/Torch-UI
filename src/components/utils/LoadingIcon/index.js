//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import { boolValues, colorValues, tintValues } from "utils/standards";
import { useColors } from "hooks/useColors";
import { useLoadingIcon } from "./useLoadingIcon";

//////////////////////// COMPONENT ////////////////////////

function LoadingIcon(props) {
  const { children, className, classes, type, color, tint, size, thickness, speed, disabled, ...rest } = props;

  // HOOKS //
  const { getColorBg, getColorFg } = useColors();
  const { getTrackSize } = useLoadingIcon();

  // STYLES //
  const useStyles = createUseStyles(
    {
      root: {
        position: `relative`,
        overflow: `hidden`,
        padding: 0,
        border: 0,
        margin: 0,
        lineHeight: 1,
        userSelect: `none`,
      },
      track: (props) => ({
        position: `relative`,
        width: `${props.size}px`,
        height: `${props.size}px`,
        border: `${props.thickness ? `${props.thickness}px` : getTrackSize(props.size)} solid ${
          props.type === `bg` ? getColorBg(props.color, props.tint, props.disabled) : getColorFg(props.color, props.tint, props.disabled)
        }`,
        borderRadius: `50%`,
        backgroundColor: `transparent`,
        opacity: 0.25,
      }),
      bar: (props) => ({
        position: `absolute`,
        top: 0,
        left: 0,
        width: `${props.size}px`,
        height: `${props.size}px`,
        border: `${props.thickness ? `${props.thickness}px` : getTrackSize(props.size)} solid transparent`,
        borderTop: `${props.thickness ? `${props.thickness}px` : getTrackSize(props.size)} solid ${
          props.type === `bg` ? getColorBg(props.color, props.tint, props.disabled) : getColorFg(props.color, props.tint, props.disabled)
        }`,
        borderRadius: `50%`,
        backgroundColor: `transparent`,
        animation: `$spin ${props.speed}ms linear infinite`,
      }),
      "@keyframes spin": {
        from: {
          transform: `rotate(0deg)`,
        },
        to: {
          transform: `rotate(360deg)`,
        },
      },
    },
    {
      name: `FuiLoadingIcon`,
      index: 2,
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
  return (
    <div className={getClassNames_root()} {...rest}>
      <div className={getClassNames(`track`)} />
      <div className={getClassNames(`bar`)} />
    </div>
  );
}

//////////////////////// PROPS ////////////////////////

LoadingIcon.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,

  type: PropTypes.oneOf([`bg`, `fg`]),
  color: PropTypes.oneOf(colorValues),
  tint: PropTypes.oneOf(tintValues),
  size: PropTypes.number,
  thickness: PropTypes.number,
  speed: PropTypes.number,

  disabled: PropTypes.oneOf(boolValues),
};

LoadingIcon.defaultProps = {
  className: null,
  classes: null,
  style: null,

  type: `bg`,
  color: `default`,
  tint: `500`,
  size: 40,
  thickness: 0,
  speed: 500,

  disabled: false,
};

//////////////////////// EXPORT ////////////////////////

export default LoadingIcon;
