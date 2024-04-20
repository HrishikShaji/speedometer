import { Battery } from "./Battery";
import { MeterSeven } from "./MeterSeven";

interface DashboardOneProps {
	speed: number;
}

export const DashboardOne: React.FC<DashboardOneProps> = ({ speed }) => {
	return (
		<div className="h-[720px]  w-[1080px] bg-neutral-800 flex flex-col justify-center items-center rounded-3xl relative">
			<div className="absolute top-5 right-5 bg-neutral-400 rounded-3xl w-10 h-5"></div>
			<div className="absolute top-20 flex gap-5 flex-col w-[30%]">
				<div className="flex flex-col  items-center border-b-[1px] border-green-500 ">
					<h1 className="text-9xl text-green-500 ">{speed}</h1>
					<h1 className="text-5xl text-white">Km/h</h1>
				</div>
				<div className="flex flex-col items-center ">
					<h1 className="text-7xl text-green-500 ">{speed}</h1>
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
				<div className="bg-neutral-400 rounded-full w-10 h-10"></div>
				<div className="bg-neutral-400 rounded-full w-10 h-10"></div>
				<div className="bg-neutral-400 rounded-full w-10 h-10"></div>
			</div>
		</div>
	);
};
