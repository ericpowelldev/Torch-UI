// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";
import { Global } from "@emotion/react";

import { Theme } from "./utils/types";

import "../static/styles/preset.css";

// PROPS ---------------------------------------------------------------- //

interface PresetProps {
  children?: React.ReactNode;

  theme?: Theme;
}

// COMPONENT ---------------------------------------------------------------- //

const Preset = ({ children, theme }: PresetProps) => {
  return (
    <React.Fragment>
      <Global
        styles={{
          body: {
            lineHeight: theme.text.height,
            fontFamily: theme.text.family,
            fontSize: theme.text.size,
            fontWeight: theme.text.weight,
            backgroundColor: theme.color.bg[2],
            color: theme.color.fg[0],
          },
          h1: {
            lineHeight: theme.text.h1.height || theme.text.height,
            fontFamily: theme.text.h1.family || theme.text.family,
            fontSize: theme.text.h1.size || theme.text.size,
            fontWeight: theme.text.h1.weight || theme.text.weight,
          },
          h2: {
            lineHeight: theme.text.h2.height || theme.text.height,
            fontFamily: theme.text.h2.family || theme.text.family,
            fontSize: theme.text.h2.size || theme.text.size,
            fontWeight: theme.text.h2.weight || theme.text.weight,
          },
          h3: {
            lineHeight: theme.text.h3.height || theme.text.height,
            fontFamily: theme.text.h3.family || theme.text.family,
            fontSize: theme.text.h3.size || theme.text.size,
            fontWeight: theme.text.h3.weight || theme.text.weight,
          },
          h4: {
            lineHeight: theme.text.h4.height || theme.text.height,
            fontFamily: theme.text.h4.family || theme.text.family,
            fontSize: theme.text.h4.size || theme.text.size,
            fontWeight: theme.text.h4.weight || theme.text.weight,
          },
          h5: {
            lineHeight: theme.text.h5.height || theme.text.height,
            fontFamily: theme.text.h5.family || theme.text.family,
            fontSize: theme.text.h5.size || theme.text.size,
            fontWeight: theme.text.h5.weight || theme.text.weight,
          },
          h6: {
            lineHeight: theme.text.h6.height || theme.text.height,
            fontFamily: theme.text.h6.family || theme.text.family,
            fontSize: theme.text.h6.size || theme.text.size,
            fontWeight: theme.text.h6.weight || theme.text.weight,
          },
          p: {
            lineHeight: theme.text.height,
            fontFamily: theme.text.family,
            fontSize: theme.text.size,
            fontWeight: theme.text.weight,
          },
        }}
      />
      {children}
    </React.Fragment>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Preset;
