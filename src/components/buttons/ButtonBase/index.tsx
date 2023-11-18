// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import clsx from "clsx";
import { css } from "@emotion/css";

import { useTUI } from "providers/TUI";

// CLASSES -------------------------------------------------- //

const useButtonClasses = (theme: any) => {
  const cls: any = {
    button_base: css`
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      padding: 0;
      border: 0;
      border-radius: ${theme.radius.button};
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
    `,
  };

  return cls.button_base;
};

const useLabelClasses = (theme: any) => {
  const cls: any = {
    label_base: css`
      line-height: ${theme.text.heightButton};
      font-family: ${theme.text.familyButton};
      font-size: ${theme.text.sizeButton};
      font-weight: ${theme.text.weightButton};
      user-select: none;
      pointer-events: none;
    `,
  };

  return cls.label_base;
};

// PROPS -------------------------------------------------- //

interface ButtonBaseProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
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

  // CLASSES //

  const buttonClasses = useButtonClasses(theme);
  const labelClasses = useLabelClasses(theme);

  // CLASSNAMES //

  const clsxButton = clsx(buttonClasses, classes?.button, className) || undefined;
  const clsxLabel = clsx(labelClasses, classes?.label) || undefined;

  // RENDER //

  return (
    <button className={clsxButton} {...rest}>
      <span className={clsxLabel}>{children}</span>
    </button>
  );
};

// EXPORT -------------------------------------------------- //

export default ButtonBase;
