import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";

const meta: Meta<typeof Component> = {
  title: "Layout/Container",
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
      description: "Content inside of the component.",
      control: {
        type: "text",
      },
    },
    component: {
      description: "HTML element to render the component as.",
      control: {
        type: "select",
      },
    },

    // Specialized Properties //

    horizontalPadding: {
      description: "Horizontal padding of the container.",
      control: {
        type: "boolean",
      },
    },
    verticalPadding: {
      description: "Vertical padding of the container.",
      control: {
        type: "boolean",
      },
    },
    maxWidth: {
      description: "Maximum width of the container.",
      control: {
        type: "radio",
      },
    },
    visualize: {
      description: "Should the component be visualized?",
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
    children: <div style={{ width: "256px", height: "256px" }} />,
    visualize: true,
  },
};
