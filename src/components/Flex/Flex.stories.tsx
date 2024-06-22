import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";

const meta: Meta<typeof Component> = {
  title: "Layout/Flex",
  tags: ["autodocs"],
  component: Component,
  argTypes: {
    // General Properties //

    props: {
      description: "Nested properties of the component.",
      table: {
        disable: true,
      },
    },
    classes: {
      description: "Nested CSS classes of the component.",
      table: {
        disable: true,
      },
    },
    className: {
      description: "CSS class of the component.",
      table: {
        disable: true,
      },
    },
    style: {
      description: "Inline styling of the component.",
      table: {
        disable: true,
      },
    },
    children: {
      description: "Content inside of the component.",
      table: {
        disable: true,
      },
    },
    component: {
      description: "HTML element to render the component as.",
      control: {
        type: "radio",
      },
    },

    // Specialized Properties //

    alignContent: {
      description: "The vertical alignment of the child flex items (particularly when flex items are overflowing).",
      control: {
        type: "select",
      },
      options: ["stretch", "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
    },
    alignItems: {
      description: "The vertical alignment of the child flex items.",
      control: {
        type: "select",
      },
      options: ["stretch", "flex-start", "flex-end", "center", "baseline"],
    },
    alignSelf: {
      description: "The vertical alignment of this component's container.",
      control: {
        type: "select",
      },
      options: ["auto", "stretch", "flex-start", "flex-end", "center", "baseline"],
    },
    columnGap: {
      description: "The horizontal gap between the flex items.",
      control: {
        type: "range",
        min: 0,
        max: 24,
        step: 1,
      },
    },
    container: {
      description: "Should the component be a flex container?",
      control: {
        type: "boolean",
      },
    },
    containerInline: {
      description: "Should the component be an inline flex container?",
      control: {
        type: "boolean",
      },
    },
    direction: {
      description: "The direction of the flex items.",
      control: {
        type: "select",
      },
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    gap: {
      description: "The gap between the flex items.",
      control: {
        type: "range",
        min: 0,
        max: 24,
        step: 1,
      },
    },
    justifyContent: {
      description: "The horizontal alignment of the child flex items.",
      control: {
        type: "select",
      },
      options: ["stretch", "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
    },
    justifyItems: {
      description: "The horizontal alignment of the child flex items (particularly when flex items are overflowing).",
      control: {
        type: "select",
      },
      options: ["stretch", "flex-start", "flex-end", "center", "baseline"],
    },
    justifySelf: {
      description: "The horizontal alignment of this component's container.",
      control: {
        type: "select",
      },
      options: ["auto", "stretch", "flex-start", "flex-end", "center", "baseline"],
    },
    rowGap: {
      description: "The vertical gap between the flex items.",
      control: {
        type: "range",
        min: 0,
        max: 24,
        step: 1,
      },
    },
    visualize: {
      description: "Should the component be visualized?",
      control: {
        type: "boolean",
      },
    },
    wrap: {
      description: "The wrapping behavior of the flex items.",
      control: {
        type: "select",
      },
      options: ["wrap", "wrap-reverse", "nowrap"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    container: true,
    visualize: true,
    children: (
      <>
        <Component
          container
          alignItems="center"
          style={{
            height: "32px",
            padding: "0 12px",
            border: "1px solid #00000008",
            borderRadius: "6px",
            backgroundColor: "#e0e0e0",
          }}>
          Flex Item 1
        </Component>

        <Component
          container
          alignItems="center"
          style={{
            height: "48px",
            padding: "0 12px",
            border: "1px solid #00000008",
            borderRadius: "6px",
            backgroundColor: "#e0e0e0",
          }}>
          Flex Item 2
        </Component>

        <Component
          container
          alignItems="center"
          style={{
            height: "64px",
            padding: "0 12px",
            border: "1px solid #00000008",
            borderRadius: "6px",
            backgroundColor: "#e0e0e0",
          }}>
          Flex Item 3
        </Component>
      </>
    ),
  },
};
