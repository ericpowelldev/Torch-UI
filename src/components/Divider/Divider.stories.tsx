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

    // Specialized Properties //

    direction: {
      description: "Direction of the divider.",
      control: {
        type: "radio",
      },
    },
    gap: {
      description: "Gap between the child items.",
      control: {
        type: "range",
        min: 0,
        max: 24,
        step: 1,
      },
    },
    gutter: {
      description: "Outside padding around the divider.",
      control: {
        type: "range",
        min: 0,
        max: 24,
        step: 1,
      },
    },
    lineStyle: {
      description: "Style of the line(s).",
      control: {
        type: "select",
      },
      options: [`solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`],
    },
    lineWidth: {
      description: "Width of the line(s).",
      control: {
        type: "range",
        min: 0,
        max: 12,
        step: 1,
      },
    },
    spaceAfter: {
      description: "Margin below (or margin right when vertical).",
      control: {
        type: "range",
        min: 0,
        max: 24,
        step: 1,
      },
    },
    spaceBefore: {
      description: "Margin above (or margin left when vertical).",
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
