//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled, { css } from "styled-components";

import { joinClassNames } from "utils/helpers";

import { useTUI } from "providers/TUI";
import useSpace from "hooks/useSpace";

//////////////////////// PROPS ////////////////////////

interface FlexProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
  };
  style?: React.CSSProperties;

  direction?: string;
  alignContent?: string;
  alignItems?: string;
  justifyContent?: string;
  justifyItems?: string;

  [x: string]: any; // Handle default HTML props
}

//////////////////////// COMPONENT ////////////////////////

const Flex = ({
  children,
  className,
  classes,
  direction,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  ...rest
}: FlexProps) => {
  // HOOKS //
  const { theme } = useTUI();
  const { getSpaceSize } = useSpace();

  // DYNAMIC STYLED-COMPONENTS //
  const MyFlex = styled.div`
    position: relative;
    display: flex;
    width: 100%;

    ${direction &&
    css`
      flex-direction: ${direction};
    `}
    ${alignContent &&
    css`
      align-content: ${alignContent};
    `}
    ${alignItems &&
    css`
      align-items: ${alignItems};
    `}
    ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
    ${justifyItems &&
    css`
      justify-items: ${justifyItems};
    `}
  `;

  // RETURN //
  return (
    <MyFlex className={joinClassNames(classes, `root`, className)} {...rest}>
      {children}
    </MyFlex>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Flex;
