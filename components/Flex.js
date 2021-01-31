import React from "react";
import { createUseStyles } from "react-jss";
import { FyreFlyUI } from "@lib/FyreFlyUI";

const getFlexGrow = (size) => {
  if (size) {
    if (size === true) return `1`;
    else if (size >= 1 && size <= 12) return `${size}`;
  } else return `0`;
};
const getFlexBasis = (size) => {
  if (size) {
    if (size === true) return `0`;
    else if (size >= 1 && size <= 12) return `${(size / 12) * 100}%`;
  } else return `auto`;
};
const getMaxWidth = (size) => {
  if (size) {
    if (size === true) return `100%`;
    else if (size >= 1 && size <= 12) return `${(size / 12) * 100}%`;
  } else return `none`;
};

//////////////////////// COMPONENT ////////////////////////
export default function Flex(props) {
  const { theme } = React.useContext(FyreFlyUI);
  const cls = useStyles({ ...props, theme });

  const getClasses = () => {
    if (props.parent && props.child) return cls.parent + cls.child;
    else if (props.parent) return cls.parent;
    else if (props.child) return cls.child;
    else return ``;
  };

  return (
    <div className={getClasses()} style={props.style}>
      {props.children}
    </div>
  );
}

//////////////////////// STYLES ////////////////////////
const useStyles = createUseStyles({
  parent: (props) => ({
    position: `relative`,
    display: `flex`,
    alignContent: props.alignContent ? props.alignContent : `stretch`,
    alignItems: props.alignItems ? props.alignItems : `stretch`,
    justifyContent: props.justifyContent ? props.justifyContent : `flex-start`,
    justifyItems: props.justifyItems ? props.justifyItems : `stretch`,
    flexDirection: props.direction ? props.direction : `row`,
    flexWrap: props.nowrap ? `nowrap` : `wrap`,
    gap: props.gap ? props.theme.spacing(props.gap) : `0`,
    maxWidth: `100%`,
    transition: props.theme.trans.main,
  }),
  child: (props) => ({
    position: `relative`,
    transition: props.theme.trans.main,
    [props.theme.layout.zero]: {
      flexGrow: getFlexGrow(props.xs),
      flexBasis: getFlexBasis(props.xs),
      maxWidth: getMaxWidth(props.xs),
    },
    [props.theme.layout.xs.up]: {
      flexGrow: getFlexGrow(props.sm),
      flexBasis: getFlexBasis(props.sm),
      maxWidth: getMaxWidth(props.sm),
    },
    [props.theme.layout.sm.up]: {
      flexGrow: getFlexGrow(props.md),
      flexBasis: getFlexBasis(props.md),
      maxWidth: getMaxWidth(props.md),
    },
    [props.theme.layout.md.up]: {
      flexGrow: getFlexGrow(props.lg),
      flexBasis: getFlexBasis(props.lg),
      maxWidth: getMaxWidth(props.lg),
    },
    [props.theme.layout.lg.up]: {
      flexGrow: getFlexGrow(props.xl),
      flexBasis: getFlexBasis(props.xl),
      maxWidth: getMaxWidth(props.xl),
    },
  }),
});
