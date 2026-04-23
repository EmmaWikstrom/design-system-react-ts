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
    children: "Add task",
    variant: "primary",
  },
};

export const Neutral: Story = {
  args: {
    children: "Add task",
    variant: "neutral",
  },
};

export const Subtle: Story = {
  args: {
    children: "Add task",
    variant: "subtle",
  },
};

export const Disabled: Story = {
  args: {
    children: "Add task",
    variant: "primary",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    children: "Add task",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Add task",
    size: "lg",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Add task ＋",
  },
};
