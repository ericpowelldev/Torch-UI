// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import { css } from "@emotion/css";

import { useTUI } from "providers/TUI";

import Spacer from "components/layout/Spacer";

import ButtonBases from "./sets/ButtonBases";
import Buttons from "./sets/Buttons";
import Typography from "./sets/Typography";

// COMPONENT -------------------------------------------------- //

const Page = () => {
  const { theme } = useTUI();

  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        padding: 24px;
      `}>
      <Typography />
      <Spacer size="xl" />
      <ButtonBases />
      <Spacer size="xl" />
      <Buttons />
    </div>
  );
};

// EXPORT -------------------------------------------------- //

export default Page;
