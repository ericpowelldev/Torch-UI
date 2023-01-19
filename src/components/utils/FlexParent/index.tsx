//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled, { css } from "styled-components";

import { useTUI } from "providers/TUI";
import useSpace from "hooks/useSpace";

//////////////////////// PROPS ////////////////////////

interface FlexParentProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string,
    parent: string,
  };
  style?: React.CSSProperties;

  direction?: string;
  alignContent?: string;
  alignItems?: string;
  justifyContent?: string;
  justifyItems?: string;
}

//////////////////////// COMPONENT ////////////////////////

const FlexParent = ({
  children,
  className,
  classes,
  direction,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  ...rest
}: FlexParentProps) => {
  // HOOKS //
  const { theme } = useTUI();
  const { getSpaceSize } = useSpace();

  // DYNAMIC STYLED-COMPONENTS //
  const MyFlexParent = styled.div`
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
    <MyFlexParent className={getClassNames_root(`parent`)} {...rest}>
      {children}
    </MyFlexParent>
  );
};

//////////////////////// EXPORT ////////////////////////

export default FlexParent;
