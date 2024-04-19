"use client";

import { useEffect } from "react";
import gsap from "gsap";

interface SpeedometerProps {
  speed: number;
  size: number;
}

export const Speedometer: React.FC<SpeedometerProps> = ({ speed, size }) => {
  return (
    <div
      style={{ height: `${size}px`, width: `${size}px` }}
      className="relative  rounded-full bg-black flex  items-center justify-center"
    >
      <div className="bg-black absolute z-50  p-2 rounded-full  flex justify-center items-center">
        <div className="rounded-full  bg-white h-6 w-6"></div>
      </div>
      <div
        style={{ height: `${size - 100}px`, width: `${size - 100}px` }}
        className="bg-black absolute z-40   rounded-full "
      >
        <div className="h-full w-full">
          <div className="relative w-full h-full flex items-center justify-center">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                style={{
                  rotate: `${(i + 1) * 30 + 102}deg`,
                  transform: `translate(95px,30px)`,
                }}
                className="absolute    rounded-full"
              >
                <h1
                  className="text-white text-xl "
                  style={{ rotate: `-${(i + 1) * 30 + 102}deg` }}
                >
                  {i * 20}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{ height: `${size - 100}px`, width: `${size - 100}px` }}
        className="bg-black main absolute z-20 top-[50%] left-[50%]  rounded-full -translate-x-[50%] -translate-y-[50%]"
      ></div>
      <div
        style={{ height: `${size - 50}px`, width: `${size - 50}px` }}
        className="bg-black absolute z-10 top-[50%] left-[50%]  rounded-full -translate-x-[50%] -translate-y-[50%]"
      ></div>
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          style={{ rotate: `${330 + i * 30}deg` }}
          className="w-full flex z-30  h-[6px] absolute "
        >
          <div className="w-[50%] h-full bg-white"></div>
          <div className="w-[50%] h-full bg-transparent"></div>
        </div>
      ))}
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          style={{ rotate: `${330 + i * 15}deg` }}
          className="w-full flex   h-[4px] absolute   "
        >
          <div className="w-[50%] h-full bg-white"></div>
          <div className="w-[50%] h-full bg-transparent"></div>
        </div>
      ))}
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          style={{ rotate: `${330 + i * 3}deg` }}
          className="w-full flex   h-[1px] absolute   "
        >
          <div className="w-[50%] h-full bg-white"></div>
          <div className="w-[50%] h-full bg-transparent"></div>
        </div>
      ))}
      <div
        className=" w-[150px] rounded-3xl overflow-hidden flex h-[6px]  z-40  "
        style={{ rotate: `${330 + speed}deg` }}
      >
        <div className="h-full w-[50%] bg-blue-500"></div>
        <div className="h-full w-[50%] bg-transparent"></div>
      </div>
    </div>
  );
};
