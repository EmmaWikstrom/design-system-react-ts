import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { ListItem } from "../ListItem/ListItem";

const meta = {
  title: "Components/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ListItem
          label="Workout"
          checked={true}
          onToggle={() => {}}
          onEdit={() => {}}
          onDelete={() => {}}
        />
        <ListItem
          label="Clean floors"
          checked={false}
          onToggle={() => {}}
          onEdit={() => {}}
          onDelete={() => {}}
        />
        <ListItem
          label="Cook dinner"
          checked={false}
          onToggle={() => {}}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      </>
    ),
  },
};

export const Empty: Story = {
  args: {
    children: null,
  },
};
