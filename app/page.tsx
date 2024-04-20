"use client";
import { useState } from "react";
import { DashboardOne } from "@/components/DashboardOne";

export default function Home() {
  const [speed, setSpeed] = useState(0);
  return (
    <main className=" w-full h-screen flex flex-col gap-3 p-2 justify-center items-center bg-neutral-900">
      <DashboardOne speed={speed} />
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
