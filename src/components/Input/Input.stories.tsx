import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";
import Flex from "../Flex";
import Box from "../Box";
import Option from "../Option";
import Spacer from "../Spacer";

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
      description: "Should the component have a backdrop blur?",
      control: {
        type: "boolean",
      },
    },
    color: {
      description: "Color of the component (when focused).",
      control: {
        type: "select",
      },
    },
    colorBg: {
      description: "Background color of the component (solid variant only).",
      control: {
        type: "select",
      },
    },
    disabled: {
      description: "Should the component be in a disabled state?",
      control: {
        type: "boolean",
      },
    },
    elevation: {
      description: "Elevation level of the component.",
      control: {
        type: "select",
      },
    },
    error: {
      description: "Should the component be in an error state?",
      control: {
        type: "boolean",
      },
    },
    fullWidth: {
      description: "Should the component be the full width of its container?",
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
      description: "Should the component be in an info state?",
      control: {
        type: "boolean",
      },
    },
    inverse: {
      description: "Should the component use inverse colors?",
      control: {
        type: "boolean",
      },
    },
    label: {
      description: "Label content for the component.",
      control: {
        type: "text",
      },
    },
    loading: {
      description: "Should the component be in a loading state?",
      control: {
        type: "boolean",
      },
    },
    multiline: {
      description: "Should the component be multiline?",
      control: {
        type: "boolean",
      },
    },
    placeholder: {
      description: "Placeholder content for the component.",
      control: {
        type: "text",
      },
    },
    required: {
      description: "Should the component be required?",
      control: {
        type: "boolean",
      },
    },
    rounded: {
      description: "Should the component be rounded?",
      control: {
        type: "boolean",
      },
    },
    select: {
      description: "Should the component be a select?",
      control: {
        type: "boolean",
      },
    },
    sublabel: {
      description: "Sublabel content for the component.",
      control: {
        type: "text",
      },
    },
    success: {
      description: "Should the component be in a success state?",
      control: {
        type: "boolean",
      },
    },
    suspended: {
      description: "Should the component be in a suspended state?",
      control: {
        type: "boolean",
      },
    },
    tint: {
      description: "Color tint of the component (when focused).",
      control: {
        type: "select",
      },
    },
    variant: {
      description: "Variation of the component.",
      control: {
        type: "select",
      },
    },
    warning: {
      description: "Should the component be in a warning state?",
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
  render: (args) => (
    <Component select color="info" label="Select" placeholder="Select something..." {...args}>
      <Option value="option-1">Option 1</Option>
      <Option value="option-2">Option 2</Option>
      <Option value="option-3">Option 3</Option>
    </Component>
  ),
};

