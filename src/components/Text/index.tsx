// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import {
  BoolValues,
  ColorValues,
  FGColorValues,
  TintValues,
  TextAlignValues,
  TextComponentValues,
  TextVariantValues,
} from "@utils/types";
import { getTextComponent } from "@utils/helpers";

import { useTui } from "@tui";
import { useRootStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface TextProps {
  // General Properties //

  props?: {
    root?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    root?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  component?: `inherit` | TextComponentValues;

  // Specialized Properties //

  align?: `inherit` | TextAlignValues;
  color?: `inherit` | ColorValues | FGColorValues;
  href?: string;
  shadow?: BoolValues;
  tint?: TintValues;
  variant?: `inherit` | TextVariantValues;

  // Other Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Text = ({
  // General Properties //

  props,
  classes,
  className,
  children,
  component,

  // Specialized Properties //

  align,
  color = "inherit",
  href,
  shadow = false,
  tint = 500,
  variant = "p1",

  // Other Properties //

  ...rest
}: TextProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, { align, color, shadow, tint, variant }, [
    classes?.root,
    className,
  ]);

  // Return Component
  return React.createElement(
    getTextComponent(component, variant, href),
    { className: rootStyles, href: href || undefined, ...props?.root, ...rest },
    children
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Text;
