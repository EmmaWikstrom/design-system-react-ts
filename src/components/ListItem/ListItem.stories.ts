import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItem } from "./ListItem";

const meta = {
  title: "Components/ListItem",
  component: ListItem,
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Workout",
    checked: false,
    onToggle: () => {},
    onEdit: () => {},
    onDelete: () => {},
  },
};

export const Checked: Story = {
  args: {
    label: "Workout",
    checked: true,
    onToggle: () => {},
    onEdit: () => {},
    onDelete: () => {},
  },
};

export const LongLabel: Story = {
  args: {
    label: "This is a very long task name that should still render correctly",
    checked: false,
    onToggle: () => {},
    onEdit: () => {},
    onDelete: () => {},
  },
};
