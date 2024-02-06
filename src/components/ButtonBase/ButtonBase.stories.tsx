import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  title: "Buttons/ButtonBase",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  component: Component,
  argTypes: {
    children: {
      description: "The content inside of the button.",
      control: {
        type: "text",
      },
    },
    classes: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    children: "Default Button Base",
  },
};
