import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";
import Button from "../Button";
import Flex from "../Flex";
import Box from "../Box";
import Text from "../Text";
import { MdDelete, MdInfo, MdAdd } from "react-icons/md";

const meta: Meta<typeof Component> = {
  title: "Display/Tooltip",
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
    children: {
      description: "The element that triggers the tooltip.",
      table: {
        disable: true,
      },
    },

    // Specialized Properties //

    content: {
      description: "Tooltip content to display.",
      control: {
        type: "text",
      },
    },
    placement: {
      description: "Position of the tooltip relative to the child element.",
      control: {
        type: "select",
      },
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
      ],
    },
    arrow: {
      description: "Should the tooltip have an arrow?",
      control: {
        type: "boolean",
      },
    },
    open: {
      description: "Control the tooltip visibility (controlled mode).",
      control: {
        type: "boolean",
      },
    },
    enterDelay: {
      description: "Delay in milliseconds before showing the tooltip.",
      control: {
        type: "number",
      },
    },
    leaveDelay: {
      description: "Delay in milliseconds before hiding the tooltip.",
      control: {
        type: "number",
      },
    },
    color: {
      description: "Color of the tooltip.",
      control: {
        type: "select",
      },
    },
    tint: {
      description: "Color tint of the tooltip.",
      control: {
        type: "select",
      },
    },
    disabled: {
      description: "Should the tooltip be disabled?",
      control: {
        type: "boolean",
      },
    },
    disableInteractive: {
      description: "Should the tooltip close immediately when hovering away?",
      control: {
        type: "boolean",
      },
    },
    followCursor: {
      description: "Should the tooltip follow the cursor?",
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
    content: "This is a tooltip",
    children: <Button>Hover me</Button>,
  },
};

export const BasicTooltips: Story = {
  render: () => (
    <Flex container gap={2} style={{ padding: "40px" }}>
      <Component content="Delete">
        <Button variant="solid" color="error" icon={<MdDelete />}>
          Delete
        </Button>
      </Component>

      <Component content="Add new item">
        <Button variant="solid" color="success" icon={<MdAdd />}>
          Add
        </Button>
      </Component>

      <Component content="More information">
        <Button variant="soft" color="info" icon={<MdInfo />}>
          Info
        </Button>
      </Component>
    </Flex>
  ),
};

export const Placements: Story = {
  render: () => (
    <Flex container direction="column" gap={4} alignItems="center" style={{ padding: "100px" }}>
      <Flex container gap={2}>
        <Component content="Top Start" placement="top-start">
          <Button>Top Start</Button>
        </Component>
        <Component content="Top" placement="top">
          <Button>Top</Button>
        </Component>
        <Component content="Top End" placement="top-end">
          <Button>Top End</Button>
        </Component>
      </Flex>

      <Flex container gap={2}>
        <Flex container direction="column" gap={2}>
          <Component content="Left Start" placement="left-start">
            <Button>Left Start</Button>
          </Component>
          <Component content="Left" placement="left">
            <Button>Left</Button>
          </Component>
          <Component content="Left End" placement="left-end">
            <Button>Left End</Button>
          </Component>
        </Flex>

        <Box style={{ width: "200px" }} />

        <Flex container direction="column" gap={2}>
          <Component content="Right Start" placement="right-start">
            <Button>Right Start</Button>
          </Component>
          <Component content="Right" placement="right">
            <Button>Right</Button>
          </Component>
          <Component content="Right End" placement="right-end">
            <Button>Right End</Button>
          </Component>
        </Flex>
      </Flex>

      <Flex container gap={2}>
        <Component content="Bottom Start" placement="bottom-start">
          <Button>Bottom Start</Button>
        </Component>
        <Component content="Bottom" placement="bottom">
          <Button>Bottom</Button>
        </Component>
        <Component content="Bottom End" placement="bottom-end">
          <Button>Bottom End</Button>
        </Component>
      </Flex>
    </Flex>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <Flex container gap={2} style={{ padding: "40px" }} alignItems="center">
      <Component content="Arrow tooltip" arrow placement="top">
        <Button>Top</Button>
      </Component>
      <Component content="Arrow tooltip" arrow placement="bottom">
        <Button>Bottom</Button>
      </Component>
      <Component content="Arrow tooltip" arrow placement="left">
        <Button>Left</Button>
      </Component>
      <Component content="Arrow tooltip" arrow placement="right">
        <Button>Right</Button>
      </Component>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex container gap={2} style={{ padding: "40px" }}>
      <Component content="Primary tooltip" color="primary" tint={500}>
        <Button color="primary">Primary</Button>
      </Component>
      <Component content="Secondary tooltip" color="secondary" tint={500}>
        <Button color="secondary">Secondary</Button>
      </Component>
      <Component content="Tertiary tooltip" color="tertiary" tint={500}>
        <Button color="tertiary">Tertiary</Button>
      </Component>
      <Component content="Error tooltip" color="error" tint={500}>
        <Button color="error">Error</Button>
      </Component>
      <Component content="Warning tooltip" color="warning" tint={600}>
        <Button color="warning">Warning</Button>
      </Component>
      <Component content="Success tooltip" color="success" tint={600}>
        <Button color="success">Success</Button>
      </Component>
      <Component content="Info tooltip" color="info" tint={500}>
        <Button color="info">Info</Button>
      </Component>
    </Flex>
  ),
};

