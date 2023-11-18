// DEPENDENCIES -------------------------------------------------- //

import React from "react";

import { useTUI } from "providers/TUI";

import ButtonBases from "./sets/ButtonBases";
import Buttons from "./sets/Buttons";
import Spacer from "components/layout/Spacer";

// COMPONENT -------------------------------------------------- //

const Page = () => {
  const { theme } = useTUI();

  return (
    <div style={{ width: `100vw`, height: `100vh`, padding: 24, background: theme.color.bg[1] }}>
      <ButtonBases />
      <Spacer size='xl' />
      <Buttons />
    </div>
  );
};

// EXPORT -------------------------------------------------- //

export default Page;
