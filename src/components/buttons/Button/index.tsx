// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import clsx from "clsx";
import { css } from "@emotion/css";

import { colorValues, tintValues, BoolValues, ButtonVariantValues, ColorValues, SizeValues, TintValues } from "utils/types";

import { useTUI } from "providers/TUI";

import ErrorIcon from "components/utils/ErrorIcon";
import WarningIcon from "components/utils/WarningIcon";
import LoadingIcon from "components/utils/LoadingIcon";
import SuccessIcon from "components/utils/SuccessIcon";

// HELPERS -------------------------------------------------- //

/** Get button padding from size prop */
const getRootPadding = (size: string) => {
  if (size === `xs` || size === `min`) return `4px 6px`;
  if (size === `sm`) return `6px 9px`;
  if (size === `md`) return `8px 12px`;
  if (size === `lg`) return `10px 15px`;
  if (size === `xl` || size === `max`) return `12px 18px`;
  return `8px 12px`;
};

/** Get button label size from size prop */
const getLabelSize = (size: string) => {
  if (size === `xs` || size === `min`) return `12px`;
  if (size === `sm`) return `13px`;
  if (size === `md`) return `14px`;
  if (size === `lg`) return `15px`;
  if (size === `xl` || size === `max`) return `16px`;
  return `14px`;
};

/** Get button icon size from size prop */
const getIconSize = (size: string) => {
  if (size === `xs` || size === `min`) return 15;
  if (size === `sm`) return 17;
  if (size === `md`) return 18;
  if (size === `lg`) return 19;
  if (size === `xl` || size === `max`) return 21;
  return 18;
};

/** Get color background from color and tint prop */
const getColorBg = (theme: any, color?: ColorValues, tint?: TintValues, disabled?: BoolValues, override?: string) => {
  if (disabled && override === `fg`) return theme.color.fgd;
  if (disabled) return theme.color.bgd;
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint];
  return theme.color.utility[`500`];
};

/** Get color foreground from color prop */
const getColorFg = (theme: any, color?: ColorValues, tint?: TintValues, disabled?: BoolValues) => {
  if (disabled) return theme.color.fgd;
  if (colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][`i${tint}`];
  return theme.color.fg[0];
};

/** Get color hover from background color prop */
const getColorHover = (theme: any, color?: ColorValues, tint?: TintValues, variant?: ButtonVariantValues) => {
  if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint] + `d4`;
  if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `48`;
  if ((variant === `outline` || variant === `simple`) && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `24`;
  return `inherit`;
};

