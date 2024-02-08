// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTUI } from "../../TUI";

import {
  BoolValues,
  ColorValues,
  FGColorValues,
  TintValues,
  TextAlignValues,
  TextComponentValues,
  TextVariantValues,
} from "../../utils/types";
import { getTextComponent } from "../../utils/helpers";

import { useTextStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface TextProps {
  // General Properties //

  className?: string;
  classes?: {
    text?: string;
  };
  style?: React.CSSProperties;
  props?: {
    text?: React.HTMLAttributes<HTMLElement>;
  };
  children?: React.ReactNode;
  component?: `inherit` | TextComponentValues;

  // Specialized Properties //

  variant?: `inherit` | TextVariantValues;
  color?: `inherit` | ColorValues | FGColorValues;
  tint?: TintValues;
  align?: `inherit` | TextAlignValues;
  href?: string;
  shadow?: BoolValues;

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

  variant = "p1",
  color = "inherit",
  tint = 500,
  align,
  href,
  shadow = false,

  // Other Properties //

  ...rest
}: TextProps) => {
  // Hooks
  const { theme } = useTUI();

  // Styles
  const textStyles = useTextStyles(theme, { variant, color, tint, align, shadow }, [classes?.text, className]);

  // Return Component
  return React.createElement(
    getTextComponent(component, variant, href),
    { className: textStyles, href: href || undefined, ...props?.text, ...rest },
    children
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Text;
