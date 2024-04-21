import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

interface PositionProps {
	top: string;
	left: string;
	duration: number;
	scale: number;
}

export const usePosition = ({ top, left, duration, scale }: PositionProps) => {
	const elementRef = useRef<HTMLDivElement | HTMLHeadingElement>(null);
	const animation = useRef<gsap.core.Timeline | undefined>();
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			animation.current = gsap.timeline({ paused: true });
			animation.current.to(elementRef.current, {
				top,
				left,
				duration,
				scale,
				transformOrigin: "center center",
			});
		});

		return () => ctx.kill();
	}, []);

	return { animation, elementRef };
};
