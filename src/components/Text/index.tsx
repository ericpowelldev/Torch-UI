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
} from "../../utils/types";
import { getTextComponent } from "../../utils/helpers";

import { useTui } from "../../Tui";
import { useTextStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface TextProps {
  // General Properties //

  props?: {
    text?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    text?: string;
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
  const textStyles = useTextStyles(theme, { align, color, shadow, tint, variant }, [
    classes?.text,
    className,
  ]);

  // Return Component
  return React.createElement(
    getTextComponent(component, variant, href),
    { className: textStyles, href: href || undefined, ...props?.text, ...rest },
    children
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Text;