export const DelayedTooltip: Story = {
  render: () => (
    <Flex container gap={2} style={{ padding: "40px" }}>
      <Component content="Opens after 500ms" enterDelay={500}>
        <Button>Hover (500ms delay)</Button>
      </Component>
      <Component content="Opens after 1000ms" enterDelay={1000}>
        <Button>Hover (1000ms delay)</Button>
      </Component>
      <Component content="Closes after 500ms" leaveDelay={500}>
        <Button>Hover (stays 500ms)</Button>
      </Component>
    </Flex>
  ),
};

export const ControlledTooltip: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <Flex container gap={2} style={{ padding: "40px" }} alignItems="center">
        <Component
          content="This is a controlled tooltip"
          open={open}
          onOpen={() => console.log("Tooltip opened")}
          onClose={() => console.log("Tooltip closed")}
        >
          <Button>Controlled Tooltip</Button>
        </Component>
        <Button onClick={() => setOpen(!open)}>{open ? "Close" : "Open"} Tooltip</Button>
      </Flex>
    );
  },
};

export const DisabledElements: Story = {
  render: () => (
    <Flex container gap={2} style={{ padding: "40px" }}>
      <Component content="You don't have permission to do this">
        <span>
          <Button disabled>Disabled Button</Button>
        </span>
      </Component>
    </Flex>
  ),
};

export const LongText: Story = {
  render: () => (
    <Flex container gap={2} style={{ padding: "40px" }}>
      <Component content="This is a very long tooltip text that will wrap to multiple lines when it exceeds the maximum width of 300 pixels.">
        <Button>Long Tooltip</Button>
      </Component>
    </Flex>
  ),
};

export const FollowCursor: Story = {
  render: () => (
    <Box style={{ padding: "40px" }}>
      <Component content="Following your cursor" followCursor>
        <Box
          style={{
            width: "300px",
            height: "200px",
            backgroundColor: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <Text>Hover over this box</Text>
        </Box>
      </Component>
    </Box>
  ),
};

export const NonInteractive: Story = {
  render: () => (
    <Flex container gap={2} style={{ padding: "40px" }}>
      <Component content="This tooltip closes immediately" disableInteractive>
        <Button>Non-interactive</Button>
      </Component>
      <Component content="You can hover over this tooltip">
        <Button>Interactive (default)</Button>
      </Component>
    </Flex>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Flex container gap={2} style={{ padding: "40px" }}>
      <Component
        content="Custom styled tooltip"
        arrow
        color="primary"
        tint={700}
        className="custom-tooltip"
      >
        <Button variant="outlined" color="primary">
          Custom Style
        </Button>
      </Component>
    </Flex>
  ),
};

export const WithDifferentChildren: Story = {
  render: () => (
    <Flex container gap={4} style={{ padding: "40px" }} alignItems="center">
      <Component content="Tooltip on text">
        <Text component="span" style={{ cursor: "pointer", textDecoration: "underline" }}>
          Hover over this text
        </Text>
      </Component>

      <Component content="Tooltip on box">
        <Box
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#6068f8",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        />
      </Component>

      <Component content="Tooltip on icon">
        <MdInfo size={32} style={{ cursor: "pointer", color: "#6068f8" }} />
      </Component>
    </Flex>
  ),
};
