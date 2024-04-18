"use client";
import { Speedometer } from "@/components/Speedometer";
import { useState } from "react";

export default function Home() {
	const [speed, setSpeed] = useState(0);
	return (
		<main className="h-screen w-full flex flex-col gap-10 justify-center items-center bg-neutral-900">
			<Speedometer speed={speed} />
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
