//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { boolValues, colorValues, tintValues, sizeValues } from "utils/standards";

import { useFui } from "providers/Fui";
import useColors from "hooks/useColors";
import useButton from "./useButton";

import ErrorIcon from "components/utils/ErrorIcon";
import WarningIcon from "components/utils/WarningIcon";
import LoadingIcon from "components/utils/LoadingIcon";
import SuccessIcon from "components/utils/SuccessIcon";

//////////////////////// COMPONENT ////////////////////////

function Button({
  children,
  className,
  classes,
  color,
  tint,
  size,
  variant,
  tooltip,
  icon,
  fullWidth,
  uppercase,
  disabled,
  error,
  warning,
  loading,
  success,
  ...rest
}) {
  // HOOKS //
  const { theme } = useFui();
  const { getColorBg, getColorFg, getColorHover, getColorActive } = useColors();
  const { getRootPadding, getOutlinePadding, getLabelSize, getIconSize, getLabelWeight } = useButton();

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

  // DYNAMIC STYLED-COMPONENTS //
  const MyButton = styled.button`
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: ${theme.space(1)};
    margin: 0;
    line-height: ${theme.txt.fontHeightReset};
    font-family: ${theme.txt.fontFamily};
    font-size: 14;
    font-weight: 600;
    background: inherit;
    color: inherit;
    cursor: pointer;
    transition: ${theme.trans(0.15)};
    user-select: none;

    ${variant === `solid` &&
    css`
      width: ${fullWidth ? `100%` : `inherit`};
      padding: ${getRootPadding(size)};
      background-color: ${getColorBg(color, tint, disabled)};
      color: ${getColorFg(color, tint, disabled)};

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.color.white.alpha[0]};
        transition: ${theme.trans(0.15)};
      }

      &:hover {
        &::after {
          background-color: ${theme.color.white.alpha[4]};
        }
        @media (hover: none) {
          &::after {
            background-color: ${theme.color.white.alpha[0]};
          }
        }
      }

      &:active {
        &::after {
          background-color: ${theme.color.white.alpha[6]};
          transition: ${theme.trans(0)};
        }
      }
    `}

    ${variant === `outline` &&
    css`
      width: ${fullWidth ? `100%` : `inherit`};
      padding: ${getOutlinePadding(size)};
      border: 1px solid ${getColorBg(color, tint, disabled, `fg`)};
      background-color: transparent;
      color: ${getColorBg(color, tint, disabled, `fg`)};

      &:hover {
        background-color: ${getColorHover(color, tint, `outline`)};
        @media (hover: none) {
          background-color: transparent;
        }
      }

      &:active {
        background-color: ${getColorActive(color, tint, `outline`)};
        transition: ${theme.trans(0)};
      }
    `}

    ${variant === `transparent` &&
    css`
      width: ${fullWidth ? `100%` : `inherit`};
      padding: ${getRootPadding(size)};
      background-color: ${getColorBg(color, tint, disabled, `fg`)}20;
      color: ${getColorBg(color, tint, disabled, `fg`)};

      &:hover {
        background-color: ${getColorHover(color, tint, `transparent`)};
        @media (hover: none) {
          background-color: ${getColorBg(color, tint, disabled, `fg`)}20;
        }
      }

      &:active {
        background-color: ${getColorActive(color, tint, `transparent`)};
        transition: ${theme.trans(0)};
      }
    `}

    ${variant === `link` &&
    css`
      width: ${fullWidth ? `100%` : `inherit`};
      padding: ${getRootPadding(size)};
      background-color: transparent;
      color: ${getColorBg(color, tint, disabled, `fg`)};

      &:hover {
        background-color: ${getColorHover(color, tint, `link`)};
        @media (hover: none) {
          background-color: transparent;
        }
      }

      &:active {
        background-color: ${getColorActive(color, tint, `link`)};
        transition: ${theme.trans(0)};
      }
    `}

    ${disabled &&
    css`
      cursor: not-allowed;
      user-select: none;
      pointer-events: none;
    `}
  `;

  const MyLabel = styled.span`
    line-height: ${theme.txt.fontHeight};
    font-size: ${getLabelSize(size)};
    font-weight: ${getLabelWeight(variant)};
    text-transform: ${!uppercase ? `inherit` : `uppercase`};
    user-select: none;
    pointer-events: none;
  `;

  const MyStartIcon = styled.span`
    margin-right: ${theme.space(2)};
    & svg {
      display: block;
      width: ${getIconSize(size)}px;
      height: ${getIconSize(size)}px;
    }
  `;

  const MyEndIcon = styled.span`
    margin-left: ${theme.space(2)};
    & svg {
      display: block;
      width: ${getIconSize(size)}px;
      height: ${getIconSize(size)}px;
    }
  `;

  // RETURN //
  return (
    <MyButton className={getClassNames_root(`button`)} {...rest}>
      {icon ? <MyStartIcon className={getClassNames(`icon`)}>{icon}</MyStartIcon> : null}
      <MyLabel className={getClassNames(`label`)}>{children}</MyLabel>
      {error ? (
        <MyEndIcon>
          <ErrorIcon
            className={getClassNames(`errorIcon`)}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </MyEndIcon>
      ) : warning ? (
        <MyEndIcon>
          <WarningIcon
            className={getClassNames(`warningIcon`)}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </MyEndIcon>
      ) : loading ? (
        <MyEndIcon>
          <LoadingIcon
            className={getClassNames(`loadingIcon`)}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </MyEndIcon>
      ) : success ? (
        <MyEndIcon>
          <SuccessIcon
            className={getClassNames(`successIcon`)}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </MyEndIcon>
      ) : null}
    </MyButton>
  );
}

//////////////////////// PROPS ////////////////////////

Button.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,

  color: PropTypes.oneOf(colorValues),
  tint: PropTypes.oneOf(tintValues),
  size: PropTypes.oneOf(sizeValues),
  variant: PropTypes.oneOf([`solid`, `outline`, `transparent`, `link`]),

  tooltip: PropTypes.node,
  icon: PropTypes.node,

  fullWidth: PropTypes.oneOf(boolValues),
  uppercase: PropTypes.oneOf(boolValues),

  disabled: PropTypes.oneOf(boolValues),
  error: PropTypes.oneOf(boolValues),
  warning: PropTypes.oneOf(boolValues),
  loading: PropTypes.oneOf(boolValues),
  success: PropTypes.oneOf(boolValues),
};

Button.defaultProps = {
  className: null,
  classes: null,
  style: null,

  color: `default`,
  tint: `500`,
  size: `md`,
  variant: `solid`,

  tooltip: null,
  icon: null,

  fullWidth: false,
  uppercase: true,

  disabled: false,
  error: false,
  warning: false,
  loading: false,
  success: false,
};

//////////////////////// EXPORT ////////////////////////

export default Button;
