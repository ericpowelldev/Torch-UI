// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { useTui } from "@tui";
import { textVariantValues, TextVariantValues } from "@utils/types";
import {
  useRootStyles,
  useRowStyles,
  useMetaStyles,
  useChipStyles,
  useInfoStyles,
  useSampleStyles,
} from "./styles";

import Text from "@components/Text";

// CONSTANTS ---------------------------------------------------------------- //

const SAMPLE_TEXT = `The quick brown fox jumps over the lazy dog.`;

// PROPS ---------------------------------------------------------------- //

export interface TypographyProps {
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

const Typography = ({
  // General Properties //

  props,
  classes,
  className,

  // HTML Properties //

  ...rest
}: TypographyProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, undefined, [classes?.root, className]);
  const rowStyles = useRowStyles(theme);
  const metaStyles = useMetaStyles(theme);
  const chipStyles = useChipStyles(theme);
  const infoStyles = useInfoStyles(theme);
  const sampleStyles = useSampleStyles(theme);

  // Return Component
  return (
    <div className={rootStyles} {...props?.root} {...rest}>
      {textVariantValues.map((variant) => {
        const size: string = theme?.text?.[variant]?.size;
        const weight: number = theme?.text?.[variant]?.weight;

        return (
          <div key={variant} className={rowStyles}>
            <div className={metaStyles}>
              <span className={chipStyles}>{variant}</span>
              <span className={infoStyles}>
                {size} · {weight}
              </span>
            </div>

            <div className={sampleStyles}>
              <Text variant={variant as TextVariantValues}>{SAMPLE_TEXT}</Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Typography;
