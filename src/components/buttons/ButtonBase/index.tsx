// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import clsx from "clsx";
import styled from "styled-components";

import { useTUI } from "providers/TUI";

// PROPS -------------------------------------------------- //

interface ButtonBaseProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root?: string;
    button?: string;
    label?: string;
  };
  style?: React.CSSProperties;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT -------------------------------------------------- //

const ButtonBase = ({ children, className, classes, ...rest }: ButtonBaseProps) => {
  // HOOKS //

  const { theme } = useTUI();

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
    line-height: ${theme.text.heightButton};
    font-family: ${theme.text.familyButton};
    font-size: ${theme.text.sizeButton};
    font-weight: ${theme.text.weightButton};
    background: inherit;
    color: inherit;
    cursor: pointer;
    transition: ${theme.transition.button};
    user-select: none;
  `;

  const MyLabel = styled.span`
    line-height: ${theme.text.heightButton};
    user-select: none;
    pointer-events: none;
  `;

  // CLASSNAMES //

  const clsxButton = clsx(classes?.root, classes?.button, className) || undefined;
  const clsxLabel = clsx(classes?.label) || undefined;

  // RENDER //

  return (
    <button className={clsxButton} {...rest}>
      <span className={clsxLabel}>{children}</span>
    </button>
  );
};

// EXPORT -------------------------------------------------- //

export default ButtonBase;
