//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled from "styled-components";

import { useTUI } from "providers/TUI";

//////////////////////// PROPS ////////////////////////

interface ButtonBaseProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
    button: string;
    label: string;
  };
  style?: React.CSSProperties;
}

//////////////////////// COMPONENT ////////////////////////

const ButtonBase = ({ children, className, classes, ...rest }: ButtonBaseProps) => {
  // HOOKS //
  const { theme } = useTUI();

  // CLASSNAMES ROOT //
  const getClassNames_root = (name: string) => {
    let classNames = [];
    if (className) classNames.push(className);
    if (classes && classes.root) classNames.push(classes.root);
    if (classes && name && classes[name]) classNames.push(classes[name]);
    return classNames.join(` `);
  };

  // CLASSNAMES //
  const getClassNames = (name: string) => {
    let classNames = [];
    if (classes && name && classes[name]) classNames.push(classes[name]);
    return classNames.join(` `);
  };

  // STYLED-COMPONENTS //
  const MyButton = styled.button`
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: ${theme.space(1)};
    margin: 0;
    line-height: ${theme.txt.fontHeightReset};
    font-family: ${theme.txt.fontFamily};
    font-size: 14;
    font-weight: 600;
    background: inherit;
    color: inherit;
    cursor: pointer;
    transition: ${theme.trans(0.15)};
    user-select: none;
  `;

  const MyLabel = styled.span`
    line-height: ${theme.txt.fontHeight};
    user-select: none;
    pointer-events: none;
  `;

  // RETURN //
  return (
    <MyButton className={getClassNames_root(`button`)} {...rest}>
      <MyLabel className={getClassNames(`label`)}>{children}</MyLabel>
    </MyButton>
  );
};

//////////////////////// EXPORT ////////////////////////

export default ButtonBase;
