import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "@/contexts/ThemeContext";

interface BatteryProps {
  life: number;
}

export const Battery: React.FC<BatteryProps> = ({ life }) => {
  const pathRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      gsap.to(pathRef.current, {
        duration: 0.5,
        scaleY: life / 100,
        transformOrigin: "bottom",
      });
    }
  }, [life]);

  const { theme } = useTheme();

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="7"
        y="6"
        width="10"
        height="15"
        rx="1.5"
        fill={theme === "light" ? "black" : "white"}
      />
      <rect
        x="8"
        y="7"
        width="8"
        height="13"
        rx="1"
        fill="#22c55e"
        ref={pathRef}
      />
      <rect
        x="9"
        y="3"
        width="6"
        height="2"
        rx="1"
        fill={theme === "light" ? "black" : "white"}
      />
    </svg>
  );
};
