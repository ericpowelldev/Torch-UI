// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import styled, { css } from "styled-components";

import { cls } from "utils/helpers";
import { BoolValues, ButtonVariants, ColorValues, SizeValues, TintValues } from "utils/types";

import { useTUI } from "providers/TUI";
import useColors from "hooks/useColors";
import useButton from "./useButton";

import ErrorIcon from "components/utils/ErrorIcon";
import WarningIcon from "components/utils/WarningIcon";
import LoadingIcon from "components/utils/LoadingIcon";
import SuccessIcon from "components/utils/SuccessIcon";

// PROPS -------------------------------------------------- //

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
    label: string;
    icon: string;
    loadingIcon: string;
    warningIcon: string;
    errorIcon: string;
    successIcon: string;
  };
  style?: React.CSSProperties;

  color?: ColorValues;
  tint?: TintValues;
  size?: SizeValues;
  variant?: ButtonVariants;

  tooltip?: React.ReactNode;
  icon?: React.ReactNode;

  fullWidth?: BoolValues;
  uppercase?: BoolValues;

  disabled?: BoolValues;
  error?: BoolValues;
  warning?: BoolValues;
  loading?: BoolValues;
  success?: BoolValues;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT -------------------------------------------------- //

const Button = ({
  children,
  className,
  classes,
  color = `utility`,
  tint = `500`,
  size = `md`,
  variant = `solid`,
  tooltip,
  icon,
  fullWidth,
  uppercase = true,
  disabled,
  error,
  warning,
  loading,
  success,
  ...rest
}: ButtonProps) => {
  // HOOKS //

  const { theme } = useTUI();
  const { getColorBg, getColorFg, getColorHover, getColorActive } = useColors();
  const { getRootPadding, getOutlinePadding, getLabelSize, getIconSize, getLabelWeight } = useButton();

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
    line-height: ${theme.txt.fontHeightButton};
    font-family: ${theme.txt.fontFamilyButton};
    font-size: ${theme.txt.fontSizeButton};
    font-weight: ${theme.txt.fontWeightButton};
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

  // RENDER //

  return (
    <MyButton className={cls(classes, `root`, className)} {...rest}>
      {icon ? <MyStartIcon className={cls(classes, `icon`)}>{icon}</MyStartIcon> : null}
      <MyLabel className={cls(classes, `label`)}>{children}</MyLabel>
      {loading ? (
        <MyEndIcon>
          <LoadingIcon
            className={cls(classes, `loadingIcon`)}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </MyEndIcon>
      ) : error ? (
        <MyEndIcon>
          <ErrorIcon
            className={cls(classes, `errorIcon`)}
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
            className={cls(classes, `warningIcon`)}
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
            className={cls(classes, `successIcon`)}
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
};

// EXPORT -------------------------------------------------- //

export default Button;
