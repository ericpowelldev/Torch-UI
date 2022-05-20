//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import ErrorIcon from "components/utils/ErrorIcon";

//////////////////////// COMPONENT ////////////////////////

export default function ErrorIcons(props) {
  return (
    <>
      <ErrorIcon style={{ display: `inline-block` }} />
      <ErrorIcon style={{ display: `inline-block` }} disabled />
      <ErrorIcon style={{ display: `inline-block` }} color="black" />
      <ErrorIcon style={{ display: `inline-block` }} color="white" />
      <ErrorIcon style={{ display: `inline-block` }} color="primary" />
      <ErrorIcon style={{ display: `inline-block` }} color="secondary" />
      <ErrorIcon style={{ display: `inline-block` }} color="tertiary" />
      <ErrorIcon style={{ display: `inline-block` }} color="info" />
      <ErrorIcon style={{ display: `inline-block` }} color="error" />
      <ErrorIcon style={{ display: `inline-block` }} color="warning" />
      <ErrorIcon style={{ display: `inline-block` }} color="success" />
    </>
  );
}
