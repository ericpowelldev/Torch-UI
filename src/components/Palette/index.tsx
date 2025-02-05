// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTui } from "@tui";
import { useRootStyles, useFlexStyles } from "./styles";

import Box from "@components/Box";
import Spacer from "@components/Spacer";

// PROPS ---------------------------------------------------------------- //

interface PaletteProps {
  // General Properties //

  props?: {
    root?: React.HTMLAttributes<HTMLElement>;
    flex?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    root?: string;
    flex?: string;
  };
  className?: string;
  style?: React.CSSProperties;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Palette = ({
  // General Properties //

  props,
  classes,
  className,

  // HTML Properties //

  ...rest
}: PaletteProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, undefined, [classes?.root, className]);
  const flexStyles = useFlexStyles(theme, undefined, [classes?.flex]);

  // Return Component
  return (
    <div className={rootStyles} {...props?.root} {...rest}>
      <div className={flexStyles} {...props?.flex}>
        <Box color="primary" tint={100} width={64} height={64} />
        <Box color="secondary" tint={100} width={64} height={64} />

        <Spacer direction="vertical" size={8} />

        <Box color="utility" tint={100} width={64} height={64} />
        <Box color="error" tint={100} width={64} height={64} />
        <Box color="warning" tint={100} width={64} height={64} />
        <Box color="success" tint={100} width={64} height={64} />
        <Box color="info" tint={100} width={64} height={64} />
      </div>

      <div className={flexStyles} {...props?.flex}>
        <Box color="primary" tint={300} width={64} height={64} />
        <Box color="secondary" tint={300} width={64} height={64} />

        <Spacer direction="vertical" size={8} />

        <Box color="utility" tint={300} width={64} height={64} />
        <Box color="error" tint={300} width={64} height={64} />
        <Box color="warning" tint={300} width={64} height={64} />
        <Box color="success" tint={300} width={64} height={64} />
        <Box color="info" tint={300} width={64} height={64} />
      </div>

      <div className={flexStyles} {...props?.flex}>
        <Box color="primary" tint={500} width={64} height={64} />
        <Box color="secondary" tint={500} width={64} height={64} />

        <Spacer direction="vertical" size={8} />

        <Box color="utility" tint={500} width={64} height={64} />
        <Box color="error" tint={500} width={64} height={64} />
        <Box color="warning" tint={500} width={64} height={64} />
        <Box color="success" tint={500} width={64} height={64} />
        <Box color="info" tint={500} width={64} height={64} />
      </div>

      <div className={flexStyles} {...props?.flex}>
        <Box color="primary" tint={700} width={64} height={64} />
        <Box color="secondary" tint={700} width={64} height={64} />

        <Spacer direction="vertical" size={8} />

        <Box color="utility" tint={700} width={64} height={64} />
        <Box color="error" tint={700} width={64} height={64} />
        <Box color="warning" tint={700} width={64} height={64} />
        <Box color="success" tint={700} width={64} height={64} />
        <Box color="info" tint={700} width={64} height={64} />
      </div>

      <div className={flexStyles} {...props?.flex}>
        <Box color="primary" tint={900} width={64} height={64} />
        <Box color="secondary" tint={900} width={64} height={64} />

        <Spacer direction="vertical" size={8} />

        <Box color="utility" tint={900} width={64} height={64} />
        <Box color="error" tint={900} width={64} height={64} />
        <Box color="warning" tint={900} width={64} height={64} />
        <Box color="success" tint={900} width={64} height={64} />
        <Box color="info" tint={900} width={64} height={64} />
      </div>
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Palette;