export const VariantsAndBGColors: Story = {
  render: (args) => (
    <Flex container direction="column" gap={4}>
      <Box radius={10} color="bg4" style={{ padding: 16 }}>
        <Flex container alignItems="center" gap={4}>
          <Component
            style={{ width: 180 }}
            variant="solid"
            colorBg="bg1"
            label="BG1 Solid"
            placeholder="Enter some text..."
            {...args}
          />
          <Component
            style={{ width: 180 }}
            variant="solid"
            colorBg="bg2"
            label="BG2 Solid"
            placeholder="Enter some text..."
            {...args}
          />
          <Component
            style={{ width: 180 }}
            variant="solid"
            colorBg="bg3"
            label="BG3 Solid"
            placeholder="Enter some text..."
            {...args}
          />
          <Component
            style={{ width: 180 }}
            variant="solid"
            colorBg="bg4"
            label="BG4 Solid"
            placeholder="Enter some text..."
            {...args}
          />
        </Flex>

        <Spacer size={4} />

        <Flex container alignItems="center" gap={4}>
          <Component
            style={{ width: 180 }}
            variant="solid"
            colorBg="bgInverse1"
            label="BG1 Inverse Solid"
            placeholder="Enter some text..."
            {...args}
          />
          <Component
            style={{ width: 180 }}
            variant="solid"
            colorBg="bgInverse2"
            label="BG2 Inverse Solid"
            placeholder="Enter some text..."
            {...args}
          />
          <Component
            style={{ width: 180 }}
            variant="solid"
            colorBg="bgInverse3"
            label="BG3 Inverse Solid"
            placeholder="Enter some text..."
            {...args}
          />
          <Component
            style={{ width: 180 }}
            variant="solid"
            colorBg="bgInverse4"
            label="BG4 Inverse Solid"
            placeholder="Enter some text..."
            {...args}
          />
        </Flex>
      </Box>

      <Box radius={10} color="bgInverse4" style={{ padding: 16 }}>
        <Flex container alignItems="center" gap={4}>
          <Component
            style={{ width: 180 }}
            inverse
            variant="solid"
            colorBg="bg1"
            label="BG1 Solid"
            placeholder="Enter some text..."
            {...args}
          />
          <Component
            style={{ width: 180 }}
            inverse
            variant="solid"
            colorBg="bg2"
            label="BG2 Solid"
            placeholder="Enter some text..."
            {...args}
          />
          <Component
            style={{ width: 180 }}
            inverse
            variant="solid"
            colorBg="bg3"
            label="BG3 Solid"
            placeholder="Enter some text..."
            {...args}
          />
          <Component
            style={{ width: 180 }}
            inverse
            variant="solid"
            colorBg="bg4"
            label="BG4 Solid"
            placeholder="Enter some text..."
            {...args}
          />
        </Flex>

        <Spacer size={4} />

        <Flex container alignItems="center" gap={4}>
          <Component
            style={{ width: 180 }}
            inverse
            variant="solid"
            colorBg="bgInverse1"
            label="BG1 Inverse Solid"
            placeholder="Enter some text..."
            {...args}
          />
          <Component
            style={{ width: 180 }}
            inverse
            variant="solid"
            colorBg="bgInverse2"
            label="BG2 Inverse Solid"
            placeholder="Enter some text..."
            {...args}
          />
          <Component
            style={{ width: 180 }}
            inverse
            variant="solid"
            colorBg="bgInverse3"
            label="BG3 Inverse Solid"
            placeholder="Enter some text..."
            {...args}
          />
          <Component
            style={{ width: 180 }}
            inverse
            variant="solid"
            colorBg="bgInverse4"
            label="BG4 Inverse Solid"
            placeholder="Enter some text..."
            {...args}
          />
        </Flex>
      </Box>

      <Flex container alignItems="center" gap={4}>
        <Box radius={10} color="bg4" style={{ padding: 16 }}>
          <Component
            style={{ width: 180 }}
            variant="soft"
            colorBg="bg1"
            label="Input Soft"
            placeholder="Enter some text..."
            {...args}
          />
        </Box>
        <Box radius={10} color="bgInverse4" style={{ padding: 16 }}>
          <Component
            style={{ width: 180 }}
            inverse
            variant="soft"
            label="Input Inverse Soft"
            placeholder="Enter some text..."
            {...args}
          />
        </Box>
      </Flex>

      <Flex container alignItems="center" gap={4}>
        <Box radius={10} color="bg4" style={{ padding: 16 }}>
          <Component
            style={{ width: 180 }}
            variant="plain"
            colorBg="bg1"
            label="Input Plain"
            placeholder="Enter some text..."
            {...args}
          />
        </Box>
        <Box radius={10} color="bgInverse4" style={{ padding: 16 }}>
          <Component
            style={{ width: 180 }}
            inverse
            variant="plain"
            label="Input Inverse Plain"
            placeholder="Enter some text..."
            {...args}
          />
        </Box>
      </Flex>

      <Flex container alignItems="center" gap={4}>
        <Box radius={10} color="bg4" style={{ padding: 16 }}>
          <Component
            style={{ width: 180 }}
            variant="outlined"
            colorBg="bg1"
            label="Input Outlined"
            placeholder="Enter some text..."
            {...args}
          />
        </Box>
        <Box radius={10} color="bgInverse4" style={{ padding: 16 }}>
          <Component
            style={{ width: 180 }}
            inverse
            variant="outlined"
            label="Input Inverse Outlined"
            placeholder="Enter some text..."
            {...args}
          />
        </Box>
      </Flex>

      <Flex container alignItems="center" gap={4}>
        <Box radius={10} color="bg4" style={{ padding: 16 }}>
          <Component
            style={{ width: 180 }}
            variant="glass"
            colorBg="bg1"
            label="Input Glass"
            placeholder="Enter some text..."
            {...args}
          />
        </Box>
        <Box radius={10} color="bgInverse4" style={{ padding: 16 }}>
          <Component
            style={{ width: 180 }}
            inverse
            variant="glass"
            label="Input Inverse Glass"
            placeholder="Enter some text..."
            {...args}
          />
        </Box>
      </Flex>
    </Flex>
  ),
};
