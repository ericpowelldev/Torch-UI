import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";
import Flex from "../Flex";
import Option from "../Option";

const meta: Meta<typeof Component> = {
  title: "Inputs/Input",
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

    backdropBlur: {
      description: "Should the input have a backdrop blur?",
      control: {
        type: "boolean",
      },
    },
    color: {
      description: "Color of the input (when focused).",
      control: {
        type: "select",
      },
    },
    disabled: {
      description: "Should the input be in a disabled state?",
      control: {
        type: "boolean",
      },
    },
    error: {
      description: "Should the input be in an error state?",
      control: {
        type: "boolean",
      },
    },
    fullWidth: {
      description: "Should the input be the full width of its container?",
      control: {
        type: "boolean",
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    info: {
      description: "Should the input be in an info state?",
      control: {
        type: "boolean",
      },
    },
    inverse: {
      description: "Should the input be in an inverse state?",
      control: {
        type: "boolean",
      },
    },
    label: {
      description: "Label content for the input.",
      control: {
        type: "text",
      },
    },
    loading: {
      description: "Should the input be in a loading state?",
      control: {
        type: "boolean",
      },
    },
    multiline: {
      description: "Should the input be multiline?",
      control: {
        type: "boolean",
      },
    },
    placeholder: {
      description: "Placeholder content for the input.",
      control: {
        type: "text",
      },
    },
    required: {
      description: "Should the input be required?",
      control: {
        type: "boolean",
      },
    },
    select: {
      description: "Should the input be a selec?",
      control: {
        type: "boolean",
      },
    },
    sublabel: {
      description: "Sublabel content for the input.",
      control: {
        type: "text",
      },
    },
    success: {
      description: "Should the input be in a success state?",
      control: {
        type: "boolean",
      },
    },
    tint: {
      description: "Color tint of the input (when focused).",
      control: {
        type: "select",
      },
    },
    variant: {
      description: "Variation of the input.",
      control: {
        type: "radio",
      },
    },
    warning: {
      description: "Should the input be in a warning state?",
      control: {
        type: "boolean",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    label: "Default Input",
    placeholder: "Enter some text...",
  },
};

export const Select: Story = {
  render: () => (
    <Component select color="info" label="Select" placeholder="Select something...">
      <Option value="option-1">Option 1</Option>
      <Option value="option-2">Option 2</Option>
      <Option value="option-3">Option 3</Option>
    </Component>
  ),
};

export const Inverse: Story = {
  render: () => (
    <div style={{ backgroundColor: "#242c40", padding: 16 }}>
      <Flex container direction="column" gap={3}>
        <Flex container gap={2}>
          <Component
            inverse
            color="info"
            label="Inverse Input"
            placeholder="Enter some text..."
          />
          <Component inverse select color="info" label="Inverse Select">
            <Option value="option-1">Option 1</Option>
            <Option value="option-2">Option 2</Option>
            <Option value="option-3">Option 3</Option>
          </Component>
        </Flex>
      </Flex>
    </div>
  ),
};

export const VariantsAndColors: Story = {
  render: () => (
    <Flex container direction="column" gap={3}>
      <Flex container gap={2}>
        <Component
          style={{ width: 180 }}
          variant="solid"
          color="primary"
          label="Primary Solid"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="soft"
          color="primary"
          label="Primary Soft"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="plain"
          color="primary"
          label="Primary Plain"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="outlined"
          color="primary"
          label="Primary Outlined"
          placeholder="Enter some text..."
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          style={{ width: 180 }}
          variant="solid"
          color="secondary"
          label="Secondary Solid"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="soft"
          color="secondary"
          label="Secondary Soft"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="plain"
          color="secondary"
          label="Secondary Plain"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="outlined"
          color="secondary"
          label="Secondary Outlined"
          placeholder="Enter some text..."
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          style={{ width: 180 }}
          variant="solid"
          color="utility"
          label="Utility Solid"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="soft"
          color="utility"
          label="Utility Soft"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="plain"
          color="utility"
          label="Utility Plain"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="outlined"
          color="utility"
          label="Utility Outlined"
          placeholder="Enter some text..."
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          style={{ width: 180 }}
          variant="solid"
          color="error"
          label="Error Solid"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="soft"
          color="error"
          label="Error Soft"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="plain"
          color="error"
          label="Error Plain"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="outlined"
          color="error"
          label="Error Outlined"
          placeholder="Enter some text..."
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          style={{ width: 180 }}
          variant="solid"
          color="warning"
          label="Warning Solid"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="soft"
          color="warning"
          label="Warning Soft"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="plain"
          color="warning"
          label="Warning Plain"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="outlined"
          color="warning"
          label="Warning Outlined"
          placeholder="Enter some text..."
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          style={{ width: 180 }}
          variant="solid"
          color="success"
          label="Success Solid"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="soft"
          color="success"
          label="Success Soft"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="plain"
          color="success"
          label="Success Plain"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="outlined"
          color="success"
          label="Success Outlined"
          placeholder="Enter some text..."
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          style={{ width: 180 }}
          variant="solid"
          color="info"
          label="Info Solid"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="soft"
          color="info"
          label="Info Soft"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="plain"
          color="info"
          label="Info Plain"
          placeholder="Enter some text..."
        />
        <Component
          style={{ width: 180 }}
          variant="outlined"
          color="info"
          label="Info Outlined"
          placeholder="Enter some text..."
        />
      </Flex>
    </Flex>
  ),
};

export const InverseVariantsAndColors: Story = {
  render: () => (
    <Flex
      style={{ backgroundColor: "#242c40", padding: 16 }}
      container
      direction="column"
      gap={3}
    >
      <Flex container gap={2}>
        <Component
          inverse
          style={{ width: 180 }}
          variant="solid"
          color="primary"
          label="Primary Solid"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="soft"
          color="primary"
          label="Primary Soft"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="plain"
          color="primary"
          label="Primary Plain"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="outlined"
          color="primary"
          label="Primary Outlined"
          placeholder="Enter some text..."
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          inverse
          style={{ width: 180 }}
          variant="solid"
          color="secondary"
          label="Secondary Solid"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="soft"
          color="secondary"
          label="Secondary Soft"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="plain"
          color="secondary"
          label="Secondary Plain"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="outlined"
          color="secondary"
          label="Secondary Outlined"
          placeholder="Enter some text..."
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          inverse
          style={{ width: 180 }}
          variant="solid"
          color="utility"
          label="Utility Solid"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="soft"
          color="utility"
          label="Utility Soft"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="plain"
          color="utility"
          label="Utility Plain"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="outlined"
          color="utility"
          label="Utility Outlined"
          placeholder="Enter some text..."
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          inverse
          style={{ width: 180 }}
          variant="solid"
          color="error"
          label="Error Solid"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="soft"
          color="error"
          label="Error Soft"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="plain"
          color="error"
          label="Error Plain"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="outlined"
          color="error"
          label="Error Outlined"
          placeholder="Enter some text..."
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          inverse
          style={{ width: 180 }}
          variant="solid"
          color="warning"
          label="Warning Solid"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="soft"
          color="warning"
          label="Warning Soft"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="plain"
          color="warning"
          label="Warning Plain"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="outlined"
          color="warning"
          label="Warning Outlined"
          placeholder="Enter some text..."
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          inverse
          style={{ width: 180 }}
          variant="solid"
          color="success"
          label="Success Solid"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="soft"
          color="success"
          label="Success Soft"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="plain"
          color="success"
          label="Success Plain"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="outlined"
          color="success"
          label="Success Outlined"
          placeholder="Enter some text..."
        />
      </Flex>

      <Flex container gap={2}>
        <Component
          inverse
          style={{ width: 180 }}
          variant="solid"
          color="info"
          label="Info Solid"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="soft"
          color="info"
          label="Info Soft"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="plain"
          color="info"
          label="Info Plain"
          placeholder="Enter some text..."
        />
        <Component
          inverse
          style={{ width: 180 }}
          variant="outlined"
          color="info"
          label="Info Outlined"
          placeholder="Enter some text..."
        />
      </Flex>
    </Flex>
  ),
};
