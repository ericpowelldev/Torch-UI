// DEPENDENCIES -------------------------------------------------- //

import React from "react";

import Buttons from "./sets/Buttons";
import ErrorIcons from "./sets/ErrorIcons";
import WarningIcons from "./sets/WarningIcons";
import LoadingIcons from "./sets/LoadingIcons";
import SuccessIcons from "./sets/SuccessIcons";
import Spacer from "components/utils/Spacer";

// COMPONENT -------------------------------------------------- //

const Page = () => {
  return (
    <div className="fixed w-screen h-screen">
      <ErrorIcons />

      <Spacer />

      <WarningIcons />

      <Spacer />

      <SuccessIcons />

      <Spacer />

      <LoadingIcons />

      <Spacer size={12} />

      <Buttons />
    </div>
  );
};

// EXPORT -------------------------------------------------- //

export default Page;
