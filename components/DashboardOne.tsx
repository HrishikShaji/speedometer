import { Battery } from "./Battery";
import { MeterSeven } from "./MeterSeven";
import { TbHeadphonesFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { MdCamera, MdPhone } from "react-icons/md";
import { useRef, useState } from "react";
import { LocationSection } from "./LocationSection";
import { usePositionContext } from "@/contexts/PositionContext";
import { MusicSection } from "./MusicSection";
import { CameraSection } from "./CameraSection";
import { CallSection } from "./CallSection";
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { useTheme } from "@/contexts/ThemeContext";
import { GaugeOne } from "./GaugeOne";

interface DashboardOneProps {
	speed: number;
	life: number;
}

export const DashboardOne: React.FC<DashboardOneProps> = ({ speed, life }) => {
	const hrRef = useRef<HTMLDivElement>(null);
	const [isLocation, setIsLocation] = useState(false);
	const [isMusic, setIsMusic] = useState(false);
	const [isCall, setIsCall] = useState(false);
	const [isCamera, setIsCamera] = useState(false);

	const {
		speedValueRef,
		speedUnitRef,
		rpmValueRef,
		rpmUnitRef,
		meterTwoRef,
		meterOneRef,
		batteryRef,
	} = usePositionContext();

	const { setTheme, theme } = useTheme();

	return (
		<div
			style={{ backgroundColor: theme === "dark" ? "black" : "white" }}
			className="h-[720px]  w-[1080px] overflow-hidden  flex gap-1 flex-col  items-center rounded-3xl relative"
		>
			<h1
				ref={speedValueRef}
				className="text-9xl z-20 absolute top-[40px] text-green-500 left-[50%] -translate-x-[50%]"
			>
				{speed}
			</h1>
			<h1
				ref={speedUnitRef}
				className="z-20 text-5xl text-white absolute top-[160px]"
			>
				Km/h
			</h1>
			<div
				className="h-[1px] w-[30%] bg-green-500 absolute top-[215px]"
				ref={hrRef}
			></div>
			<h1
				ref={rpmValueRef}
				className="text-9xl z-20 text-green-500  absolute top-[220px] left-[50%] -translate-x-[50%] "
			>
				{speed}
			</h1>
			<h1
				ref={rpmUnitRef}
				className="z-20 text-5xl text-white absolute top-[340px]"
			>
				RPM
			</h1>
			<div
				className="w-[300px]  absolute z-20 top-[40%] left-[10%] "
				ref={meterOneRef}
			>
				<GaugeOne speed={speed} />
			</div>
			<div
				className="w-[300px] absolute z-20 top-[40%] right-[10%]"
				ref={meterTwoRef}
			>
				<MeterSeven speed={speed} />
			</div>
			<div ref={batteryRef} className=" w-14 z-20 rotate-90 absolute top-[60%]">
				<Battery life={life} />
			</div>
			<div className="flex text-white  flex-col gap-1 items-center absolute bottom-[15%]">
				<h1>Odometer - 11000 Miles</h1>
				<div className="h-[1px] w-[150px] bg-green-500"></div>
				<h1>Time - 3.00 pm</h1>
				<div className="h-[1px] w-[150px] bg-green-500"></div>
				<h1>Trip - 10000 Miles</h1>
			</div>
			<div className="flex gap-5 absolute bottom-5">
				<button
					onClick={() => setIsCall((prev) => !prev)}
					className="bg-neutral-900 text-white rounded-full w-8 h-8 flex justify-center items-center"
				>
					<MdPhone />
				</button>
				<button
					onClick={() => setIsLocation((prev) => !prev)}
					className="bg-neutral-900 text-white rounded-full w-8 h-8 flex justify-center items-center"
				>
					<FaLocationDot />
				</button>
				<button
					onClick={() => setIsMusic((prev) => !prev)}
					className="bg-neutral-900 text-white rounded-full w-8 h-8 flex justify-center items-center"
				>
					<TbHeadphonesFilled />
				</button>
				<button
					onClick={() => setIsCamera((prev) => !prev)}
					className="bg-neutral-900 text-white rounded-full w-8 h-8 flex justify-center items-center"
				>
					<MdCamera />
				</button>
				<button
					onClick={() =>
						setTheme((prev) => (prev === "dark" ? "light" : "dark"))
					}
					className="bg-neutral-900 text-white rounded-full w-8 h-8 flex justify-center items-center"
				>
					{theme === "light" ? <IoMoon /> : <IoIosSunny />}
				</button>
			</div>
			<LocationSection isLocation={isLocation} setIsLocation={setIsLocation} />
			<MusicSection isMusic={isMusic} setIsMusic={setIsMusic} />
			<CallSection isCall={isCall} setIsCall={setIsCall} />
			<CameraSection isCamera={isCamera} setIsCamera={setIsCamera} />
		</div>
	);
};
