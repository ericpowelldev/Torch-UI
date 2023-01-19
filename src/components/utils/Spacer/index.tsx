//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled from "styled-components";

import { BoolValues } from "utils/types";

import { useTUI } from "providers/TUI";
import useSpacer from "hooks/useSpace";

//////////////////////// PROPS ////////////////////////

interface SpacerProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root: string;
    spacer: string;
  };
  style?: React.CSSProperties;

  size?: number | string;

  vertical?: BoolValues;
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
    <>
      {!vertical ? (
        <MyHorizontalSpacer className={getClassNames_root(`spacer`)} {...rest} />
      ) : (
        <MyVerticalSpacer className={getClassNames_root(`spacer`)} {...rest} />
      )}
    </>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Spacer;
