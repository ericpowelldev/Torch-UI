//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import { useColors } from "hooks/useColors";
import { createUseStyles } from "react-jss";

//////////////////////// COMPONENT ////////////////////////

function Spinner(props) {
  const { children, className, type, color, tint, size, thickness, speed, ...rest } = props;

  const { getColorBg, getColorFg } = useColors();

  const getTrackSize = (size) => {
    if (size > 48) return `${size / 8}px`;
    if (size > 36) return `${size / 6}px`;
    if (size > 24) return `${size / 5}px`;
    if (size > 12) return `${size / 4}px`;
    return `${size / 2}px`;
  };

  // Create styles
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
          props.type === `bg` ? getColorBg(props.color, props.tint) : getColorFg(props.color, props.tint)
        }40`,
        borderRadius: `50%`,
        backgroundColor: `transparent`,
      }),
      bar: (props) => ({
        position: `absolute`,
        top: 0,
        left: 0,
        width: `${props.size}px`,
        height: `${props.size}px`,
        border: `${props.thickness ? `${props.thickness}px` : getTrackSize(props.size)} solid transparent`,
        borderTop: `${props.thickness ? `${props.thickness}px` : getTrackSize(props.size)} solid ${
          props.type === `bg` ? getColorBg(props.color, props.tint) : getColorFg(props.color, props.tint)
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
      name: `FuiSpinner`,
      index: 2,
    }
  );
  const cls = useStyles(props);

  const getClassNames = () => {
    let classNames = [cls.root];
    if (className) classNames.push(className);
    return classNames.join(` `);
  };

  return (
    <div className={getClassNames()} {...rest}>
      <div className={cls.track} />
      <div className={cls.bar} />
    </div>
  );
}

//////////////////////// PROPS ////////////////////////

Spinner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,

  type: PropTypes.oneOf([`bg`, `fg`]),
  color: PropTypes.oneOf([`default`, `primary`, `secondary`, `tertiary`, `info`, `error`, `warning`, `success`]),
  tint: PropTypes.oneOf([`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`]),
  size: PropTypes.number,
  thickness: PropTypes.number,
  speed: PropTypes.number,
};

Spinner.defaultProps = {
  className: null,
  style: null,

  type: `bg`,
  color: `default`,
  tint: `500`,
  size: 40,
  thickness: 0,
  speed: 500,
};

//////////////////////// EXPORT ////////////////////////

export default Spinner;
