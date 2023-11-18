// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import clsx from "clsx";
import { css } from "@emotion/css";

import { BoolValues } from "utils/types";

import { useTUI } from "providers/TUI";

// HELPERS -------------------------------------------------- //

/** Get the size of a space */
const getSpaceSize = (size: number | string) => {
  let sizeNum = 4;
  if (typeof size === `number`) {
    sizeNum = size;
  } else if (typeof size === `string`) {
    if (size === `xxxs`) sizeNum = 0.5;
    if (size === `xxs`) sizeNum = 1;
    if (size === `xs`) sizeNum = 2;
    if (size === `sm`) sizeNum = 3;
    if (size === `md`) sizeNum = 4;
    if (size === `lg`) sizeNum = 6;
    if (size === `xl`) sizeNum = 8;
    if (size === `xxl`) sizeNum = 12;
    if (size === `xxxl`) sizeNum = 16;
  }
  return sizeNum;
};

// CLASSES -------------------------------------------------- //

const useSpacerClasses = (theme: any, props: any) => {
  const { size, vertical } = props;

  const cls: any = {
    spacer_horizontal: css`
      position: relative;
      width: 100%;
      height: ${theme.space(getSpaceSize(size))};
    `,
    spacer_vertical: css`
      position: relative;
      width: ${theme.space(getSpaceSize(size))};
      height: auto;
    `,
  };

  if (vertical) return cls.spacer_vertical;
  return cls.spacer_horizontal;
};

// PROPS -------------------------------------------------- //

interface SpacerProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    spacer?: string;
  };
  style?: React.CSSProperties;

  size?: number | string;

  vertical?: BoolValues;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT -------------------------------------------------- //

const Spacer = ({ children, className, classes, size = 4, vertical, ...rest }: SpacerProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const spacerClasses = useSpacerClasses(theme, { size, vertical });

  // CLASSNAMES //

  const clsxSpacer = clsx(spacerClasses, classes?.spacer, className) || undefined;

  // RENDER //

  return <>{!vertical ? <div className={clsxSpacer} {...rest} /> : <div className={clsxSpacer} {...rest} />}</>;
};

// EXPORT -------------------------------------------------- //

export default Spacer;
