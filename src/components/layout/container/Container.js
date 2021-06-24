import React from "react";
import { createUseStyles } from "react-jss";
import theme from "lib/theme";

//////////////////////// COMPONENT ////////////////////////
export default function Container(props) {
  const cls = useStyles(props);

  const getClassNames = () => {
    let arr = [cls.container];
    if (props.size && (props.size === `xl` || props.size === `lg` || props.size === `md` || props.size === `sm` || props.size === `xs`)) {
      arr.push(cls[`container-${props.size}`]);
    }
    if (props.fixed) arr.push(cls[`container-fixed`]);
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
Container.defaultProps = {
  size: false,
  fixed: false,
  gap: 4,
  className: ``,
  style: {},
};

//////////////////////// PROP FUNCTIONS ////////////////////////
const propGap = (num) => {
  if (num) return theme.spacing(parseInt(num));
  else return theme.spacing(Container.defaultProps.gap);
};

//////////////////////// STYLES ////////////////////////
const useStyles = createUseStyles({
  container: {
    position: `relative`,
    maxWidth: theme.container.max,
    padding: (props) => `0 ${propGap(props.gap)}`,
    marginLeft: `auto`,
    marginRight: `auto`,
    transition: theme.trans.main,
  },
  [`container-xl`]: {
    maxWidth: theme.container.xl,
  },
  [`container-lg`]: {
    maxWidth: theme.container.lg,
  },
  [`container-md`]: {
    maxWidth: theme.container.md,
  },
  [`container-sm`]: {
    maxWidth: theme.container.sm,
  },
  [`container-xs`]: {
    maxWidth: theme.container.xs,
  },
  [`container-fixed`]: {
    [theme.layout.xl.up]: {
      width: theme.container.xl,
    },
    [theme.layout.xl.down]: {
      width: theme.container.lg,
    },
    [theme.layout.lg.down]: {
      width: theme.container.md,
    },
    [theme.layout.md.down]: {
      width: theme.container.sm,
    },
    [theme.layout.sm.down]: {
      width: theme.container.xs,
    },
    [theme.layout.xs.down]: {
      width: theme.container.min,
    },
  },
});

//////////////////////// DOCS ////////////////////////
/*
  size
    false = Fluid max width (100%)
    "xl" = Extra large max width
    "lg" = Large max width
    "md" = Medium max width
    "sm" = Small max width
    "xs" = Extra small max width
  
  fixed
    false = Fluid max width at the size breakpoint
    true = Fixed max width at the size breakpoint

  gap
    false = Standard padding - theme.spacing(4)
    int = Custom padding - theme.spacing(#)
*/
