import type { Meta, StoryObj } from "@storybook/react/*";
import Text from "../Text/Text";
import Card from "./Card";

const meta: Meta<typeof Card> = {
	title: "Display/Card",
	component: Card,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	args: { children: <Text>This is a card content</Text> },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Outlined: Story = {
	args: {
		variant: "outlined",
	},
};

export const Elevated: Story = {
	args: {
		variant: "elevated",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
	},
};
