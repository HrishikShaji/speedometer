import { Battery } from "./Battery";
import { MeterSeven } from "./MeterSeven";
import { TbHeadphonesFilled } from "react-icons/tb";
import { HiPhone } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { MdCamera } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

interface DashboardOneProps {
	speed: number;
}

export const DashboardOne: React.FC<DashboardOneProps> = ({ speed }) => {
	const textRef = useRef<HTMLHeadingElement>(null);
	const textTwoRef = useRef<HTMLHeadingElement>(null);
	const hrRef = useRef<HTMLDivElement>(null);
	const locationSectionRef = useRef<HTMLDivElement>(null);
	const [isLocation, setIsLocation] = useState(false);
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

	const animation = useRef<gsap.core.Animation | undefined>();

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			animation.current = gsap.to(locationSectionRef.current, {
				yPercent: -100,
				duration: 0.5,
				paused: true,
			});
		});

		return () => ctx.kill();
	}, []);

	useEffect(() => {
		if (animation.current) {
			isLocation ? animation.current.play() : animation.current.reverse();
		}
	}, [isLocation]);

	return (
		<div className="h-[720px]  w-[1080px] overflow-hidden bg-neutral-800 flex flex-col justify-center items-center rounded-3xl relative">
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
			<div className="flex gap-60 absolute top-[50%] z-20">
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
				<button
					onClick={() => setIsLocation((prev) => !prev)}
					className="bg-neutral-900 text-white rounded-full w-8 h-8 flex justify-center items-center"
				>
					<FaLocationDot />
				</button>
				<div className="bg-neutral-900 text-white rounded-full w-8 h-8 flex justify-center items-center">
					<TbHeadphonesFilled />
				</div>
				<div className="bg-neutral-900 text-white rounded-full w-8 h-8 flex justify-center items-center">
					<MdCamera />
				</div>
			</div>
			<div
				ref={locationSectionRef}
				className="h-full w-full bg-green-500 translate-y-[100%] top-0 left-0 absolute z-10"
			>
				<div className="h-full w-full relative">
					<button
						className="absolute top-2 right-2 text-black w-8 h-8 rounded-full flex justify-center items-center"
						onClick={() => setIsLocation((prev) => !prev)}
					>
						<AiFillCloseCircle />
					</button>
				</div>
			</div>
		</div>
	);
};
