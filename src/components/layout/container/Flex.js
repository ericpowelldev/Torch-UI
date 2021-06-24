import React from "react";
import { createUseStyles } from "react-jss";
import theme from "lib/theme";

//////////////////////// COMPONENT ////////////////////////
export default function Flex(props) {
  const styleProps = {
    // Parent Props
    alignContent: props.alignContent,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    justifyItems: props.justifyItems,
    direction: props.direction,
    wrap: props.nowrap ? `nowrap` : `wrap`,
    gap: propGap(props.gap),

    // Child Props
    xl_flexGrow: propFlexGrow(props.xl),
    xl_flexBasis: propFlexBasis(props.xl, props.gap),
    xl_maxWidth: propMaxWidth(props.xl, props.gap),

    lg_flexGrow: propFlexGrow(props.lg),
    lg_flexBasis: propFlexBasis(props.lg, props.gap),
    lg_maxWidth: propMaxWidth(props.lg, props.gap),

    md_flexGrow: propFlexGrow(props.md),
    md_flexBasis: propFlexBasis(props.md, props.gap),
    md_maxWidth: propMaxWidth(props.md, props.gap),

    sm_flexGrow: propFlexGrow(props.sm),
    sm_flexBasis: propFlexBasis(props.sm, props.gap),
    sm_maxWidth: propMaxWidth(props.sm, props.gap),

    xs_flexGrow: propFlexGrow(props.xs),
    xs_flexBasis: propFlexBasis(props.xs, props.gap),
    xs_maxWidth: propMaxWidth(props.xs, props.gap),
  };

  const cls = useStyles(styleProps);

  const getClassNames = () => {
    let arr = [];
    if (props.parent) arr.push(cls[`flex-parent`]);
    if (props.child) {
      arr.push(cls[`flex-child`]);
      if (props.xl) arr.push(cls[`flex-child-xl`]);
      if (props.lg) arr.push(cls[`flex-child-lg`]);
      if (props.md) arr.push(cls[`flex-child-md`]);
      if (props.sm) arr.push(cls[`flex-child-sm`]);
      if (props.xs) arr.push(cls[`flex-child-xs`]);
    }
    if (props.className) arr.push(props.className);
    return arr.join(` `);
  };

  return (
    <div className={getClassNames()} style={props.style}>
      {props.children}
    </div>
  );
}

//////////////////////// PROP DEFAULTS ////////////////////////
Flex.defaultProps = {
  // Parent Props
  parent: false,
  alignContent: `stretch`,
  alignItems: `stretch`,
  justifyContent: `flex-start`,
  justifyItems: `stretch`,
  direction: `row`,
  nowrap: false,
  gap: 0,

  // Child Props
  child: false,
  xl: false,
  lg: false,
  md: false,
  sm: false,
  xs: false,
  className: ``,
  style: {},
};

//////////////////////// PROP FUNCTIONS ////////////////////////
const propGap = (num) => {
  if (num) return theme.spacing(parseInt(num));
  else return theme.spacing(Flex.defaultProps.gap);
};
const propFlexGrow = (size) => {
  if (size) {
    if (size === true) return `1`;
    else if (parseInt(size) >= 1 && parseInt(size) <= 12) return `${parseInt(size)}`;
  } else return `0`;
};
const propFlexBasis = (size, gap) => {
  if (size) {
    if (size === true) return `0`;
    else if (parseInt(size) >= 1 && parseInt(size) <= 12) return `${(parseInt(size) / 12) * 100}%`;
  } else return `auto`;
};
const propMaxWidth = (size, gap) => {
  if (size) {
    if (size === true) return `100%`;
    else if (parseInt(size) >= 1 && parseInt(size) <= 12) return `${(parseInt(size) / 12) * 100}%`;
  } else return `none`;
};

//////////////////////// STYLES ////////////////////////
const useStyles = createUseStyles({
  [`flex-parent`]: (props) => ({
    position: `relative`,
    display: `flex`,
    alignContent: props.alignContent,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    justifyItems: props.justifyItems,
    flexDirection: props.direction,
    flexWrap: props.wrap,
    gap: props.gap,
    maxWidth: `100%`,
    transition: theme.trans.main,
  }),
  [`flex-child`]: {
    position: `relative`,
    transition: theme.trans.main,
  },
  [`flex-child-xs`]: {
    [theme.layout.zero]: {
      flexGrow: 1,
      flexBasis: theme.percent6,
      maxWidth: theme.percent6,
      // flexGrow: props.xs_flexGrow,
      // flexBasis: props.xs_flexBasis,
      // maxWidth: props.xs_maxWidth,
    },
  },
  // [theme.layout.xs.up]: {
  //   [`flex-child`]: {
  //     flexGrow: (props) => props.sm_flexGrow,
  //     flexBasis: (props) => props.sm_flexBasis,
  //     maxWidth: (props) => props.sm_maxWidth,
  //   },
  // },
  // [theme.layout.sm.up]: {
  //   [`flex-child`]: {
  //     flexGrow: (props) => props.md_flexGrow,
  //     flexBasis: (props) => props.md_flexBasis,
  //     maxWidth: (props) => props.md_maxWidth,
  //   },
  // },
  // [theme.layout.md.up]: {
  //   [`flex-child`]: {
  //     flexGrow: (props) => props.lg_flexGrow,
  //     flexBasis: (props) => props.lg_flexBasis,
  //     maxWidth: (props) => props.lg_maxWidth,
  //   },
  // },
  // [theme.layout.lg.up]: {
  //   [`flex-child`]: {
  //     flexGrow: (props) => props.xl_flexGrow,
  //     flexBasis: (props) => props.xl_flexBasis,
  //     maxWidth: (props) => props.xl_maxWidth,
  //   },
  // },
});
