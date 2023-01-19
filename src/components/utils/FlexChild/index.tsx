//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled, { css } from "styled-components";

import { joinClassNames } from "utils/helpers";

import { useTUI } from "providers/TUI";

//////////////////////// PROPS ////////////////////////

interface FlexChildProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
  };
  style?: React.CSSProperties;

  [x: string]: any; // Handle default HTML props
}

//////////////////////// COMPONENT ////////////////////////

const FlexChild = ({ children, className, classes, ...rest }: FlexChildProps) => {
  // HOOKS //
  const { theme } = useTUI();

  // DYNAMIC STYLED-COMPONENTS //
  const MyFlexChild = styled.div`
    position: relative;
  `;

  // RETURN //
  return (
    <MyFlexChild className={joinClassNames(classes, `root`, className)} {...rest}>
      {children}
    </MyFlexChild>
  );
};

//////////////////////// EXPORT ////////////////////////

export default FlexChild;
