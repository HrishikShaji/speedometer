import { Battery } from "./Battery";
import { MeterSeven } from "./MeterSeven";
import { TbHeadphonesFilled } from "react-icons/tb";
import { HiPhone } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { MdCamera } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePosition } from "@/hooks/usePosition";
import { useSlideInOut } from "@/hooks/useSlideInOut";

interface DashboardOneProps {
  speed: number;
}

export const DashboardOne: React.FC<DashboardOneProps> = ({ speed }) => {
  const hrRef = useRef<HTMLDivElement>(null);
  const [isLocation, setIsLocation] = useState(false);

  const { animation: meterOneAnimation, elementRef: meterOneRef } = usePosition(
    {
      top: "50%",
      left: "2%",
      duration: 0.5,
      scale: 0.5,
    },
  );
  const { animation: meterTwoAnimation, elementRef: meterTwoRef } = usePosition(
    {
      top: "50%",
      left: "20%",
      duration: 0.5,
      scale: 0.5,
    },
  );

  const { animation: speedValueAnimation, elementRef: speedValueRef } =
    usePosition({
      top: "60%",
      left: "25%",
      duration: 0.5,
      scale: 0.25,
    });
  const { animation: rpmValueAnimation, elementRef: rpmValueRef } = usePosition(
    {
      top: "60%",
      left: "25%",
      duration: 0.5,
      scale: 0.25,
    },
  );
  useLayoutEffect(() => {
    function animate() {
      if (speed >= 0 && speed < 120) {
        gsap.to([speedValueRef.current, rpmValueRef.current], {
          color: "green",
        });
        gsap.to(hrRef.current, {
          backgroundColor: "green",
        });
      } else if (speed >= 120 && speed < 210) {
        gsap.to([speedValueRef.current, rpmValueRef.current], {
          color: "yellow",
        });
        gsap.to(hrRef.current, {
          backgroundColor: "yellow",
        });
      } else if (speed >= 210) {
        gsap.to([speedValueRef.current, rpmValueRef.current], {
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

  const { slideRef, slideAnimation } = useSlideInOut();

  useEffect(() => {
    if (
      slideAnimation.current &&
      meterOneAnimation.current &&
      meterTwoAnimation.current &&
      speedValueAnimation.current &&
      rpmValueAnimation.current
    ) {
      isLocation
        ? slideAnimation.current.play()
        : slideAnimation.current.reverse();
      isLocation
        ? meterOneAnimation.current.play()
        : meterOneAnimation.current.reverse();
      isLocation
        ? meterTwoAnimation.current.play()
        : meterTwoAnimation.current.reverse();

      isLocation
        ? rpmValueAnimation.current.play()
        : rpmValueAnimation.current.reverse();
      isLocation
        ? speedValueAnimation.current.play()
        : speedValueAnimation.current.reverse();
    }
  }, [isLocation]);

  return (
    <div className="h-[720px]  w-[1080px] overflow-hidden bg-neutral-800 flex flex-col justify-center items-center rounded-3xl relative">
      <h1
        ref={speedValueRef}
        className="text-9xl z-20 absolute top-[40px] text-green-500 left-[50%] -translate-x-[50%]"
      >
        {speed}
      </h1>
      <h1 className="text-5xl text-white absolute top-[160px]">Km/h</h1>
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
      <h1 className="text-5xl text-white absolute top-[340px]">RPM</h1>
      <div
        className="w-[300px] absolute z-20 top-[40%] left-[10%]"
        ref={meterOneRef}
      >
        <MeterSeven speed={speed} />
      </div>
      <div
        className="w-[300px] absolute z-20 top-[40%] right-[10%]"
        ref={meterTwoRef}
      >
        <MeterSeven speed={speed} />
      </div>
      <div className="flex text-white  flex-col gap-1 items-center absolute bottom-[15%]">
        <div className=" w-14  ">
          <Battery />
        </div>
        <h1>Odometer - 11000 Miles</h1>
        <div className="h-[1px] w-[150px] bg-green-500"></div>
        <h1>Time - 3.00 pm</h1>
        <div className="h-[1px] w-[150px] bg-green-500"></div>
        <h1>Trip - 10000 Miles</h1>
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
        ref={slideRef}
        className="h-full w-full bg-green-500 translate-y-[100%] top-0 left-0 absolute z-10"
      >
        <div className="h-full w-full flex items-center justify-center relative">
          <button
            className="absolute top-2  text-black "
            onClick={() => setIsLocation((prev) => !prev)}
          >
            <AiFillCloseCircle size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};
