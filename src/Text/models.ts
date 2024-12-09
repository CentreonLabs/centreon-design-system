import type { CommonProps, Size } from "../commons/models";

type TextVariant = "label";

type Component = "p" | "span";

export interface Props extends CommonProps {
	variant?: TextVariant;
	size?: Size;
	component?: Component;
	children: string | JSX.Element;
	align?: "left" | "center" | "right" | "justify" | "start" | "end";
	weight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold";
	color?: "text" | "invert" | "disabled" | "secondary" | "primary";
}
