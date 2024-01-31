// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../providers/TUI";

import {
  ColorValues,
  TintValues,
  TextAlignValues,
  TextColorValues,
  TextComponentValues,
  TextVariantValues,
} from "../../utils/types";

import { useTextStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    text?: string;
  };
  style?: React.CSSProperties;

  component?: TextComponentValues;
  variant?: TextVariantValues;
  color?: ColorValues | TextColorValues;
  tint?: TintValues;

  align?: TextAlignValues;

  href?: string;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT ---------------------------------------------------------------- //

const Text = ({
  children,
  className,
  classes,
  component,
  variant = "p1",
  color = "inherit",
  tint = 500,
  align = "inherit",
  href,
  ...rest
}: TextProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const textStyles = useTextStyles(theme, { variant, color, tint, align });

  // CLASSNAMES //

  const clsxText = clsx(textStyles, classes?.text, className) || undefined;

  // RENDER //

  // Link Variant

  if (href) {
    return (
      <a className={clsxText} href={href} {...rest}>
        {children}
      </a>
    );
  }

  // Component Variants

  if (component === `div`) {
    return (
      <div className={clsxText} {...rest}>
        {children}
      </div>
    );
  }
  if (component === `span`) {
    return (
      <span className={clsxText} {...rest}>
        {children}
      </span>
    );
  }

  // Header Variants

  if (variant === `h1`) {
    return (
      <h1 className={clsxText} {...rest}>
        {children}
      </h1>
    );
  }
  if (variant === `h2`) {
    return (
      <h2 className={clsxText} {...rest}>
        {children}
      </h2>
    );
  }
  if (variant === `h3`) {
    return (
      <h3 className={clsxText} {...rest}>
        {children}
      </h3>
    );
  }
  if (variant === `h4`) {
    return (
      <h4 className={clsxText} {...rest}>
        {children}
      </h4>
    );
  }
  if (variant === `h5`) {
    return (
      <h5 className={clsxText} {...rest}>
        {children}
      </h5>
    );
  }
  if (variant === `h6`) {
    return (
      <h6 className={clsxText} {...rest}>
        {children}
      </h6>
    );
  }

  // Default Variant

  return (
    <p className={clsxText} {...rest}>
      {children}
    </p>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Text;
