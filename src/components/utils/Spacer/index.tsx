//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import clsx from "clsx";
import styled from "styled-components";

import { BoolValues } from "utils/types";

import { useTUI } from "providers/TUI";
import useSpacer from "hooks/useSpace";

//////////////////////// PROPS ////////////////////////

interface SpacerProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root?: string;
    spacer?: string;
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

  // CLASSNAMES //

  const clsxSpacer = clsx(classes?.root, classes?.spacer, className) || undefined;

  // RETURN //
  return (
    <>
      {!vertical ? (
        <MyHorizontalSpacer className={clsxSpacer} {...rest} />
      ) : (
        <MyVerticalSpacer className={clsxSpacer} {...rest} />
      )}
    </>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Spacer;
