"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { MeterSeven } from "@/components/MeterSeven";

const green = ["#4ade80", "#22c55e", "#16a34a"];
const defaults = ["#404040", "#525252", "#737373"];

export default function Home() {
	const [speed, setSpeed] = useState(0);

	useEffect(() => {
		const group = document.getElementById("six");

		if (group) {
			const paths = group.getElementsByTagName("path");

			if (speed > 160) {
				gsap.to(paths, {
					fill: (i) => green[i],
					stagger: {
						each: 0.1,
						from: "end",
					},
				});
			} else {
				gsap.to(paths, {
					fill: (i) => defaults[i],
					stagger: {
						each: 0.1,
						from: "start",
					},
				});
			}
		}
	}, [speed]);
	return (
		<main className=" w-full h-screen flex flex-col gap-3 p-2 justify-center items-center bg-neutral-900">
			<div className="h-[720px]  w-[1080px] bg-neutral-800 flex flex-col justify-center items-center rounded-3xl relative">
				<div className="absolute top-5 right-5 bg-neutral-400 rounded-3xl w-10 h-5"></div>
				<div className="flex gap-40 absolute  ">
					<div className="w-[400px]">
						<MeterSeven speed={speed} />
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
