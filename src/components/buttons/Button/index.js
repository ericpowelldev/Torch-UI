//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import { boolValues, colorValues, tintValues, sizeValues } from "utils/standards";
import { useFui } from "providers/Fui";
import { useColors } from "hooks/useColors";
import { useButton } from "./useButton";
import { createUseStyles } from "react-jss";

import ErrorIcon from "components/utils/ErrorIcon";
import WarningIcon from "components/utils/WarningIcon";
import LoadingIcon from "components/utils/LoadingIcon";

//////////////////////// COMPONENT ////////////////////////

function Button(props) {
  const { children, className, classes, color, tint, size, variant, tooltip, icon, fullWidth, uppercase, disabled, loading, warning, error, ...rest } = props;

  // HOOKS //
  const { theme } = useFui();
  const { getColorBg, getColorFg, getColorHover, getColorActive } = useColors();
  const { getRootPadding, getSolidHoverHeight, getOutlinePadding, getLabelSize, getIconSize, getLabelWeight } = useButton();

  // STYLES //
  const useStyles = createUseStyles(
    {
      root: {
        position: `relative`,
        overflow: `hidden`,
        display: `inline-flex`,
        alignItems: `center`,
        justifyContent: `center`,
        padding: 0,
        border: 0,
        borderRadius: theme.radius(1),
        margin: 0,
        lineHeight: theme.txt.fontHeight,
        fontFamily: theme.txt.fontFamily,
        fontSize: 14,
        fontWeight: 600,
        background: `inherit`,
        color: `inherit`,
        cursor: `pointer`,
        transition: theme.trans(0.15),
        userSelect: `none`,
      },
      solid: (props) => ({
        width: props.fullWidth ? `100%` : `inherit`,
        padding: getRootPadding(props.size),
        backgroundColor: getColorBg(props.color, props.tint, props.disabled),
        color: getColorFg(props.color, props.tint, props.disabled),
        "&::after": {
          content: `""`,
          position: `absolute`,
          bottom: 0,
          left: `50%`,
          width: 0,
          height: getSolidHoverHeight(props.size),
          borderRadius: theme.radius(0.5),
          backgroundColor: getColorHover(props.color, props.tint, `solid`),
          transition: theme.trans(0.15),
        },
        "&:hover": {
          "&::after": {
            left: 0,
            width: `100%`,
          },
        },
        "&:active": {
          backgroundColor: getColorActive(props.color, props.tint, `solid`),
        },
      }),
      outline: (props) => ({
        width: props.fullWidth ? `100%` : `inherit`,
        padding: getOutlinePadding(props.size),
        border: `1px solid ${getColorBg(props.color, props.tint, props.disabled)}`,
        backgroundColor: `transparent`,
        color: getColorBg(props.color, props.tint, props.disabled),
        "&:hover": {
          backgroundColor: getColorHover(props.color, props.tint, `outline`),
          "@media (hover: none)": {
            backgroundColor: `transparent`,
          },
        },
        "&:active": {
          backgroundColor: getColorActive(props.color, props.tint, `outline`),
        },
      }),
      link: (props) => ({
        width: props.fullWidth ? `100%` : `inherit`,
        padding: getRootPadding(props.size),
        backgroundColor: `transparent`,
        color: getColorBg(props.color, props.tint, props.disabled),
        "&:hover": {
          backgroundColor: getColorHover(props.color, props.tint, `link`),
          "@media (hover: none)": {
            backgroundColor: `transparent`,
          },
        },
        "&:active": {
          backgroundColor: getColorActive(props.color, props.tint, `link`),
        },
      }),
      disabled: {
        cursor: `not-allowed`,
        userSelect: `none`,
        pointerEvents: `none`,
      },
      label: (props) => ({
        lineHeight: theme.txt.fontHeightBtn,
        fontSize: getLabelSize(props.size),
        fontWeight: getLabelWeight(props.variant),
        textTransform: !uppercase ? `inherit` : `uppercase`,
        userSelect: `none`,
        pointerEvents: `none`,
      }),
      startIcon: (props) => ({
        marginRight: theme.space(2),
        "& svg": {
          display: `block`,
          width: getIconSize(props.size),
          height: getIconSize(props.size),
        },
      }),
      endIcon: (props) => ({
        marginLeft: theme.space(2),
        "& svg": {
          display: `block`,
          width: getIconSize(props.size),
          height: getIconSize(props.size),
        },
      }),
    },
    {
      name: `FuiButton`,
      index: 1,
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
    if (variant === `solid`) classNames.push(cls.solid);
    if (variant === `outline`) classNames.push(cls.outline);
    if (variant === `link`) classNames.push(cls.link);
    if (disabled) classNames.push(cls.disabled);
    if (className) classNames.push(className);
    if (classes && classes.root) classNames.push(classes.root);
    return classNames.join(` `);
  };

  // RETURN //
  return (
    <button className={getClassNames_root()} {...rest}>
      {icon ? <span className={cls.startIcon}>{icon}</span> : null}
      <span className={getClassNames(`label`)}>{children}</span>
      {error ? (
        <span className={cls.endIcon}>
          <ErrorIcon
            className={getClassNames(`errorIcon`)}
            type={props.variant === `solid` ? `fg` : `bg`}
            color={props.color}
            tint={props.tint}
            size={getIconSize(props.size)}
            disabled={props.disabled}
          />
        </span>
      ) : warning ? (
        <span className={cls.endIcon}>
          <WarningIcon
            className={getClassNames(`warningIcon`)}
            type={props.variant === `solid` ? `fg` : `bg`}
            color={props.color}
            tint={props.tint}
            size={getIconSize(props.size)}
            disabled={props.disabled}
          />
        </span>
      ) : loading ? (
        <span className={cls.endIcon}>
          <LoadingIcon
            className={getClassNames(`loadingIcon`)}
            type={props.variant === `solid` ? `fg` : `bg`}
            color={props.color}
            tint={props.tint}
            size={getIconSize(props.size)}
            disabled={props.disabled}
          />
        </span>
      ) : null}
    </button>
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
  variant: PropTypes.oneOf([`solid`, `outline`, `link`]),

  tooltip: PropTypes.node,
  icon: PropTypes.node,

  fullWidth: PropTypes.oneOf(boolValues),
  uppercase: PropTypes.oneOf(boolValues),

  disabled: PropTypes.oneOf(boolValues),
  loading: PropTypes.oneOf(boolValues),
  warning: PropTypes.oneOf(boolValues),
  error: PropTypes.oneOf(boolValues),
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
  loading: false,
  warning: false,
  error: false,
};

//////////////////////// EXPORT ////////////////////////

export default Button;
