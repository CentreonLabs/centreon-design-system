import { T, always, cond, equals, isNil } from "ramda";
import { useMemo } from "react";
import { memoizeComponent } from "../commons/memo";
import type { Props } from "./models";

const PComponent = ({
	children,
	className,
}: Required<Pick<Props, "children" | "className">>): JSX.Element => (
	<p className={className.trim()}>{children}</p>
);

const SpanComponent = ({
	children,
	className,
}: Required<Pick<Props, "children" | "className">>): JSX.Element => (
	<span className={className.trim()}>{children}</span>
);

const Text = ({
	variant = "label",
	size = "md",
	className = "",
	component = "p",
	children,
	align,
	weight,
	color,
}: Props): JSX.Element => {
	const Component = useMemo(
		() => (equals("p", component) ? PComponent : SpanComponent),
		[component],
	);

	const textSize = useMemo(
		() =>
			cond([
				[equals("label-sm"), always("text-label-sm")],
				[equals("label-md"), always("text-label-md")],
				[equals("label-lg"), always("text-label-lg")],
				[T, always("text-label-md")],
			])(`${variant}-${size}`),
		[variant, size],
	);

	const textAlign = useMemo(
		() =>
			cond([
				[equals("start"), always("text-start")],
				[equals("end"), always("text-end")],
				[equals("left"), always("text-left")],
				[equals("right"), always("text-right")],
				[equals("center"), always("text-center")],
				[equals("justify"), always("text-justify")],
				[T, always("")],
			])(align),
		[align],
	);

	const fontWeight = useMemo(
		() =>
			cond([
				[equals("thin"), always("font-thin")],
				[equals("light"), always("font-light")],
				[equals("normal"), always("font-normal")],
				[equals("medium"), always("font-medium")],
				[equals("semibold"), always("font-semibold")],
				[equals("bold"), always("font-bold")],
				[T, always("")],
			])(weight),
		[weight],
	);
	const textColor = useMemo(
		() =>
			cond([
				[equals("text"), always("text-text")],
				[equals("invert"), always("text-text-invert")],
				[equals("secondary"), always("text-text-secondary")],
				[equals("primary"), always("text-text-primary")],
				[equals("disabled"), always("text-text-disabled")],
				[T, always("text-text")],
			])(color),
		[color],
	);

	return (
		<Component
			className={`${textSize} ${textColor} ${textAlign} ${fontWeight} ${className}`}
		>
			{children}
		</Component>
	);
};

export default memoizeComponent<Props>({
	Component: Text,
	all: true,
});
