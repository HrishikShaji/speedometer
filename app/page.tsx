"use client";
import { One } from "@/components/One";
import { Speedometer } from "@/components/Speedometer";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Home() {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const needle = document.getElementById("needle");

    gsap.fromTo(
      needle,
      {
        rotate: 0,
      },
      {
        transformOrigin: "bottom left",
        rotate: 360,
        duration: 3,
      },
    );
  }, []);
  return (
    <main className=" w-full h-screen flex flex-col gap-3 p-2 justify-center items-center bg-neutral-900">
      <div className="h-[720px]  w-[1080px] bg-neutral-700 flex flex-col justify-center items-center rounded-3xl relative">
        <div className="absolute top-5 right-5 bg-neutral-400 rounded-3xl w-10 h-5"></div>
        <div className="flex gap-40 absolute ">
          <div className="w-[500px]">
            <One />
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
