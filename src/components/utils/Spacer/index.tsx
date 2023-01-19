//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled from "styled-components";

import { joinClassNames } from "utils/helpers";
import { BoolValues } from "utils/types";

import { useTUI } from "providers/TUI";
import useSpacer from "hooks/useSpace";

//////////////////////// PROPS ////////////////////////

interface SpacerProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
  };
  style?: React.CSSProperties;

  size?: number | string;

  vertical?: BoolValues;

  [x: string]: any; // Handle default HTML props
}

//////////////////////// COMPONENT ////////////////////////

const Spacer = ({ children, className, classes, size = 4, vertical, ...rest }: SpacerProps) => {
  // HOOKS //
  const { theme } = useTUI();
  const { getSpaceSize } = useSpacer();

  // DYNAMIC STYLED-COMPONENTS //
  const MyHorizontalSpacer = styled.div`
    position: relative;
    width: 100%;
    height: ${theme.space(getSpaceSize(size))};
  `;

  const MyVerticalSpacer = styled.div`
    position: relative;
    width: ${theme.space(getSpaceSize(size))};
    height: auto;
  `;

  // RETURN //
  return (
    <>
      {!vertical ? (
        <MyHorizontalSpacer className={joinClassNames(classes, `root`, className)} {...rest} />
      ) : (
        <MyVerticalSpacer className={joinClassNames(classes, `root`, className)} {...rest} />
      )}
    </>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Spacer;
