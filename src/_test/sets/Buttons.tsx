//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import styled from "styled-components";

import { BiCart, BiSave, BiCar } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlineBlock } from "react-icons/md";

import Button from "components/buttons/Button";
import Spacer from "components/utils/Spacer";

//////////////////////// STYLED-COMPONENTS ////////////////////////

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

const Buttons = () => {
  const handleClick = (event: any) => {
    const val = event.target.value;
    console.log(`VALUE:`, val);
  };

  return (
    <>
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
          <Button loading color="tertiary" tint="500">
            Button
          </Button>
          <Spacer />
          <Button success color="tertiary" tint="500" variant="outline">
            Button
          </Button>
          <Spacer />
          <Button success color="tertiary" tint="500" variant="transparent">
            Button
          </Button>
          <Spacer />
          <Button success color="tertiary" tint="500" variant="link">
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
        <Button icon={<AiOutlineCloseCircle />} color="utility" warning>
          Cancel
        </Button>
        <Spacer vertical size="xs" />
        <Button icon={<MdOutlineBlock />} disabled>
          Disabled
        </Button>
      </FlexParent>
    </>
  );
};

//////////////////////// EXPORT ////////////////////////

export default Buttons;
