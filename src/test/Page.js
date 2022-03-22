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
import Spacer from "components/utils/Spacer";

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
      <ErrorIcon style={{ display: `inline-block` }} color="black" />
      <ErrorIcon style={{ display: `inline-block` }} color="white" />
      <ErrorIcon style={{ display: `inline-block` }} color="primary" />
      <ErrorIcon style={{ display: `inline-block` }} color="secondary" />
      <ErrorIcon style={{ display: `inline-block` }} color="tertiary" />
      <ErrorIcon style={{ display: `inline-block` }} color="info" />
      <ErrorIcon style={{ display: `inline-block` }} color="error" />
      <ErrorIcon style={{ display: `inline-block` }} color="warning" />
      <ErrorIcon style={{ display: `inline-block` }} color="success" />

      <Spacer />

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

      <Spacer />

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

      <Spacer />

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

      <Spacer size={12} />

      <FlexParent>
        <FlexChild>
          <Button error color="tertiary" tint="100">
            Button
          </Button>
          <Spacer />
          <Button error color="tertiary" tint="100" variant="outline">
            Button
          </Button>
          <Spacer />
          <Button error color="tertiary" tint="100" variant="transparent">
            Button
          </Button>
          <Spacer />
          <Button error color="tertiary" tint="100" variant="link">
            Button
          </Button>
        </FlexChild>

        <Spacer vertical />

        <FlexChild>
          <Button color="tertiary" tint="200">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="200" variant="outline">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="200" variant="transparent">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="200" variant="link">
            Button
          </Button>
        </FlexChild>

        <Spacer vertical />

        <FlexChild>
          <Button warning color="tertiary" tint="300">
            Button
          </Button>
          <Spacer />
          <Button warning color="tertiary" tint="300" variant="outline">
            Button
          </Button>
          <Spacer />
          <Button warning color="tertiary" tint="300" variant="transparent">
            Button
          </Button>
          <Spacer />
          <Button warning color="tertiary" tint="300" variant="link">
            Button
          </Button>
        </FlexChild>

        <Spacer vertical />

        <FlexChild>
          <Button color="tertiary" tint="400">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="400" variant="outline">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="400" variant="transparent">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="400" variant="link">
            Button
          </Button>
        </FlexChild>

        <Spacer vertical />

        <FlexChild>
          <Button disabled success color="tertiary" tint="500" shadow>
            Button
          </Button>
          <Spacer />
          <Button disabled success color="tertiary" tint="500" variant="outline">
            Button
          </Button>
          <Spacer />
          <Button disabled success color="tertiary" tint="500" variant="transparent">
            Button
          </Button>
          <Spacer />
          <Button disabled success color="tertiary" tint="500" variant="link">
            Button
          </Button>
        </FlexChild>

        <Spacer vertical />

        <FlexChild>
          <Button color="tertiary" tint="600">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="600" variant="outline">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="600" variant="transparent">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="600" variant="link">
            Button
          </Button>
        </FlexChild>

        <Spacer vertical />

        <FlexChild>
          <Button color="tertiary" tint="700">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="700" variant="outline">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="700" variant="transparent">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="700" variant="link">
            Button
          </Button>
        </FlexChild>

        <Spacer vertical />

        <FlexChild>
          <Button color="tertiary" tint="800">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="800" variant="outline">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="800" variant="transparent">
            Button
          </Button>
          <Spacer />
          <Button color="tertiary" tint="800" variant="link">
            Button
          </Button>
        </FlexChild>

        <Spacer vertical />

        <FlexChild>
          <Button loading color="tertiary" tint="900">
            Button
          </Button>
          <Spacer />
          <Button loading color="tertiary" tint="900" variant="outline">
            Button
          </Button>
          <Spacer />
          <Button loading color="tertiary" tint="900" variant="transparent">
            Button
          </Button>
          <Spacer />
          <Button loading color="tertiary" tint="900" variant="link">
            Button
          </Button>
        </FlexChild>
      </FlexParent>

      <Spacer size={12} />

      <FlexParent>
        <Button icon={<BiCart />} color="primary" success>
          Add To Cart
        </Button>
        <Spacer vertical size="xs" />
        <Button onClick={handleClick} icon={<BiSave />} color="secondary" loading>
          Save
        </Button>
        <Spacer vertical size="xs" />
        <Button icon={<BiCar />} color="tertiary" error>
          Drive Now
        </Button>
        <Spacer vertical size="xs" />
        <Button icon={<AiOutlineCloseCircle />} color="default" warning>
          Cancel
        </Button>
        <Spacer vertical size="xs" />
        <Button icon={<MdOutlineBlock />} disabled>
          Disabled
        </Button>
      </FlexParent>
    </Root>
  );
}
