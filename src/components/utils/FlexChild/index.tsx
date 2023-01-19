//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled, { css } from "styled-components";

import { useTUI } from "providers/TUI";

//////////////////////// PROPS ////////////////////////

interface FlexChildProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
    child: string;
  };
  style?: React.CSSProperties;
}

//////////////////////// COMPONENT ////////////////////////

const FlexChild = ({ children, className, classes, ...rest }: FlexChildProps) => {
  // HOOKS //
  const { theme } = useTUI();

  // DYNAMIC STYLED-COMPONENTS //
  const MyFlexChild = styled.div`
    position: relative;
  `;

  // CLASSNAMES ROOT //
  const getClassNames_root = (name: string) => {
    let classNames = [];
    if (className) classNames.push(className);
    if (classes && classes.root) classNames.push(classes.root);
    if (classes && name && classes[name]) classNames.push(classes[name]);
    return classNames.join(` `);
  };

  // RETURN //
  return (
    <MyFlexChild className={getClassNames_root(`child`)} {...rest}>
      {children}
    </MyFlexChild>
  );
};

//////////////////////// EXPORT ////////////////////////

export default FlexChild;
