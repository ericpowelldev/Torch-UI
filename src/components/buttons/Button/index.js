//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import PropTypes from "prop-types";
import { useFui } from "providers/Fui";
import { useColors } from "hooks/useColors";
import { useButton } from "./useButton";
import { createUseStyles } from "react-jss";

import Spinner from "components/utils/Spinner";

//////////////////////// COMPONENT ////////////////////////

function Button(props) {
  const { children, className, color, tint, size, variant, loading, disabled, uppercase, ...rest } = props;

  const { theme } = useFui();
  const { getColorBg, getColorFg, getColorHover, getColorActive } = useColors();
  const { getRootPadding, getOutlinePadding, getLabelSize, getIconSize, getLabelWeight } = useButton();

  // Create styles
  const useStyles = createUseStyles(
    {
      root: {
        position: `relative`,
        overflow: `hidden`,
        display: `inline-flex`,
        alignItems: `center`,
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
      },
      solid: (props) => ({
        padding: getRootPadding(props.size),
        backgroundColor: getColorBg(props.color, props.tint, props.disabled),
        color: getColorFg(props.color, props.tint, props.disabled),
        // boxShadow: `0 0 0 0 ${Color(getColorBg(props.color, props.tint, props.disabled)).alpha(0.7)}`,
        "&:hover": {
          backgroundColor: !props.disableHoverEffect ? getColorHover(props.color, props.tint, `solid`) : getColorBg(props.color, props.tint, props.disabled),
          "@media (hover: none)": {
            backgroundColor: getColorBg(props.color, props.tint, props.disabled),
          },
        },
        "&:active": {
          backgroundColor: getColorActive(props.color, props.tint, `solid`),
        },
      }),
      outline: (props) => ({
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
      }),
      // "@keyframes pulse": {
      //   "0%": {},
      //   "100%": {
      //     boxShadow: `0 0 0 ${theme.space(2)} #00000000`,
      //   },
      // },
      // pulse: {
      //   animation: `$pulse 0.35s ease-out`,
      // },
    },
    {
      name: `FuiButton`,
      index: 1,
    }
  );
  const cls = useStyles(props);

  // let pulsar;

  // const handleClick = (event) => {
  //   if (!disableEffects && variant === `solid`) {
  //     const el = event.target;
  //     el.classList.add(cls.pulse);
  //     clearTimeout(pulsar);
  //     pulsar = setTimeout(() => {
  //       el.classList.remove(cls.pulse);
  //       clearTimeout(pulsar);
  //     }, 500);
  //   }
  //   if (onClick) onClick();
  // };

  const getClassNames = () => {
    let classNames = [cls.root];
    if (variant === `solid`) classNames.push(cls.solid);
    if (variant === `outline`) classNames.push(cls.outline);
    if (variant === `link`) classNames.push(cls.link);
    if (disabled) classNames.push(cls.disabled);
    if (className) classNames.push(className);
    return classNames.join(` `);
  };

  return (
    <button className={getClassNames()} {...rest}>
      {loading ? (
        <span className={cls.startIcon}>
          <Spinner type={props.variant === `solid` ? `fg` : `bg`} color={props.color} tint={props.tint} size={getIconSize(props.size)} />
        </span>
      ) : null}
      <span className={cls.label}>{children}</span>
    </button>
  );
}

//////////////////////// PROPS ////////////////////////

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,

  color: PropTypes.oneOf([`default`, `primary`, `secondary`, `tertiary`, `info`, `error`, `warning`, `success`]),
  tint: PropTypes.oneOf([`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`]),
  size: PropTypes.oneOf([`xs`, `sm`, `md`, `lg`, `xl`]),
  variant: PropTypes.oneOf([`solid`, `outline`, `link`]),

  uppercase: PropTypes.oneOf([null, undefined, false, true]),

  loading: PropTypes.oneOf([null, undefined, false, true]),
  disabled: PropTypes.oneOf([null, undefined, false, true]),
};

Button.defaultProps = {
  className: null,
  style: null,

  color: `default`,
  tint: `500`,
  size: `md`,
  variant: `solid`,

  uppercase: true,

  loading: false,
  disabled: false,
};

//////////////////////// EXPORT ////////////////////////

export default Button;
