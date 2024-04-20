import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

interface PositionProps {
  y: number;
  x: number;
  duration: number;
  scale: number;
}

export const usePosition = ({ x, y, duration, scale }: PositionProps) => {
  const elementRef = useRef<HTMLDivElement | HTMLHeadingElement>(null);
  const animation = useRef<gsap.core.Timeline | undefined>();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animation.current = gsap.timeline({ paused: true });
      animation.current.to(elementRef.current, {
        y,
        x,
        duration,
        scale,
        transformOrigin: "center center",
      });
    });

    return () => ctx.kill();
  }, []);

  return { animation, elementRef };
};
