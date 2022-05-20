//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import LoadingIcon from "components/utils/LoadingIcon";

//////////////////////// COMPONENT ////////////////////////

export default function LoadingIcons(props) {
  return (
    <>
      <LoadingIcon style={{ display: `inline-block` }} />
      <LoadingIcon style={{ display: `inline-block` }} disabled />
      <LoadingIcon style={{ display: `inline-block` }} color="black" />
      <LoadingIcon style={{ display: `inline-block` }} color="white" />
      <LoadingIcon style={{ display: `inline-block` }} color="primary" />
      <LoadingIcon style={{ display: `inline-block` }} color="secondary" />
      <LoadingIcon style={{ display: `inline-block` }} color="tertiary" />
      <LoadingIcon style={{ display: `inline-block` }} color="info" />
      <LoadingIcon style={{ display: `inline-block` }} color="error" />
      <LoadingIcon style={{ display: `inline-block` }} color="warning" />
      <LoadingIcon style={{ display: `inline-block` }} color="success" />
    </>
  );
}
