// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { DividerComponentValues, DividerDirectionValues, PercentValues } from "@utils/types";

import { useTui } from "@tui";
import {
  useRootStyles,
  useStretchStyles,
  useLabelStyles,
  useLineStyles,
  useIconStyles,
} from "./styles";

import { MdInfo } from "react-icons/md";

import Tooltip from "@components/Tooltip";

// PROPS ---------------------------------------------------------------- //

export interface DividerProps {
  // General Properties //

  props?: {
    root?: React.HTMLAttributes<HTMLElement>;
    stretch?: React.HTMLAttributes<HTMLElement>;
    label?: React.HTMLAttributes<HTMLElement>;
    line?: React.HTMLAttributes<HTMLElement>;
    icon?: React.SVGProps<SVGSVGElement>;
  };
  classes?: {
    root?: string;
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
  const rootStyles = useRootStyles(
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
    [classes?.root, className]
  );
  const stretchStyles = useStretchStyles(theme, { gap }, [classes?.stretch]);
  const labelStyles = useLabelStyles(theme, {}, [classes?.label]);
  const lineStyles = useLineStyles(theme, { direction, lineStyle, lineWidth }, [classes?.line]);
  const iconStyles = useIconStyles(theme, {}, [classes?.icon]);

  // Return Component
  return React.createElement(
    component || `div`,
    { className: rootStyles, ...props?.root, ...rest },
    children ? (
      <>
        <span className={stretchStyles} {...props?.stretch}>
          <span className={lineStyles} {...props?.line} />
        </span>

        <span className={labelStyles} {...props?.label}>
          {children}
        </span>

        <span className={stretchStyles} {...props?.stretch}>
          <span className={lineStyles} {...props?.line} />

          {tip && direction !== `vertical` ? (
            <Tooltip arrow content={tip} placement="top-end">
              <MdInfo className={iconStyles} {...props?.icon} />
            </Tooltip>
          ) : null}
        </span>
      </>
    ) : (
      <>
        <span className={lineStyles} {...props?.line} />
      </>
    )
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Divider;
