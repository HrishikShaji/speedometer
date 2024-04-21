import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export const usePosition = () => {
  const meterOneRef = useRef<HTMLDivElement>(null);
  const meterTwoRef = useRef<HTMLDivElement>(null);
  const speedValueRef = useRef<HTMLDivElement>(null);
  const rpmValueRef = useRef<HTMLDivElement>(null);
  const speedUnitRef = useRef<HTMLDivElement>(null);
  const rpmUnitRef = useRef<HTMLDivElement>(null);
  const batteryRef = useRef<HTMLDivElement>(null);
  const animation = useRef<gsap.core.Timeline | undefined>();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animation.current = gsap.timeline({ paused: true });
      animation.current
        .to(meterOneRef.current, {
          top: "63%",
          left: "-5%",
          duration: 0.5,
          scale: 0.5,
        })
        .to(meterTwoRef.current, {
          top: "63%",
          left: "10%",
          duration: 0.5,
          scale: 0.5,
        })
        .to(speedValueRef.current, {
          top: "86%",
          left: "97px",
          duration: 0.5,
          scale: 0.25,
        })
        .to(rpmValueRef.current, {
          top: "86%",
          left: "258px",
          duration: 0.5,
          scale: 0.25,
        })
        .to(speedUnitRef.current, {
          top: "92%",
          left: "90px",
          duration: 0.5,
          scale: 0.3,
        })
        .to(rpmUnitRef.current, {
          top: "92%",
          left: "259px",
          duration: 0.5,
          scale: 0.3,
        })
        .to(batteryRef.current, {
          top: "91%",
          left: "350px",
          duration: 0.5,
          scale: 1,
        });
    });

    return () => ctx.kill();
  }, []);

  return {
    animation,
    meterOneRef,
    meterTwoRef,
    speedUnitRef,
    speedValueRef,
    rpmUnitRef,
    rpmValueRef,
    batteryRef,
  };
};
