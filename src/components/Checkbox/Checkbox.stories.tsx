import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";
import { FaRegThumbsUp, FaRegThumbsDown, FaXmark } from "react-icons/fa6";
import Flex from "../Flex";
import Text from "../Text";

const meta: Meta<typeof Component> = {
  title: "Inputs/Checkbox",
  tags: ["autodocs"],
  component: Component,
  argTypes: {
    // General Properties //

    props: {
      description: "Nested properties of the child components.",
      table: {
        disable: true,
      },
    },
    classes: {
      description: "Nested CSS classes of the child components.",
      table: {
        disable: true,
      },
    },
    className: {
      description: "CSS class of the root component.",
      table: {
        disable: true,
      },
    },
    style: {
      description: "Inline styling of the root component.",
      table: {
        disable: true,
      },
    },
    component: {
      description: "HTML element to render the component as.",
      control: {
        type: "select",
      },
    },
    tooltip: {
      description: "Content inside of the tooltip (If present, tooltip will pop up on hover).",
      control: {
        type: "text",
      },
    },

    // Specialized Properties //

    color: {
      description: "Color of the checked icon.",
      control: {
        type: "select",
      },
    },
    disabled: {
      description: "Should the checkbox be in a disabled state?",
      control: {
        type: "boolean",
      },
    },
    iconChecked: {
      description: "Icon to render when checked.",
      table: {
        disable: true,
      },
    },
    iconUnchecked: {
      description: "Icon to render when unchecked.",
      table: {
        disable: true,
      },
    },
    size: {
      description: "Size of the checkbox.",
      control: {
        type: "radio",
      },
    },
    tint: {
      description: "Color tint of the checkbox.",
      control: {
        type: "select",
      },
    },
    variant: {
      description: "Variation of the checkbox.",
      control: {
        type: "radio",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};

export const VariantsAndColors: Story = {
  render: () => (
    <Flex container direction="column" gap={3}>
      <Flex container gap={2}>
        <Component defaultChecked variant="solid" color="primary" />
        <Component defaultChecked variant="soft" color="primary" />
        <Component defaultChecked variant="plain" color="primary" />
        <Component defaultChecked variant="outlined" color="primary" />
      </Flex>

      <Flex container gap={2}>
        <Component defaultChecked variant="solid" color="secondary" />
        <Component defaultChecked variant="soft" color="secondary" />
        <Component defaultChecked variant="plain" color="secondary" />
        <Component defaultChecked variant="outlined" color="secondary" />
      </Flex>

      <Flex container gap={2}>
        <Component defaultChecked variant="solid" color="utility" />
        <Component defaultChecked variant="soft" color="utility" />
        <Component defaultChecked variant="plain" color="utility" />
        <Component defaultChecked variant="outlined" color="utility" />
      </Flex>

      <Flex container gap={2}>
        <Component defaultChecked variant="solid" color="error" />
        <Component defaultChecked variant="soft" color="error" />
        <Component defaultChecked variant="plain" color="error" />
        <Component defaultChecked variant="outlined" color="error" />
      </Flex>

      <Flex container gap={2}>
        <Component defaultChecked variant="solid" color="warning" />
        <Component defaultChecked variant="soft" color="warning" />
        <Component defaultChecked variant="plain" color="warning" />
        <Component defaultChecked variant="outlined" color="warning" />
      </Flex>

      <Flex container gap={2}>
        <Component defaultChecked variant="solid" color="success" />
        <Component defaultChecked variant="soft" color="success" />
        <Component defaultChecked variant="plain" color="success" />
        <Component defaultChecked variant="outlined" color="success" />
      </Flex>

      <Flex container gap={2}>
        <Component defaultChecked variant="solid" color="info" />
        <Component defaultChecked variant="soft" color="info" />
        <Component defaultChecked variant="plain" color="info" />
        <Component defaultChecked variant="outlined" color="info" />
      </Flex>
    </Flex>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Flex container direction="column" gap={3}>
      <Flex container alignItems="center" gap={3}>
        <Component defaultChecked color="primary" variant="solid" />
        <Text>Label</Text>
      </Flex>

      <Flex container alignItems="center" gap={3}>
        <Component defaultChecked color="primary" variant="soft" />
        <Text>Label</Text>
      </Flex>

      <Flex container alignItems="center" gap={3}>
        <Component defaultChecked color="primary" variant="plain" />
        <Text>Label</Text>
      </Flex>

      <Flex container alignItems="center" gap={3}>
        <Component defaultChecked color="primary" variant="outlined" />
        <Text>Label</Text>
      </Flex>
    </Flex>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Flex container direction="column" gap={3}>
      <Flex container gap={2}>
        <Component
          defaultChecked
          variant="solid"
          color="info"
          iconChecked={<FaRegThumbsUp />}
          iconUnchecked={<FaRegThumbsDown />}
        />
        <Component
          defaultChecked
          variant="soft"
          color="info"
          iconChecked={<FaRegThumbsUp />}
          iconUnchecked={<FaRegThumbsDown />}
        />
        <Component
          defaultChecked
          variant="plain"
          color="info"
          iconChecked={<FaRegThumbsUp />}
          iconUnchecked={<FaRegThumbsDown />}
        />
        <Component
          defaultChecked
          variant="outlined"
          color="info"
          iconChecked={<FaRegThumbsUp />}
          iconUnchecked={<FaRegThumbsDown />}
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          variant="solid"
          color="info"
          iconChecked={<FaRegThumbsUp />}
          iconUnchecked={<FaRegThumbsDown />}
        />
        <Component
          variant="soft"
          color="info"
          iconChecked={<FaRegThumbsUp />}
          iconUnchecked={<FaRegThumbsDown />}
        />
        <Component
          variant="plain"
          color="info"
          iconChecked={<FaRegThumbsUp />}
          iconUnchecked={<FaRegThumbsDown />}
        />
        <Component
          variant="outlined"
          color="info"
          iconChecked={<FaRegThumbsUp />}
          iconUnchecked={<FaRegThumbsDown />}
        />
      </Flex>
    </Flex>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <Flex container direction="column" gap={3}>
      <Flex container gap={2}>
        <Component defaultChecked disabled variant="solid" />
        <Component defaultChecked disabled variant="soft" />
        <Component defaultChecked disabled variant="plain" />
        <Component defaultChecked disabled variant="outlined" />
      </Flex>

      <Flex container gap={2}>
        <Component disabled variant="solid" iconUnchecked={<FaXmark />} />
        <Component disabled variant="soft" iconUnchecked={<FaXmark />} />
        <Component disabled variant="plain" iconUnchecked={<FaXmark />} />
        <Component disabled variant="outlined" iconUnchecked={<FaXmark />} />
      </Flex>
    </Flex>
  ),
};

export const Tint100: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component defaultChecked color="primary" tint={100} />
      <Component defaultChecked color="secondary" tint={100} />
      <Component defaultChecked color="utility" tint={100} />
      <Component defaultChecked color="error" tint={100} />
      <Component defaultChecked color="warning" tint={100} />
      <Component defaultChecked color="success" tint={100} />
      <Component defaultChecked color="info" tint={100} />
    </Flex>
  ),
};

export const Tint300: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component defaultChecked color="primary" tint={300} />
      <Component defaultChecked color="secondary" tint={300} />
      <Component defaultChecked color="utility" tint={300} />
      <Component defaultChecked color="error" tint={300} />
      <Component defaultChecked color="warning" tint={300} />
      <Component defaultChecked color="success" tint={300} />
      <Component defaultChecked color="info" tint={300} />
    </Flex>
  ),
};

export const Tint500: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component defaultChecked color="primary" />
      <Component defaultChecked color="secondary" />
      <Component defaultChecked color="utility" />
      <Component defaultChecked color="error" />
      <Component defaultChecked color="warning" />
      <Component defaultChecked color="success" />
      <Component defaultChecked color="info" />
    </Flex>
  ),
};

export const Tint700: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component defaultChecked color="primary" tint={700} />
      <Component defaultChecked color="secondary" tint={700} />
      <Component defaultChecked color="utility" tint={700} />
      <Component defaultChecked color="error" tint={700} />
      <Component defaultChecked color="warning" tint={700} />
      <Component defaultChecked color="success" tint={700} />
      <Component defaultChecked color="info" tint={700} />
    </Flex>
  ),
};

export const Tint900: Story = {
  render: () => (
    <Flex container gap={2}>
      <Component defaultChecked color="primary" tint={900} />
      <Component defaultChecked color="secondary" tint={900} />
      <Component defaultChecked color="utility" tint={900} />
      <Component defaultChecked color="error" tint={900} />
      <Component defaultChecked color="warning" tint={900} />
      <Component defaultChecked color="success" tint={900} />
      <Component defaultChecked color="info" tint={900} />
    </Flex>
  ),
};
