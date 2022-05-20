//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

import { boolValues, colorValues, tintValues } from "utils/standards";

import useColors from "hooks/useColors";
import useLoadingIcon from "./useLoadingIcon";

//////////////////////// STYLED-COMPONENTS ////////////////////////

const spinKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const MyBase = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0;
  border: 0;
  margin: 0;
  line-height: 1;
  user-select: none;
`;

//////////////////////// COMPONENT ////////////////////////

function LoadingIcon({ children, className, classes, type, color, tint, size, thickness, speed, disabled, ...rest }) {
  // HOOKS //
  const { getColorBg, getColorFg } = useColors();
  const { getTrackSize } = useLoadingIcon();

  // DYNAMIC STYLED-COMPONENTS //
  const MyTrack = styled.div`
    position: relative;
    width: ${size}px;
    height: ${size}px;
    border: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid
      ${type === `bg` ? getColorBg(color, tint, disabled, `fg`) : getColorFg(color, tint, disabled)};
    border-radius: 50%;
    background-color: transparent;
    opacity: 25%;
  `;

  const MyBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${size}px;
    height: ${size}px;
    border: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid transparent;
    border-top: ${thickness ? `${thickness}px` : `${getTrackSize(size)}px`} solid
      ${type === `bg` ? getColorBg(color, tint, disabled, `fg`) : getColorFg(color, tint, disabled)};
    border-radius: 50%;
    background-color: transparent;
    animation: ${spinKeyframes} ${speed}ms linear infinite;
  `;

  // CLASSNAMES ROOT //
  const getClassNames_root = (name) => {
    let classNames = [];
    if (className) classNames.push(className);
    if (classes && classes.root) classNames.push(classes.root);
    if (classes && name && classes[name]) classNames.push(classes[name]);
    return classNames.join(` `);
  };

  // CLASSNAMES //
  const getClassNames = (name) => {
    let classNames = [];
    if (classes && name && classes[name]) classNames.push(classes[name]);
    return classNames.join(` `);
  };

  // RETURN //
  return (
    <MyBase className={getClassNames_root(`base`)} {...rest}>
      <MyTrack className={getClassNames(`track`)} />
      <MyBar className={getClassNames(`bar`)} />
    </MyBase>
  );
}

//////////////////////// PROPS ////////////////////////

LoadingIcon.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,

  type: PropTypes.oneOf([`bg`, `fg`]),
  color: PropTypes.oneOf([`black`, `white`, ...colorValues]),
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
