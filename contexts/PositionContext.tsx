"use client";

import {
  createContext,
  useContext,
  useRef,
  useLayoutEffect,
  ReactNode,
} from "react";
import gsap from "gsap";

interface PositionContextType {
  animation: React.MutableRefObject<gsap.core.Timeline | undefined>;
  meterOneRef: React.MutableRefObject<HTMLDivElement | null>;
  meterTwoRef: React.MutableRefObject<HTMLDivElement | null>;
  speedValueRef: React.MutableRefObject<HTMLDivElement | null>;
  rpmValueRef: React.MutableRefObject<HTMLDivElement | null>;
  speedUnitRef: React.MutableRefObject<HTMLDivElement | null>;
  rpmUnitRef: React.MutableRefObject<HTMLDivElement | null>;
  batteryRef: React.MutableRefObject<HTMLDivElement | null>;
}

const PositionContext = createContext<PositionContextType | undefined>(
  undefined,
);

export const usePositionContext = (): PositionContextType => {
  const context = useContext(PositionContext);
  if (!context) {
    throw new Error(
      "usePositionContext must be used within a PositionProvider",
    );
  }
  return context;
};

interface PositionProviderProps {
  children: ReactNode;
}

export const PositionProvider: React.FC<PositionProviderProps> = ({
  children,
}) => {
  const meterOneRef = useRef<HTMLDivElement | null>(null);
  const meterTwoRef = useRef<HTMLDivElement | null>(null);
  const speedValueRef = useRef<HTMLDivElement | null>(null);
  const rpmValueRef = useRef<HTMLDivElement | null>(null);
  const speedUnitRef = useRef<HTMLDivElement | null>(null);
  const rpmUnitRef = useRef<HTMLDivElement | null>(null);
  const batteryRef = useRef<HTMLDivElement | null>(null);
  const animation = useRef<gsap.core.Timeline | undefined>();

  useLayoutEffect(() => {
    animation.current = gsap
      .timeline({
        paused: true,
        defaults: {
          duration: 0.5,
        },
      })
      .to(
        meterOneRef.current,
        {
          top: "63%",
          left: "-5%",
          scale: 0.5,
        },
        0,
      )
      .to(
        meterTwoRef.current,
        {
          top: "63%",
          left: "10%",
          scale: 0.5,
        },
        0,
      )
      .to(
        speedValueRef.current,
        {
          top: "86%",
          left: "97px",
          scale: 0.25,
        },
        0,
      )
      .to(
        rpmValueRef.current,
        {
          top: "86%",
          left: "258px",
          scale: 0.25,
        },
        0,
      )
      .to(
        speedUnitRef.current,
        {
          top: "92%",
          left: "90px",
          scale: 0.3,
        },
        0,
      )
      .to(
        rpmUnitRef.current,
        {
          top: "92%",
          left: "259px",
          scale: 0.3,
        },
        0,
      )
      .to(
        batteryRef.current,
        {
          top: "91%",
          left: "350px",
          scale: 1,
        },
        0,
      );

    return () => {
      if (animation.current) {
        animation.current.kill();
      }
    };
  }, []);

  const contextValue: PositionContextType = {
    animation,
    meterOneRef,
    meterTwoRef,
    speedValueRef,
    rpmValueRef,
    speedUnitRef,
    rpmUnitRef,
    batteryRef,
  };

  return (
    <PositionContext.Provider value={contextValue}>
      {children}
    </PositionContext.Provider>
  );
};
