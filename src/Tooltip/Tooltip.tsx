import { always, cond, equals, isNil, pick, type } from "ramda";
import {
	type ReactNode,
	useCallback,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { createPortal } from "react-dom";
import Text from "../Text/Text";
import { memoizeComponent } from "../commons/memo";
import type { TooltipProps } from "./models";
import { commonStyle } from "./styles";

const Tooltip = ({
	children,
	position = "top",
	title,
}: TooltipProps): JSX.Element => {
	const [isMouseHover, setIsMouseHover] = useState(false);
	const [tooltipDimension, setTooltipDimension] = useState<{
		width: number;
		height: number;
	} | null>(null);
	const elementRef = useRef<HTMLDivElement | null>(null);
	const tooltipRef = useRef<HTMLDivElement | null>(null);
	const closeTimeoutRef = useRef<number | null>(null);

	const openTooltip = useCallback(() => {
		if (closeTimeoutRef.current) {
			clearTimeout(closeTimeoutRef.current);
		}
		setIsMouseHover(true);
	}, [closeTimeoutRef.current]);
	const closeTooltip = useCallback((): void => {
		closeTimeoutRef.current = setTimeout(() => setIsMouseHover(false), 100);
	}, []);

	const positionStyle = useMemo(() => {
		if (isNil(elementRef.current)) {
			return null;
		}

		const rect = elementRef.current.getBoundingClientRect();

		return cond([
			[
				equals("top"),
				always({
					top: rect.top - 12 - (tooltipDimension?.height || 0),
					left: rect.left + (rect.right - rect.left) / 2,
					transform: "translate(-50%, 0px)",
				}),
			],
			[
				equals("bottom"),
				always({
					top: rect.bottom + 12,
					left: rect.left + (rect.right - rect.left) / 2,
					transform: "translate(-50%, 0px)",
				}),
			],
			[
				equals("left"),
				always({
					top: rect.top + (rect.bottom - rect.top) / 2,
					left: rect.left - 8 - (tooltipDimension?.width || 0),
					transform: "translate(0px, -50%)",
				}),
			],
			[
				equals("right"),
				always({
					top: rect.top + (rect.bottom - rect.top) / 2,
					left: rect.right + 12,
					transform: "translate(0px, -50%)",
				}),
			],
		])(position);
	}, [position, elementRef.current, tooltipDimension]);

	const tooltipOpacity = useMemo(
		() => (isNil(tooltipDimension) ? "opacity-0" : "opacity-100"),
		[tooltipDimension],
	);

	const titleRender = useMemo(
		() => (equals(type(title), "String") ? <Text>{title}</Text> : title),
		[title],
	);

	useLayoutEffect(() => {
		const tooltipRect = tooltipRef.current?.getBoundingClientRect();

		setTooltipDimension(
			tooltipRect ? pick(["width", "height"], tooltipRect) : null,
		);
	}, [isMouseHover]);

	return (
		<>
			<div
				ref={elementRef}
				onMouseEnter={openTooltip}
				onMouseLeave={closeTooltip}
			>
				{children}
			</div>
			{isMouseHover && positionStyle ? (
				createPortal(
					<div
						className={`${commonStyle} ${tooltipOpacity}`}
						style={positionStyle}
						ref={tooltipRef}
						onMouseEnter={openTooltip}
						onMouseLeave={closeTooltip}
					>
						{titleRender}
					</div>,
					document.body,
				)
			) : (
				<div className="hidden" />
			)}
		</>
	);
};

export default memoizeComponent({
	Component: Tooltip,
	all: true,
});
