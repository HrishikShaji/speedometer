interface SpeedometerProps {
	speed: number;
}

export const Speedometer: React.FC<SpeedometerProps> = ({ speed }) => {
	return (
		<div className="relative w-[500px] h-[500px] rounded-full bg-black flex  items-center justify-center">
			<div className="bg-black absolute z-50 top-[50%] left-[50%] p-2 rounded-full -translate-x-[50%] -translate-y-[50%] flex justify-center items-center">
				<div className="rounded-full  bg-white h-6 w-6"></div>
			</div>
			<div className="bg-black absolute z-40 top-[50%] left-[50%] h-[300px] w-[300px] rounded-full -translate-x-[50%] -translate-y-[50%]"></div>
			<div className="bg-black absolute z-20 top-[50%] left-[50%] h-[350px] w-[350px] rounded-full -translate-x-[50%] -translate-y-[50%]"></div>
			<div className="bg-black absolute z-10 top-[50%] left-[50%] h-[400px] w-[400px] rounded-full -translate-x-[50%] -translate-y-[50%]"></div>
			{Array.from({ length: 9 }).map((_, i) => (
				<div
					key={i}
					style={{ rotate: `${330 + i * 30}deg` }}
					className="w-[500px] flex z-30  h-[6px] absolute "
				>
					<div className="w-[50%] h-full bg-white"></div>
					<div className="w-[50%] h-full bg-transparent"></div>
				</div>
			))}
			{Array.from({ length: 16 }).map((_, i) => (
				<div
					key={i}
					style={{ rotate: `${330 + i * 15}deg` }}
					className="w-full flex   h-[4px] absolute   "
				>
					<div className="w-[50%] h-full bg-white"></div>
					<div className="w-[50%] h-full bg-transparent"></div>
				</div>
			))}
			{Array.from({ length: 80 }).map((_, i) => (
				<div
					key={i}
					style={{ rotate: `${330 + i * 3}deg` }}
					className="w-full flex   h-[1px] absolute   "
				>
					<div className="w-[50%] h-full bg-white"></div>
					<div className="w-[50%] h-full bg-transparent"></div>
				</div>
			))}
			<div
				className=" w-[150px] rounded-3xl overflow-hidden flex h-[10px]  z-40  "
				style={{ rotate: `${330 + speed}deg` }}
			>
				<div className="h-full w-[50%] bg-blue-500"></div>
				<div className="h-full w-[50%] bg-transparent"></div>
			</div>
		</div>
	);
};
