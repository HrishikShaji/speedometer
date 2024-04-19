"use client";
import { Speedometer } from "@/components/Speedometer";
import { useState } from "react";

export default function Home() {
  const [speed, setSpeed] = useState(0);
  return (
    <main className=" w-full h-screen flex flex-col gap-3 p-2 justify-center items-center bg-neutral-900">
      <div className="h-[720px]  w-[1080px] bg-neutral-700 flex flex-col items-center rounded-3xl relative">
        <div className="flex gap-20 absolute bottom-10">
          <Speedometer speed={speed} size={350} />
          <Speedometer speed={speed} size={350} />
        </div>
      </div>
      <input
        type="range"
        defaultValue={speed}
        min={0}
        max={240}
        onChange={(e) => setSpeed(parseInt(e.target.value))}
      />
    </main>
  );
}
