// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import {
  DividerComponentValues,
  DividerDirectionValues,
  PercentValues,
} from "@utils/types";

import { useTui } from "@tui";
import {
  useDividerStyles,
  useStretchStyles,
  useLabelStyles,
  useLineStyles,
  useIconStyles,
} from "./styles";

import { MdInfo } from "react-icons/md";

// PROPS ---------------------------------------------------------------- //

interface DividerProps {
  // General Properties //

  props?: {
    divider?: React.HTMLAttributes<HTMLElement>;
    stretch?: React.HTMLAttributes<HTMLElement>;
    label?: React.HTMLAttributes<HTMLElement>;
    line?: React.HTMLAttributes<HTMLElement>;
    icon?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    divider?: string;
    stretch?: string;
    label?: string;
    line?: string;
    icon?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  component?: DividerComponentValues;

  // Specialized Properties //

  direction?: DividerDirectionValues;
  gap?: number;
  gutter?: number;
  lineStyle?: React.CSSProperties["borderStyle"];
  lineWidth?: number;
  spaceAfter?: number;
  spaceBefore?: number;
  textPosition?: PercentValues;
  tip?: React.ReactNode;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Divider = ({
  // General Properties //

  props,
  classes,
  className,
  children,
  component,

  // Specialized Properties //

  direction = "horizontal",
  gap = 2,
  gutter,
  lineStyle = `solid`,
  lineWidth = 1,
  spaceAfter,
  spaceBefore,
  textPosition = 0.5,
  tip,

  // HTML Properties //

  ...rest
}: DividerProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const dividerStyles = useDividerStyles(
    theme,
    {
      direction,
      gap,
      gutter,
      spaceAfter,
      spaceBefore,
      textPosition,
      tip,
    },
    [classes?.divider, className]
  );
  const stretchStyles = useStretchStyles(theme, { gap }, [classes?.stretch]);
  const labelStyles = useLabelStyles(theme, {}, [classes?.label]);
  const lineStyles = useLineStyles(theme, { direction, lineStyle, lineWidth }, [classes?.line]);
  const iconStyles = useIconStyles(theme, {}, [classes?.icon]);

  // Return Component
  return React.createElement(
    component || `div`,
    { className: dividerStyles, ...props?.divider, ...rest },
    children ? (
      <>
        <span className={stretchStyles}>
          <span className={lineStyles} />
        </span>

        <span className={labelStyles}>{children}</span>

        <span className={stretchStyles}>
          <span className={lineStyles} />

          {tip && direction !== `vertical` ? <MdInfo className={iconStyles} /> : null}
        </span>
      </>
    ) : (
      <>
        <span className={lineStyles} />
      </>
    )
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Divider;
