import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Icons } from "@/assets";
import { IconButton } from "@/components";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      type: "string",
      control: "select",
      options: Object.keys(Icons),
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Star",
    color: "#000",
    width: 24,
    height: 24,
  },
};
