import { usePositionContext } from "@/contexts/PositionContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useSlideInOut } from "@/hooks/useSlideInOut";
import { Dispatch, SetStateAction, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface CameraSectionProps {
  setIsCamera: Dispatch<SetStateAction<boolean>>;
  isCamera: boolean;
}

export const CameraSection: React.FC<CameraSectionProps> = ({
  setIsCamera,
  isCamera,
}) => {
  const { slideRef, slideAnimation } = useSlideInOut();
  const { animation } = usePositionContext();
  useEffect(() => {
    if (slideAnimation.current && animation.current) {
      isCamera
        ? slideAnimation.current.play()
        : slideAnimation.current.reverse();
      isCamera ? animation.current.play() : animation.current.reverse();
    }
  }, [isCamera]);

  const { getTheme } = useTheme();

  return (
    <div
      ref={slideRef}
      style={{ backgroundColor: getTheme().primary.backgroundColor }}
      className="h-full w-full translate-y-[100%] top-0 left-0 absolute z-10"
    >
      <div className="h-full w-full flex items-center justify-center relative">
        <button
          className="absolute top-2  text-blue-700 hover:text-blue-500 z-50 "
          onClick={() => setIsCamera((prev) => !prev)}
        >
          <AiFillCloseCircle size={30} />
        </button>
      </div>
    </div>
  );
};
