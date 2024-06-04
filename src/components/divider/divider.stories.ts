import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@/components";

const meta = {
  title: "Components/Divider",
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { direction: "vertical" },
};
