import { Battery } from "./Battery";
import { MeterSeven } from "./MeterSeven";
import { TbHeadphonesFilled } from "react-icons/tb";
import { HiPhone } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { MdCamera } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface DashboardOneProps {
	speed: number;
}

export const DashboardOne: React.FC<DashboardOneProps> = ({ speed }) => {
	const textRef = useRef<HTMLHeadingElement>(null);
	const textTwoRef = useRef<HTMLHeadingElement>(null);
	const hrRef = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		function animate() {
			if (speed >= 0 && speed < 120) {
				gsap.to([textRef.current, textTwoRef.current], {
					color: "green",
				});
				gsap.to(hrRef.current, {
					backgroundColor: "green",
				});
			} else if (speed >= 120 && speed < 210) {
				gsap.to([textRef.current, textTwoRef.current], {
					color: "yellow",
				});
				gsap.to(hrRef.current, {
					backgroundColor: "yellow",
				});
			} else if (speed >= 210) {
				gsap.to([textRef.current, textTwoRef.current], {
					color: "red",
				});
				gsap.to(hrRef.current, {
					backgroundColor: "red",
				});
			}
		}
		let ctx = gsap.context(() => {
			animate();
		});

		return () => ctx.kill();
	}, [speed]);

	return (
		<div className="h-[720px]  w-[1080px] bg-neutral-800 flex flex-col justify-center items-center rounded-3xl relative">
			<div className="absolute top-20 flex gap-5 flex-col w-[30%]">
				<div className="flex flex-col  items-center ">
					<h1 ref={textRef} className="text-9xl text-green-500 ">
						{speed}
					</h1>
					<h1 className="text-5xl text-white">Km/h</h1>
				</div>
				<div className="h-[1px] w-full bg-green-500" ref={hrRef}></div>
				<div className="flex flex-col items-center ">
					<h1 ref={textTwoRef} className="text-7xl text-green-500 ">
						{speed}
					</h1>
					<h1 className="text-3xl text-white">RPM</h1>
				</div>
			</div>
			<div className="flex gap-60 absolute top-[50%] ">
				<div className="w-[300px]">
					<MeterSeven speed={speed} />
				</div>
				<div className="w-[300px]">
					<MeterSeven speed={speed} />
				</div>
			</div>
			<div className="absolute w-20 -rotate-90 bottom-[20%]">
				<Battery />
			</div>
			<div className="flex gap-5 absolute bottom-5">
				<div className="bg-neutral-900 text-white rounded-full w-8 h-8 flex justify-center items-center">
					<HiPhone />
				</div>
				<div className="bg-neutral-900 text-white rounded-full w-8 h-8 flex justify-center items-center">
					<FaLocationDot />
				</div>
				<div className="bg-neutral-900 text-white rounded-full w-8 h-8 flex justify-center items-center">
					<TbHeadphonesFilled />
				</div>
				<div className="bg-neutral-900 text-white rounded-full w-8 h-8 flex justify-center items-center">
					<MdCamera />
				</div>
			</div>
		</div>
	);
};
