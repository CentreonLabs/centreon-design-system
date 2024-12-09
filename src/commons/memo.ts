import { equals, omit, pick } from "ramda";
import { memo } from "react";

interface MemoizeComponentProps<TProps> {
	Component: (props?: TProps) => JSX.Element | null | undefined;
	propsToMemoize?: Array<keyof TProps>;
	all?: boolean;
}

export const memoizeComponent = <TProps>({
	Component,
	propsToMemoize = [],
	all,
}: MemoizeComponentProps<TProps>) =>
	memo(Component, (prevProps: TProps, nextProps: TProps) => {
		if (all) {
			return equals(prevProps, nextProps);
		}

		const prevPropsToMemoize = omit(
			["children"] as never,
			pick(propsToMemoize, prevProps),
		);
		const nextPropsToMemoize = omit(
			["children"] as never,
			pick(propsToMemoize, nextProps),
		);

		return equals(prevPropsToMemoize, nextPropsToMemoize);
	});
