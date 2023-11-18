// DEPENDENCIES -------------------------------------------------- //

import React from "react";

import "static/styles/preset.css";

// PROPS -------------------------------------------------- //

interface PresetProps {
  children?: React.ReactNode;
}

// COMPONENT -------------------------------------------------- //

const Preset = ({ children }: PresetProps) => {
  return <React.Fragment>{children}</React.Fragment>;
};

// EXPORT -------------------------------------------------- //

export default Preset;
