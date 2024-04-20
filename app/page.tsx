"use client";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import { MeterSeven } from "@/components/MeterSeven";
import { MeterNine } from "@/components/MeterNine";

export default function Home() {
  const [speed, setSpeed] = useState(0);
  return (
    <main className=" w-full h-screen flex flex-col gap-3 p-2 justify-center items-center bg-neutral-900">
      <div className="h-[720px]  w-[1080px] bg-neutral-800 flex flex-col justify-center items-center rounded-3xl relative">
        <div className="absolute top-5 right-5 bg-neutral-400 rounded-3xl w-10 h-5"></div>
        <div className="flex gap-40 absolute  ">
          <div className="w-[400px]">
            <MeterSeven speed={speed} />
          </div>
          <div className="w-[400px]">
            <MeterNine />
          </div>
        </div>
        <div className="flex gap-5 absolute bottom-10">
          <div className="bg-neutral-400 rounded-full w-10 h-10"></div>
          <div className="bg-neutral-400 rounded-full w-10 h-10"></div>
          <div className="bg-neutral-400 rounded-full w-10 h-10"></div>
          <div className="bg-neutral-400 rounded-full w-10 h-10"></div>
          <div className="bg-neutral-400 rounded-full w-10 h-10"></div>
        </div>
      </div>
      <h1 className="text-white">{speed}</h1>
      <input
        type="range"
        defaultValue={speed}
        min={0}
        max={270}
        onChange={(e) => setSpeed(parseInt(e.target.value))}
      />
    </main>
  );
}
