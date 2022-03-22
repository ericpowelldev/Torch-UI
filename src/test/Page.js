//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled from "styled-components";

import { BiCart, BiSave, BiCar } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlineBlock } from "react-icons/md";

import Button from "components/buttons/Button";
import ErrorIcon from "components/utils/ErrorIcon";
import WarningIcon from "components/utils/WarningIcon";
import LoadingIcon from "components/utils/LoadingIcon";
import SuccessIcon from "components/utils/SuccessIcon";

//////////////////////// STYLED-COMPONENTS ////////////////////////

const Root = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FlexParent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const FlexChild = styled.div`
  position: relative;
`;

const BreakV = styled.div`
  width: 100%;
  height: 16px;
`;

const BreakH = styled.div`
  width: 24px;
  height: auto;
`;

const BreakHSm = styled.div`
  width: 8px;
  height: auto;
`;

//////////////////////// COMPONENT ////////////////////////

export default function Page(props) {
  const handleClick = (event) => {
    const val = event.target.value;
    console.log(`VALUE:`, val);
  };

  return (
    <Root>
      <ErrorIcon style={{ display: `inline-block` }} />
      <ErrorIcon style={{ display: `inline-block` }} disabled />
      <ErrorIcon style={{ display: `inline-block` }} color="primary" />
      <ErrorIcon style={{ display: `inline-block` }} color="secondary" />
      <ErrorIcon style={{ display: `inline-block` }} color="tertiary" />
      <ErrorIcon style={{ display: `inline-block` }} color="info" />
      <ErrorIcon style={{ display: `inline-block` }} color="error" />
      <ErrorIcon style={{ display: `inline-block` }} color="warning" />
      <ErrorIcon style={{ display: `inline-block` }} color="success" />

      <BreakV />

      <WarningIcon style={{ display: `inline-block` }} />
      <WarningIcon style={{ display: `inline-block` }} disabled />
      <WarningIcon style={{ display: `inline-block` }} color="primary" />
      <WarningIcon style={{ display: `inline-block` }} color="secondary" />
      <WarningIcon style={{ display: `inline-block` }} color="tertiary" />
      <WarningIcon style={{ display: `inline-block` }} color="info" />
      <WarningIcon style={{ display: `inline-block` }} color="error" />
      <WarningIcon style={{ display: `inline-block` }} color="warning" />
      <WarningIcon style={{ display: `inline-block` }} color="success" />

      <BreakV />

      <LoadingIcon style={{ display: `inline-block` }} />
      <LoadingIcon style={{ display: `inline-block` }} disabled />
      <LoadingIcon style={{ display: `inline-block` }} color="primary" />
      <LoadingIcon style={{ display: `inline-block` }} color="secondary" />
      <LoadingIcon style={{ display: `inline-block` }} color="tertiary" />
      <LoadingIcon style={{ display: `inline-block` }} color="info" />
      <LoadingIcon style={{ display: `inline-block` }} color="error" />
      <LoadingIcon style={{ display: `inline-block` }} color="warning" />
      <LoadingIcon style={{ display: `inline-block` }} color="success" />

      <BreakV />

      <SuccessIcon style={{ display: `inline-block` }} />
      <SuccessIcon style={{ display: `inline-block` }} disabled />
      <SuccessIcon style={{ display: `inline-block` }} color="primary" />
      <SuccessIcon style={{ display: `inline-block` }} color="secondary" />
      <SuccessIcon style={{ display: `inline-block` }} color="tertiary" />
      <SuccessIcon style={{ display: `inline-block` }} color="info" />
      <SuccessIcon style={{ display: `inline-block` }} color="error" />
      <SuccessIcon style={{ display: `inline-block` }} color="warning" />
      <SuccessIcon style={{ display: `inline-block` }} color="success" />

      <BreakV />
      <BreakV />
      <BreakV />

      <FlexParent>
        <FlexChild>
          <Button error color="primary" tint="100">
            Button
          </Button>
          <BreakV />
          <Button error color="primary" tint="100" variant="outline">
            Button
          </Button>
          <BreakV />
          <Button error color="primary" tint="100" variant="transparent">
            Button
          </Button>
          <BreakV />
          <Button error color="primary" tint="100" variant="link">
            Button
          </Button>
        </FlexChild>

        <BreakH />

        <FlexChild>
          <Button color="primary" tint="200">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="200" variant="outline">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="200" variant="transparent">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="200" variant="link">
            Button
          </Button>
        </FlexChild>

        <BreakH />

        <FlexChild>
          <Button warning color="primary" tint="300">
            Button
          </Button>
          <BreakV />
          <Button warning color="primary" tint="300" variant="outline">
            Button
          </Button>
          <BreakV />
          <Button warning color="primary" tint="300" variant="transparent">
            Button
          </Button>
          <BreakV />
          <Button warning color="primary" tint="300" variant="link">
            Button
          </Button>
        </FlexChild>

        <BreakH />

        <FlexChild>
          <Button color="primary" tint="400">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="400" variant="outline">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="400" variant="transparent">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="400" variant="link">
            Button
          </Button>
        </FlexChild>

        <BreakH />

        <FlexChild>
          <Button success color="primary" tint="500" shadow>
            Button
          </Button>
          <BreakV />
          <Button success color="primary" tint="500" variant="outline">
            Button
          </Button>
          <BreakV />
          <Button success color="primary" tint="500" variant="transparent">
            Button
          </Button>
          <BreakV />
          <Button success color="primary" tint="500" variant="link">
            Button
          </Button>
        </FlexChild>

        <BreakH />

        <FlexChild>
          <Button color="primary" tint="600">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="600" variant="outline">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="600" variant="transparent">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="600" variant="link">
            Button
          </Button>
        </FlexChild>

        <BreakH />

        <FlexChild>
          <Button color="primary" tint="700">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="700" variant="outline">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="700" variant="transparent">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="700" variant="link">
            Button
          </Button>
        </FlexChild>

        <BreakH />

        <FlexChild>
          <Button color="primary" tint="800">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="800" variant="outline">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="800" variant="transparent">
            Button
          </Button>
          <BreakV />
          <Button color="primary" tint="800" variant="link">
            Button
          </Button>
        </FlexChild>

        <BreakH />

        <FlexChild>
          <Button loading color="primary" tint="900">
            Button
          </Button>
          <BreakV />
          <Button loading color="primary" tint="900" variant="outline">
            Button
          </Button>
          <BreakV />
          <Button loading color="primary" tint="900" variant="transparent">
            Button
          </Button>
          <BreakV />
          <Button loading color="primary" tint="900" variant="link">
            Button
          </Button>
        </FlexChild>
      </FlexParent>

      <BreakV />
      <BreakV />
      <BreakV />

      <FlexParent>
        <Button icon={<BiCart />} color="primary" success>
          Add To Cart
        </Button>
        <BreakHSm />
        <Button onClick={handleClick} icon={<BiSave />} color="secondary" loading>
          Save
        </Button>
        <BreakHSm />
        <Button icon={<BiCar />} color="tertiary" error>
          Drive Now
        </Button>
        <BreakHSm />
        <Button icon={<AiOutlineCloseCircle />} color="default" warning>
          Cancel
        </Button>
        <BreakHSm />
        <Button icon={<MdOutlineBlock />} color="primary" disabled>
          Disabled
        </Button>
      </FlexParent>
    </Root>
  );
}
