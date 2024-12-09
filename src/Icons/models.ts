export interface BaseIconProps {
	size?: "sm" | "md" | "lg" | "full";
	className?: string;
	color?: "default" | "primary" | "secondary" | "disabled";
	children: string | JSX.Element | Array<JSX.Element>;
}

export type IconProps = Omit<BaseIconProps, "children">;
