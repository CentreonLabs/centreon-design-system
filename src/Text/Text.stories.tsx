import Text from "./Text";

export default {
	title: "Display/Text",
	component: Text,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { children: "A quick brown fox is jumping across the field" },
};

export const Default = {
	args: {},
};

export const Secondary = {
	args: { color: "secondary" },
};

export const Primary = {
	args: { color: "primary" },
};

export const Disabled = {
	args: { color: "disabled" },
};

export const Thin = {
	args: { weight: "thin" },
};

export const Light = {
	args: { weight: "light" },
};

export const Normal = {
	args: { weight: "normal" },
};

export const Medium = {
	args: { weight: "medium" },
};

export const Semibold = {
	args: { weight: "semibold" },
};

export const Bold = {
	args: { weight: "bold" },
};

export const LabelSmall = {
	args: { variant: "label", size: "sm" },
};

export const LabelMedium = {
	args: { variant: "label", size: "md" },
};

export const LabelLarge = {
	args: { variant: "label", size: "lg" },
};

const AlignRender = (args) => (
	<div className="w-[50vw] border-solid border-2 border-text">
		<Text {...args} />
	</div>
);

export const AlignStart = {
	args: { align: "start" },
	render: AlignRender,
};

export const AlignCenter = {
	args: { align: "center" },
	render: AlignRender,
};

export const AlignEnd = {
	args: { align: "end" },
	render: AlignRender,
};

export const AlignLeft = {
	args: { align: "left" },
	render: AlignRender,
};

export const AlignRight = {
	args: { align: "right" },
	render: AlignRender,
};

export const AlignJustify = {
	args: { align: "justify" },
	render: AlignRender,
};

export const WithCustomClassName = {
	args: {
		className:
			"border-2 border-solid border-surface-primary p-2 tracking-widest rounded-full",
	},
};
