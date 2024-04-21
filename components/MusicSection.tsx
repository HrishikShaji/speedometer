import { usePositionContext } from "@/contexts/PositionContext";
import { useSlideInOut } from "@/hooks/useSlideInOut";
import { Dispatch, SetStateAction, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface MusicSectionProps {
  setIsMusic: Dispatch<SetStateAction<boolean>>;
  isMusic: boolean;
}

export const MusicSection: React.FC<MusicSectionProps> = ({
  setIsMusic,
  isMusic,
}) => {
  const { slideRef, slideAnimation } = useSlideInOut();
  const { animation } = usePositionContext();
  useEffect(() => {
    if (slideAnimation.current && animation.current) {
      isMusic
        ? slideAnimation.current.play()
        : slideAnimation.current.reverse();
      isMusic ? animation.current.play() : animation.current.reverse();
    }
  }, [isMusic]);

  return (
    <div
      ref={slideRef}
      className="h-full w-full bg-blue-700 translate-y-[100%] top-0 left-0 absolute z-10"
    >
      <div className="h-full w-full flex items-center justify-center relative">
        <button
          className="absolute top-2  text-black "
          onClick={() => setIsMusic((prev) => !prev)}
        >
          <AiFillCloseCircle size={30} />
        </button>
      </div>
    </div>
  );
};
