// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import ButtonBase from "components/buttons/ButtonBase";
import Button from "components/buttons/Button";
import Spacer from "components/utils/Spacer";
import { useTUI } from "providers/TUI";

// COMPONENT -------------------------------------------------- //

const Page = () => {
  const { theme } = useTUI();

  return (
    <div style={{ width: `100vw`, height: `100vh`, background: theme.color.bg[0] }}>
      <ButtonBase>ButtonBase</ButtonBase>

      <Spacer />

      <Button>Button</Button>
    </div>
  );
};

// EXPORT -------------------------------------------------- //

export default Page;
