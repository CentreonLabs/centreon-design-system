import type { Meta, StoryObj } from "@storybook/react/*";
import Text from "../Text/Text";
import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
	title: "Display/Tooltip",
	component: Tooltip,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	args: { children: <Text>Content</Text>, title: "Tooltip" },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	args: {},
};

export const Top: Story = {
	args: { position: "top" },
};

export const Right: Story = {
	args: { position: "right" },
};

export const Bottom: Story = {
	args: { position: "bottom" },
};

export const Left: Story = {
	args: { position: "left" },
};

export const CustomTitle: Story = {
	args: {
		title: (
			<div>
				<Text>Hello from</Text>
				<Text>Custom content</Text>
			</div>
		),
	},
};
