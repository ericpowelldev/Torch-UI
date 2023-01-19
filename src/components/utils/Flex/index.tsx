//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled, { css } from "styled-components";

import { useTUI } from "providers/TUI";
import useSpace from "hooks/useSpace";

//////////////////////// PROPS ////////////////////////

interface FlexProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
    parent: string;
  };
  style?: React.CSSProperties;

  direction?: string;
  alignContent?: string;
  alignItems?: string;
  justifyContent?: string;
  justifyItems?: string;
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
    <MyFlex className={getClassNames_root(`parent`)} {...rest}>
      {children}
    </MyFlex>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Flex;
