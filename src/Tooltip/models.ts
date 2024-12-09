export interface TooltipProps {
	children: string | JSX.Element | Array<JSX.Element>;
	title: string | JSX.Element;
	position?: "top" | "bottom" | "left" | "right";
}