/** Get color active from background color prop */
const getColorActive = (theme: any, color?: ColorValues, tint?: TintValues, variant?: ButtonVariantValues) => {
  if (variant === `solid` && colorValues.includes(color) && tintValues.includes(tint)) return theme.color[color][tint] + `a0`;
  if (variant === `transparent` && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `64`;
  if ((variant === `outline` || variant === `simple`) && colorValues.includes(color) && tintValues.includes(tint))
    return theme.color[color][tint] + `48`;
  return `inherit`;
};

// CLASSES -------------------------------------------------- //

const useButtonClasses = (theme: any, props: any) => {
  const { variant, color, tint, size, fullWidth, disabled } = props;

  const cls: any = {
    button_base: css`
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      padding: 0;
      border: 0;
      border-radius: ${theme.radius.button};
      margin: 0;
      line-height: ${theme.text.heightButton};
      font-family: ${theme.text.familyButton};
      font-size: ${theme.text.sizeButton};
      font-weight: ${theme.text.weightButton};
      background: inherit;
      color: inherit;
      cursor: pointer;
      transition: ${theme.transition.button};
      user-select: none;
    `,
    button_solid: css`
      background-color: ${getColorBg(theme, color, tint, disabled)};
      color: ${getColorFg(theme, color, tint, disabled)};

      &:hover {
        background-color: ${getColorHover(theme, color, tint, `solid`)};
        @media (hover: none) {
          background-color: ${getColorBg(theme, color, tint, disabled)};
        }
      }

      &:active {
        background-color: ${getColorActive(theme, color, tint, `solid`)};
        transition: ${theme.transition.none};
      }
    `,
    button_transparent: css`
      background-color: ${getColorBg(theme, color, tint, disabled, `fg`)}24;
      color: ${getColorBg(theme, color, tint, disabled, `fg`)};

      &:hover {
        background-color: ${getColorHover(theme, color, tint, `transparent`)};
        @media (hover: none) {
          background-color: ${getColorBg(theme, color, tint, disabled, `fg`)}24;
        }
      }

      &:active {
        background-color: ${getColorActive(theme, color, tint, `transparent`)};
        transition: ${theme.transition.none};
      }
    `,
    button_simple: css`
      background-color: transparent;
      color: ${getColorBg(theme, color, tint, disabled, `fg`)};

      &:hover {
        background-color: ${getColorHover(theme, color, tint, `simple`)};
        @media (hover: none) {
          background-color: transparent;
        }
      }

      &:active {
        background-color: ${getColorActive(theme, color, tint, `simple`)};
        transition: ${theme.transition.none};
      }
    `,
    button_outline: css`
      outline: 1px solid ${getColorBg(theme, color, tint, disabled, `fg`)};
      outline-offset: -1px;
      background-color: transparent;
      color: ${getColorBg(theme, color, tint, disabled, `fg`)};

      &:hover {
        background-color: ${getColorHover(theme, color, tint, `outline`)};
        @media (hover: none) {
          background-color: transparent;
        }
      }

      &:active {
        background-color: ${getColorActive(theme, color, tint, `outline`)};
        transition: ${theme.transition.none};
      }
    `,
    button_size: css`
      padding: ${getRootPadding(size)};
    `,
    button_fullWidth: css`
      width: 100%;
    `,
    button_disabled: css`
      cursor: not-allowed;
      user-select: none;
      pointer-events: none;
    `,
  };

  let classes: any = [cls.button_base];
  if (variant === `solid`) classes.push(cls.button_solid);
  if (variant === `transparent`) classes.push(cls.button_transparent);
  if (variant === `simple`) classes.push(cls.button_simple);
  if (variant === `outline`) classes.push(cls.button_outline);
  if (size) classes.push(cls.button_size);
  if (fullWidth) classes.push(cls.button_fullWidth);
  if (disabled) classes.push(cls.button_disabled);
  return classes;
};

const useLabelClasses = (theme: any, props: any) => {
  const { size, uppercase } = props;

  const cls: any = {
    label_base: css`
      line-height: ${theme.text.heightButton};
      font-family: ${theme.text.familyButton};
      font-size: ${theme.text.sizeButton};
      font-weight: ${theme.text.weightButton};
      user-select: none;
      pointer-events: none;
    `,
    label_size: css`
      font-size: ${getLabelSize(size)};
    `,
    label_uppercase: css`
      text-transform: uppercase;
    `,
  };

  let classes: any = [cls.label_base];
  if (size) classes.push(cls.label_size);
  if (uppercase) classes.push(cls.label_uppercase);
  return classes;
};

const useStartIconClasses = (theme: any, props: any) => {
  const { size } = props;

  const cls: any = {
    startIcon_base: css`
      margin-right: ${theme.space(2)};
      & svg {
        display: block;
        width: ${getIconSize(size)}px;
        height: ${getIconSize(size)}px;
      }
    `,
  };

  let classes: any = [cls.startIcon_base];
  return classes;
};

const useEndIconClasses = (theme: any, props: any) => {
  const { size } = props;

  const cls: any = {
    endIcon_base: css`
      margin-left: ${theme.space(2)};
      & svg {
        display: block;
        width: ${getIconSize(size)}px;
        height: ${getIconSize(size)}px;
      }
    `,
  };

  let classes: any = [cls.endIcon_base];
  return classes;
};

// PROPS -------------------------------------------------- //

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
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

  variant?: ButtonVariantValues;
  color?: ColorValues;
  tint?: TintValues;
  size?: SizeValues;

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

  // CLASSES //

  const buttonClasses = useButtonClasses(theme, { variant, color, tint, size, fullWidth, disabled });
  const labelClasses = useLabelClasses(theme, { size, uppercase });
  const startIconClasses = useStartIconClasses(theme, { size });
  const endIconClasses = useEndIconClasses(theme, { size });

  // CLASSNAMES //

  const clsxButton = clsx(buttonClasses, classes?.button, className) || undefined;
  const clsxLabel = clsx(labelClasses, classes?.label) || undefined;
  const clsxStartIcon = clsx(startIconClasses, classes?.startIcon) || undefined;
  const clsxEndIcon = clsx(endIconClasses, classes?.endIcon) || undefined;
  const clsxLoadingIcon = clsx(classes?.loadingIcon) || undefined;
  const clsxWarningIcon = clsx(classes?.warningIcon) || undefined;
  const clsxErrorIcon = clsx(classes?.errorIcon) || undefined;
  const clsxSuccessIcon = clsx(classes?.successIcon) || undefined;

  // RENDER //

  return (
    <button className={clsxButton} {...rest}>
      {icon ? <span className={clsxStartIcon}>{icon}</span> : null}

      <span className={clsxLabel}>{children}</span>

      {loading ? (
        <span className={clsxEndIcon}>
          <LoadingIcon
            className={clsxLoadingIcon}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </span>
      ) : warning ? (
        <span className={clsxEndIcon}>
          <WarningIcon
            className={clsxWarningIcon}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </span>
      ) : error ? (
        <span className={clsxEndIcon}>
          <ErrorIcon
            className={clsxErrorIcon}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </span>
      ) : success ? (
        <span className={clsxEndIcon}>
          <SuccessIcon
            className={clsxSuccessIcon}
            type={variant === `solid` ? `fg` : `bg`}
            color={color}
            tint={tint}
            size={getIconSize(size)}
            disabled={disabled}
          />
        </span>
      ) : null}
    </button>
  );
};

// EXPORT -------------------------------------------------- //

export default Button;
