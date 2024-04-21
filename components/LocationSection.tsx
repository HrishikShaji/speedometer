import { usePositionContext } from "@/contexts/PositionContext";
import { useSlideInOut } from "@/hooks/useSlideInOut";
import { Dispatch, SetStateAction, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

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

  return (
    <div
      ref={slideRef}
      className="h-full w-full bg-neutral-700 translate-y-[100%] top-0 left-0 absolute z-10"
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
  );
};
