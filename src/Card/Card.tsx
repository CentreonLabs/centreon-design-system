import { useMemo } from "react";
import { memoizeComponent } from "../commons/memo";
import type { CardProps } from "./models";
import { commonStyle, variantStyles } from "./styles";

const Card = ({ variant = "ghost", children }: CardProps) => {
	const variantStyle = useMemo(() => variantStyles[variant], [variant]);

	return <div className={`${commonStyle} ${variantStyle}`}>{children}</div>;
};

export default memoizeComponent({
	Component: Card,
	all: true,
});
