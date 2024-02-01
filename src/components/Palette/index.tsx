// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import clsx from "clsx";

import { useTUI } from "../../TUI";

import { usePaletteStyles } from "./styles";

import Box from "../Box";
import Spacer from "../Spacer";

// PROPS ---------------------------------------------------------------- //

interface PaletteProps {
  className?: string;
  classes?: {
    palette?: string;
  };
  style?: React.CSSProperties;

  [x: string]: any; // Handle default HTML props
}

// COMPONENT ---------------------------------------------------------------- //

const Palette = ({ className, classes, ...rest }: PaletteProps) => {
  // HOOKS //

  const { theme } = useTUI();

  // CLASSES //

  const paletteStyles = usePaletteStyles(theme);

  // CLASSNAMES //

  const clsxPalette = clsx(paletteStyles?.palette, classes?.palette, className) || undefined;
  const clsxFlex = clsx(paletteStyles?.flex) || undefined;

  // RENDER //

  return (
    <div className={clsxPalette} {...rest}>
      <div className={clsxFlex}>
        <Box color="primary" tint={100} width={64} height={64} />
        <Box color="secondary" tint={100} width={64} height={64} />
        <Box color="tertiary" tint={100} width={64} height={64} />

        <Spacer vertical size={8} />

        <Box color="utility" tint={100} width={64} height={64} />
        <Box color="error" tint={100} width={64} height={64} />
        <Box color="warning" tint={100} width={64} height={64} />
        <Box color="success" tint={100} width={64} height={64} />
        <Box color="info" tint={100} width={64} height={64} />
      </div>

      <div className={clsxFlex}>
        <Box color="primary" tint={250} width={64} height={64} />
        <Box color="secondary" tint={250} width={64} height={64} />
        <Box color="tertiary" tint={250} width={64} height={64} />

        <Spacer vertical size={8} />

        <Box color="utility" tint={250} width={64} height={64} />
        <Box color="error" tint={250} width={64} height={64} />
        <Box color="warning" tint={250} width={64} height={64} />
        <Box color="success" tint={250} width={64} height={64} />
        <Box color="info" tint={250} width={64} height={64} />
      </div>

      <div className={clsxFlex}>
        <Box color="primary" tint={500} width={64} height={64} />
        <Box color="secondary" tint={500} width={64} height={64} />
        <Box color="tertiary" tint={500} width={64} height={64} />

        <Spacer vertical size={8} />

        <Box color="utility" tint={500} width={64} height={64} />
        <Box color="error" tint={500} width={64} height={64} />
        <Box color="warning" tint={500} width={64} height={64} />
        <Box color="success" tint={500} width={64} height={64} />
        <Box color="info" tint={500} width={64} height={64} />
      </div>

      <div className={clsxFlex}>
        <Box color="primary" tint={750} width={64} height={64} />
        <Box color="secondary" tint={750} width={64} height={64} />
        <Box color="tertiary" tint={750} width={64} height={64} />

        <Spacer vertical size={8} />

        <Box color="utility" tint={750} width={64} height={64} />
        <Box color="error" tint={750} width={64} height={64} />
        <Box color="warning" tint={750} width={64} height={64} />
        <Box color="success" tint={750} width={64} height={64} />
        <Box color="info" tint={750} width={64} height={64} />
      </div>

      <div className={clsxFlex}>
        <Box color="primary" tint={900} width={64} height={64} />
        <Box color="secondary" tint={900} width={64} height={64} />
        <Box color="tertiary" tint={900} width={64} height={64} />

        <Spacer vertical size={8} />

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
