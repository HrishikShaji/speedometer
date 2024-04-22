"use client";
import { useState } from "react";
import { DashboardOne } from "@/components/DashboardOne";

export default function Home() {
  const [speed, setSpeed] = useState(0);
  const [life, setLife] = useState(100);
  const [rpm, setRpm] = useState(0);
  return (
    <main className=" w-full h-screen flex flex-col gap-3 p-2 justify-center items-center bg-black">
      <DashboardOne rpm={rpm} speed={speed} life={life} />
      <div className="flex gap-5">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-white">Speed : {speed}</h1>
          <input
            type="range"
            defaultValue={speed}
            min={0}
            max={270}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
          />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-white">Battery : {life}</h1>
          <input
            type="range"
            defaultValue={life}
            min={0}
            max={100}
            onChange={(e) => setLife(parseInt(e.target.value))}
          />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-white">RPM : {rpm}</h1>
          <input
            type="range"
            defaultValue={rpm}
            min={0}
            max={270}
            onChange={(e) => setRpm(parseInt(e.target.value))}
          />
        </div>
      </div>
    </main>
  );
}
