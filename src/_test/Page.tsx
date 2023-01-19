//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled from "styled-components";

import Buttons from "./sets/Buttons";
import ErrorIcons from "./sets/ErrorIcons";
import WarningIcons from "./sets/WarningIcons";
import LoadingIcons from "./sets/LoadingIcons";
import SuccessIcons from "./sets/SuccessIcons";
import Spacer from "components/utils/Spacer";

//////////////////////// STYLED-COMPONENTS ////////////////////////

const Root = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//////////////////////// COMPONENT ////////////////////////

const Page = () => {
  return (
    <Root>
      <ErrorIcons />

      <Spacer />

      <WarningIcons />

      <Spacer />

      <SuccessIcons />

      <Spacer />

      <LoadingIcons />

      <Spacer size={12} />

      <Buttons />
    </Root>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Page;
