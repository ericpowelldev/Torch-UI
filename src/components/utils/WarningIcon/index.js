//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

import { boolValues, colorValues, tintValues } from "utils/standards";

import useColors from "hooks/useColors";

import { AiOutlineWarning } from "react-icons/ai";

//////////////////////// STYLED-COMPONENTS ////////////////////////

const blinkKeyframes = keyframes`
  0% {
    opacity: 0.5;
  }
  45% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

//////////////////////// COMPONENT ////////////////////////

function WarningIcon({ children, className, classes, type, color, tint, size, speed, blink, disabled, ...rest }) {
  // HOOKS //
  const { getColorBg, getColorFg } = useColors();

  // CLASSNAMES ROOT //
  const getClassNames_root = (name) => {
    let classNames = [];
    if (className) classNames.push(className);
    if (classes && classes.root) classNames.push(classes.root);
    if (classes && name && classes[name]) classNames.push(classes[name]);
    return classNames.join(` `);
  };

  // BASE COMPONENT //
  const Icon = ({ className }) => <AiOutlineWarning className={className + ` ` + getClassNames_root(`icon`)} {...rest} />;

  // DYNAMIC STYLED-COMPONENTS //
  const MyIcon = styled(Icon)`
    position: relative;
    display: block;
    width: ${size}px;
    height: ${size}px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    margin: 0;
    line-height: 1;
    user-select: none;
    animation: ${blinkKeyframes} ${blink ? speed : 0}ms infinite;
    color: ${type === `bg` ? getColorBg(color, tint, disabled, `fg`) : getColorFg(color, tint, disabled)};
  `;

  // RETURN //
  return <MyIcon {...rest} />;
}

//////////////////////// PROPS ////////////////////////

WarningIcon.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,

  type: PropTypes.oneOf([`bg`, `fg`]),
  color: PropTypes.oneOf([`black`, `white`, ...colorValues]),
  tint: PropTypes.oneOf(tintValues),
  size: PropTypes.number,
  speed: PropTypes.number,

  blink: PropTypes.oneOf(boolValues),

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
  speed: 1600,

  blink: true,

  disabled: false,
};

//////////////////////// EXPORT ////////////////////////

export default WarningIcon;
