"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePageTransitionStore } from "@/store/usePageTransitionStore";

const AnimatedBody = ({ children }: { children: React.ReactNode }) => {
  const body = useRef<HTMLBodyElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  const { isAnimating, setIsAnimating } = usePageTransitionStore();

  const { contextSafe } = useGSAP({ scope: body });

  const playAnimation = contextSafe(() => {
    gsap
      .timeline()
      .fromTo(
        overlay.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 0.5, transformOrigin: "top" },
      )
      .to(overlay.current, {
        scaleY: 0,
        duration: 0.5,
        delay: 0.2,
        transformOrigin: "bottom",
        onComplete: () => setIsAnimating(false),
      });
  });

  useEffect(() => {
    isAnimating && playAnimation();
  }, [isAnimating]);

  return (
    <body ref={body}>
      {isAnimating && (
        <div
          ref={overlay}
          className="absolute z-50 h-full w-full scale-y-0 bg-slate-700"
        ></div>
      )}

      {children}
    </body>
  );
};

export default AnimatedBody;
