import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Add task",
    variant: "primary",
  },
};

export const Neutral: Story = {
  args: {
    label: "Add task",
    variant: "neutral",
  },
};

export const Subtle: Story = {
  args: {
    label: "Add task",
    variant: "subtle",
  },
};

export const Disabled: Story = {
  args: {
    label: "Add task",
    variant: "primary",
    disabled: true,
  },
};
