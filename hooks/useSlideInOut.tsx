import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export const useSlideInOut = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const slideAnimation = useRef<gsap.core.Animation | undefined>();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      slideAnimation.current = gsap.to(slideRef.current, {
        yPercent: -100,
        duration: 0.5,
        paused: true,
      });
    });

    return () => ctx.kill();
  }, []);
  return { slideRef, slideAnimation };
};
