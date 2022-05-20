//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import WarningIcon from "components/utils/WarningIcon";

//////////////////////// COMPONENT ////////////////////////

export default function WarningIcons(props) {
  return (
    <>
      <WarningIcon style={{ display: `inline-block` }} />
      <WarningIcon style={{ display: `inline-block` }} disabled />
      <WarningIcon style={{ display: `inline-block` }} color="black" />
      <WarningIcon style={{ display: `inline-block` }} color="white" />
      <WarningIcon style={{ display: `inline-block` }} color="primary" />
      <WarningIcon style={{ display: `inline-block` }} color="secondary" />
      <WarningIcon style={{ display: `inline-block` }} color="tertiary" />
      <WarningIcon style={{ display: `inline-block` }} color="info" />
      <WarningIcon style={{ display: `inline-block` }} color="error" />
      <WarningIcon style={{ display: `inline-block` }} color="warning" />
      <WarningIcon style={{ display: `inline-block` }} color="success" />
    </>
  );
}
