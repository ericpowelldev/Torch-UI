import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";

const meta: Meta<typeof Component> = {
  title: "Display/Divider",
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
    component: {
      description: "HTML element to render the component as.",
      control: {
        type: "radio",
      },
    },

    // Specialized Properties //

    direction: {
      description: "Direction of the divider.",
      control: {
        type: "radio",
      },
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
    gutter: {
      description: "The outside padding around the divider.",
      control: {
        type: "range",
        min: 0,
        max: 24,
        step: 1,
      },
    },
    marginAfter: {
      description: "The margin below (or margin right when vertical).",
      control: {
        type: "range",
        min: 0,
        max: 24,
        step: 1,
      },
    },
    marginBefore: {
      description: "The margin above (or margin left when vertical).",
      control: {
        type: "range",
        min: 0,
        max: 24,
        step: 1,
      },
    },
    textPosition: {
      description: "The position of the text from left to right (from 0 to 1).",
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    tip: {
      description: "When a tip is present, the help icon will be displayed along with a tooltip on hover.",
      control: {
        type: "text",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    children: "DIVIDER",
    tip: "This is a divider.",
  },
  render: (props) => (
    <div style={{ width: `100%`, height: `256px` }}>
      <Component {...props} />
    </div>
  ),
};
