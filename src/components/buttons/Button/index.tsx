// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import clsx from "clsx";
import styled, { css } from "styled-components";

import { BoolValues, ButtonVariants, ColorValues, SizeValues, TintValues } from "utils/types";

import { useTUI } from "providers/TUI";
import useColors from "hooks/useColors";
import useButton from "hooks/useButton";

import ErrorIcon from "components/utils/ErrorIcon";
import WarningIcon from "components/utils/WarningIcon";
import LoadingIcon from "components/utils/LoadingIcon";
import SuccessIcon from "components/utils/SuccessIcon";

// PROPS -------------------------------------------------- //

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root?: string;
    button?: string;
    label?: string;
    startIcon?: string;
    endIcon?: string;
    loadingIcon?: string;
    warningIcon?: string;
    errorIcon?: string;
    successIcon?: string;
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
  const { getRootPadding, getLabelSize, getIconSize } = useButton();

  // DYNAMIC STYLED-COMPONENTS //

  // const MyButton = styled.button`
  //   position: relative;
  //   overflow: hidden;
  //   display: inline-flex;
  //   align-items: center;
  //   justify-content: center;
  //   padding: 0;
  //   border: 0;
  //   border-radius: ${theme.space(1)};
  //   margin: 0;
  //   line-height: ${theme.text.heightButton};
  //   font-family: ${theme.text.familyButton};
  //   font-size: ${theme.text.sizeButton};
  //   font-weight: ${theme.text.weightButton};
  //   background: inherit;
  //   color: inherit;
  //   cursor: pointer;
  //   transition: ${theme.transition.button};
  //   user-select: none;

  //   ${variant === `solid` &&
  //   css`
  //     width: ${fullWidth ? `100%` : `inherit`};
  //     padding: ${getRootPadding(size)};
  //     background-color: ${getColorBg(color, tint, disabled)};
  //     color: ${getColorFg(color, tint, disabled)};

  //     &:hover {
  //       background-color: ${getColorHover(color, tint, `solid`)};
  //       @media (hover: none) {
  //         background-color: ${getColorBg(color, tint, disabled)};
  //       }
  //     }

  //     &:active {
  //       background-color: ${getColorActive(color, tint, `solid`)};
  //       transition: ${theme.transition.none};
  //     }

  //     /* &::after {
  //       content: "";
  //       position: absolute;
  //       top: 0;
  //       left: 0;
  //       width: 100%;
  //       height: 100%;
  //       background-color: ${theme.color.grayscale["a0"]};
  //       transition: ${theme.transition.button};
  //     }

  //     &:hover {
  //       &::after {
  //         background-color: ${theme.color.grayscale["a200"]};
  //       }
  //       @media (hover: none) {
  //         &::after {
  //           background-color: ${theme.color.grayscale["a0"]};
  //         }
  //       }
  //     }

  //     &:active {
  //       &::after {
  //         background-color: ${theme.color.grayscale["a400"]};
  //         transition: ${theme.transition.none};
  //       }
  //     } */
  //   `}

  //   ${variant === `outline` &&
  //   css`
  //     width: ${fullWidth ? `100%` : `inherit`};
  //     padding: ${getRootPadding(size)};
  //     outline: 1px solid ${getColorBg(color, tint, disabled, `fg`)};
  //     outline-offset: -1px;
  //     background-color: transparent;
  //     color: ${getColorBg(color, tint, disabled, `fg`)};

  //     &:hover {
  //       background-color: ${getColorHover(color, tint, `outline`)};
  //       @media (hover: none) {
  //         background-color: transparent;
  //       }
  //     }

  //     &:active {
  //       background-color: ${getColorActive(color, tint, `outline`)};
  //       transition: ${theme.transition.none};
  //     }
  //   `}

  //   ${variant === `transparent` &&
  //   css`
  //     width: ${fullWidth ? `100%` : `inherit`};
  //     padding: ${getRootPadding(size)};
  //     background-color: ${getColorBg(color, tint, disabled, `fg`)}24;
  //     color: ${getColorBg(color, tint, disabled, `fg`)};

  //     &:hover {
  //       background-color: ${getColorHover(color, tint, `transparent`)};
  //       @media (hover: none) {
  //         background-color: ${getColorBg(color, tint, disabled, `fg`)}24;
  //       }
  //     }

  //     &:active {
  //       background-color: ${getColorActive(color, tint, `transparent`)};
  //       transition: ${theme.transition.none};
  //     }
  //   `}

  //   ${variant === `link` &&
  //   css`
  //     width: ${fullWidth ? `100%` : `inherit`};
  //     padding: ${getRootPadding(size)};
  //     background-color: transparent;
  //     color: ${getColorBg(color, tint, disabled, `fg`)};

  //     &:hover {
  //       background-color: ${getColorHover(color, tint, `link`)};
  //       @media (hover: none) {
  //         background-color: transparent;
  //       }
  //     }

  //     &:active {
  //       background-color: ${getColorActive(color, tint, `link`)};
  //       transition: ${theme.transition.none};
  //     }
  //   `}

  //   ${disabled &&
  //   css`
  //     cursor: not-allowed;
  //     user-select: none;
  //     pointer-events: none;
  //   `}
  // `;

  // const MyLabel = styled.span`
  //   line-height: ${theme.text.height};
  //   font-size: ${getLabelSize(size)};
  //   font-weight: 600;
  //   text-transform: ${!uppercase ? `inherit` : `uppercase`};
  //   user-select: none;
  //   pointer-events: none;
  // `;

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

  // CLASSNAMES //

  const clsxButton =
    clsx(
      `btn`,
      `btn-${variant}-${color}-${tint}`,
      disabled && `btn-${variant}-disabled`,
      `btn-${size}`,
      fullWidth && `btn-fullwidth`,
      classes?.root,
      classes?.button,
      className
    ) || undefined;
  const clsxLabel = clsx(`btn-label`, `btn-label-${size}`, uppercase && `btn-label-uppercase`, classes?.label) || undefined;
  const clsxStartIcon = clsx(classes?.startIcon) || undefined;
  const clsxEndIcon = clsx(classes?.endIcon) || undefined;
  const clsxLoadingIcon = clsx(classes?.loadingIcon) || undefined;
  const clsxWarningIcon = clsx(classes?.warningIcon) || undefined;
  const clsxErrorIcon = clsx(classes?.errorIcon) || undefined;
  const clsxSuccessIcon = clsx(classes?.successIcon) || undefined;

  // RENDER //

  return (
    <button className={clsxButton} {...rest}>
      {icon ? <MyStartIcon className={clsxStartIcon}>{icon}</MyStartIcon> : null}

      <span className={clsxLabel}>{children}</span>

      {loading ? (
        <MyEndIcon className={clsxEndIcon}>
          <LoadingIcon
            className={clsxLoadingIcon}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </MyEndIcon>
      ) : warning ? (
        <MyEndIcon className={clsxEndIcon}>
          <WarningIcon
            className={clsxWarningIcon}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </MyEndIcon>
      ) : error ? (
        <MyEndIcon className={clsxEndIcon}>
          <ErrorIcon
            className={clsxErrorIcon}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </MyEndIcon>
      ) : success ? (
        <MyEndIcon className={clsxEndIcon}>
          <SuccessIcon
            className={clsxSuccessIcon}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </MyEndIcon>
      ) : null}
    </button>
  );
};

// EXPORT -------------------------------------------------- //

export default Button;
