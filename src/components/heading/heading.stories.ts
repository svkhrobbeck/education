import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@/components";

const meta = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Heading",
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: "h1",
  },
};
