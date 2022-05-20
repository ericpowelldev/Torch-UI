//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import SuccessIcon from "components/utils/SuccessIcon";

//////////////////////// COMPONENT ////////////////////////

export default function SuccessIcons(props) {
  return (
    <>
      <SuccessIcon style={{ display: `inline-block` }} />
      <SuccessIcon style={{ display: `inline-block` }} disabled />
      <SuccessIcon style={{ display: `inline-block` }} color="black" />
      <SuccessIcon style={{ display: `inline-block` }} color="white" />
      <SuccessIcon style={{ display: `inline-block` }} color="primary" />
      <SuccessIcon style={{ display: `inline-block` }} color="secondary" />
      <SuccessIcon style={{ display: `inline-block` }} color="tertiary" />
      <SuccessIcon style={{ display: `inline-block` }} color="info" />
      <SuccessIcon style={{ display: `inline-block` }} color="error" />
      <SuccessIcon style={{ display: `inline-block` }} color="warning" />
      <SuccessIcon style={{ display: `inline-block` }} color="success" />
    </>
  );
}
