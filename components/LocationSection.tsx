import { usePositionContext } from "@/contexts/PositionContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useSlideInOut } from "@/hooks/useSlideInOut";
import { Dispatch, SetStateAction, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

interface LocationSectionProps {
  setIsLocation: Dispatch<SetStateAction<boolean>>;
  isLocation: boolean;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  setIsLocation,
  isLocation,
}) => {
  const { slideRef, slideAnimation } = useSlideInOut();
  const { animation } = usePositionContext();
  useEffect(() => {
    if (slideAnimation.current && animation.current) {
      isLocation
        ? slideAnimation.current.play()
        : slideAnimation.current.reverse();
      isLocation ? animation.current.play() : animation.current.reverse();
    }
  }, [isLocation]);

  const { getTheme } = useTheme();

  return (
    <div
      ref={slideRef}
      style={{ backgroundColor: getTheme().primary.backgroundColor }}
      className="h-full text-white w-full translate-y-[100%] top-0 left-0 absolute z-10"
    >
      <div className="h-full w-full  flex items-center justify-center relative">
        <button
          className="absolute top-2  text-blue-700 hover:text-blue-500 z-50"
          onClick={() => setIsLocation((prev) => !prev)}
        >
          <AiFillCloseCircle size={30} />
        </button>
      </div>
      <div className="h-full w-full  absolute top-0 flex items-center justify-center">
        <FaLocationDot size={50} />
      </div>
    </div>
  );
};
