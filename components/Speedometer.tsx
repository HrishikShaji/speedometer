interface SpeedometerProps {
  speed: number;
}

export const Speedometer: React.FC<SpeedometerProps> = ({ speed }) => {
  return (
    <div className="relative w-[500px] h-[500px] rounded-md bg-neutral-900 flex  items-center justify-center">
      <div className="bg-black absolute z-40 top-[50%] left-[50%] p-5 rounded-full -translate-x-[50%] -translate-y-[50%] flex justify-center items-center">
        <div className="rounded-full  bg-white h-10 w-10"></div>
      </div>
      <div className="bg-black absolute z-20 top-[50%] left-[50%] h-[400px] w-[400px] rounded-full -translate-x-[50%] -translate-y-[50%]"></div>
      {Array.from({ length: 27 }).map((_, i) => (
        <div
          key={i}
          style={{ rotate: `${320 + i * 10}deg` }}
          className="w-full flex  h-[3px] absolute  top-[50%] -translate-y-[50%] left-0 "
        >
          <div className="w-[50%] h-full bg-white"></div>
          <div className="w-[50%] h-full bg-transparent"></div>
        </div>
      ))}
      <div
        className=" w-[150px] flex h-[10px]  z-30  "
        style={{ rotate: `${320 + speed}deg` }}
      >
        <div className="h-full w-[50%] bg-blue-500"></div>
        <div className="h-full w-[50%] bg-transparent"></div>
      </div>
    </div>
  );
};
