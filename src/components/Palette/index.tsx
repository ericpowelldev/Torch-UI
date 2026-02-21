// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTui } from "@tui";
import { colorValues, ColorValues, tintValues, TintValues } from "@utils/types";
import { getColorBg } from "@utils/helpers";
import {
  useRootStyles,
  useColorColumnStyles,
  useColorNameStyles,
  useSwatchStyles,
  useSwatchTextStyles,
} from "./styles";

// CONSTANTS ---------------------------------------------------------------- //

// Use the string slice of tintValues so tint "0" is truthy in getColorBg's guard
const MAIN_TINTS = tintValues.filter((t): t is string => typeof t === `string`);

// PROPS ---------------------------------------------------------------- //

export interface PaletteProps {
  // General Properties //

  props?: {
    root?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    root?: string;
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
  const colorColumnStyles = useColorColumnStyles(theme);
  const colorNameStyles = useColorNameStyles(theme);

  // Return Component
  return (
    <div className={rootStyles} {...props?.root} {...rest}>
      {colorValues.map((colorName) => (
        <div key={colorName} className={colorColumnStyles}>
          <div className={colorNameStyles}>{colorName}</div>

          {MAIN_TINTS.map((tint) => {
            const hex = getColorBg(theme, colorName as ColorValues, tint as TintValues) as string;
            const textColor =
              parseInt(tint) < 500 ? theme?.color?.fg?.[0] : theme?.color?.fgInverse?.[0];

            return (
              <div key={tint} className={useSwatchStyles(hex)}>
                <span className={useSwatchTextStyles(textColor)}>{tint}</span>
                <span className={useSwatchTextStyles(textColor)}>{hex.toUpperCase()}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Palette;
