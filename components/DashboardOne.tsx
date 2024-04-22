import { Battery } from "./Battery";
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
import { GaugeTwo } from "./GaugeTwo";
import { TiWeatherPartlySunny } from "react-icons/ti";

interface DashboardOneProps {
  speed: number;
  life: number;
  rpm: number;
}

export const DashboardOne: React.FC<DashboardOneProps> = ({
  rpm,
  speed,
  life,
}) => {
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

  const { setTheme, theme, getTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: getTheme().primary.backgroundColor,
        color: getTheme().primary.textColor,
      }}
      className="h-[720px]  w-[1080px] overflow-hidden  flex gap-1 flex-col  items-center rounded-3xl relative"
    >
      <div
        style={{ backgroundColor: getTheme().secondary.backgroundColor }}
        className=" flex items-center p-3 left-0 gap-5 rounded-r-[50px] top-10 absolute"
      >
        <div className="flex flex-col ">
          <h1>current location</h1>
          <h1>--Now Playing --</h1>
          <h1>Traffic</h1>
        </div>
        <div className="h-20 w-20 bg-blue-700 rounded-full flex flex-col items-center justify-center">
          <TiWeatherPartlySunny size={25} />
          <h1>32 C</h1>
        </div>
      </div>
      <h1
        ref={speedValueRef}
        className="text-9xl z-20 absolute top-[40px] text-blue-500 left-[50%] -translate-x-[50%]"
      >
        {speed}
      </h1>
      <h1 ref={speedUnitRef} className="z-20 text-5xl  absolute top-[160px]">
        Km/h
      </h1>
      <div
        className="h-[1px] w-[30%] bg-blue-500 absolute top-[215px]"
        ref={hrRef}
      ></div>
      <h1
        ref={rpmValueRef}
        className="text-9xl z-20 text-blue-500  absolute top-[220px] left-[50%] -translate-x-[50%] "
      >
        {rpm}
      </h1>
      <h1 ref={rpmUnitRef} className="z-20 text-5xl  absolute top-[340px]">
        RPM
      </h1>
      <div
        className="w-[300px]   absolute z-20 top-[40%] left-[10%] "
        ref={meterOneRef}
      >
        <GaugeOne speed={speed} />
      </div>
      <div
        className="w-[300px] absolute z-20 top-[40%] right-[10%]"
        ref={meterTwoRef}
      >
        <GaugeTwo speed={rpm} />
      </div>
      <div ref={batteryRef} className=" w-14 z-20 rotate-90 absolute top-[60%]">
        <Battery life={life} />
      </div>
      <div className="flex  flex-col gap-1 items-center absolute bottom-[15%]">
        <h1>
          Odometer - <span className="text-blue-500">11000</span> Miles
        </h1>
        <div className="h-[1px] w-[150px] bg-blue-500"></div>
        <h1>
          Time - <span className="text-blue-500">3.00</span> pm
        </h1>
        <div className="h-[1px] w-[150px] bg-blue-500"></div>
        <h1>
          Trip - <span className="text-blue-500">10000</span> Miles
        </h1>
      </div>
      <div className="flex gap-5 absolute bottom-5">
        <button
          style={{
            color: getTheme().button.textColor,
          }}
          onClick={() => setIsCall((prev) => !prev)}
          className=" bg-blue-700 hover:bg-blue-500 rounded-full w-8 h-8 flex justify-center items-center"
        >
          <MdPhone />
        </button>
        <button
          style={{
            color: getTheme().button.textColor,
          }}
          onClick={() => setIsLocation((prev) => !prev)}
          className="bg-blue-700 hover:bg-blue-500  rounded-full w-8 h-8 flex justify-center items-center"
        >
          <FaLocationDot />
        </button>
        <button
          style={{
            color: getTheme().button.textColor,
          }}
          onClick={() => setIsMusic((prev) => !prev)}
          className=" bg-blue-700 hover:bg-blue-500 rounded-full w-8 h-8 flex justify-center items-center"
        >
          <TbHeadphonesFilled />
        </button>
        <button
          style={{
            color: getTheme().button.textColor,
          }}
          onClick={() => setIsCamera((prev) => !prev)}
          className=" bg-blue-700 hover:bg-blue-500 rounded-full w-8 h-8 flex justify-center items-center "
        >
          <MdCamera />
        </button>
        <button
          style={{
            color: getTheme().button.textColor,
          }}
          onClick={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
          className="bg-blue-700 hover:bg-blue-500 rounded-full w-8 h-8 flex justify-center items-center"
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
