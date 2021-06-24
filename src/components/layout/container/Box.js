//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import { createUseStyles } from "react-jss";
import theme from "lib/theme";

//////////////////////// COMPONENT ////////////////////////

function Box(props) {
  const cls = useStyles(props);

  const { background, color, ptb, pt, pb, className, style } = props;

  // Get classNames for the main div
  const getClassNames = () => {
    let classNames = [];
    if (className) classNames += className;
  };

  return (
    <div className={getClassNames()} style={style}>
      {props.children}
    </div>
  );
}

//////////////////////// PROPS ////////////////////////



//////////////////////// EXPORT ////////////////////////

export default Box;