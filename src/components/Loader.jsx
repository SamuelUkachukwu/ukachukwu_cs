import React, { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

const Loader = () => {
  const { progress, active } = useProgress();
  const [visible, setVisible] = useState(true);

  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const stopScrolling = (e) => e.preventDefault();

    if (active) {
      document.documentElement.addEventListener("wheel", stopScrolling, {
        passive: false,
      });
      document.documentElement.addEventListener("touchmove", stopScrolling, {
        passive: false,
      });
    } else {
      document.documentElement.removeEventListener("wheel", stopScrolling);
      document.documentElement.removeEventListener("touchmove", stopScrolling);
    }

    return () => {
      document.documentElement.removeEventListener("wheel", stopScrolling);
      document.documentElement.removeEventListener("touchmove", stopScrolling);
    };
  }, [active]);

  useEffect(() => {
    if (!active && progress === 100 && containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => setVisible(false),
      });
    }
  }, [active, progress]);

  const createTextRing = (text, radius, numLetters, ringClass, ref) => {
    const chars = text.split("");
    const angleStep = 360 / numLetters;

    return (
      <div ref={ref} className="absolute inset-0">
        {Array.from({ length: numLetters }).map((_, i) => {
          const char =
            chars[i % chars.length] ||
            (Math.random() > 0.5 ? "-" : Math.floor(Math.random() * 9));
          const angle = i * angleStep;
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <span
              key={`${ringClass}-${i}`}
              className="absolute origin-center whitespace-nowrap text-[12px] font-sans"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    );
  };

  const createTextArc = (
    text,
    radius,
    numLetters,
    ringClass,
    startAngle = 0,
    endAngle = 180
  ) => {
    const chars = text.split("");
    const angleSpan = endAngle - startAngle;
    const angleStep = angleSpan / numLetters;

    return (
      <div className="absolute inset-0 origin-center">
        {Array.from({ length: numLetters }).map((_, i) => {
          const char =
            chars[i % chars.length] ||
            (Math.random() > 0.5 ? "-" : Math.floor(Math.random() * 9));
          const angle = startAngle + i * angleStep;
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <span
              key={`${ringClass}-arc-${i}`}
              className="absolute origin-center whitespace-nowrap text-[12px] font-sans"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    if (!active) return;

    const rings = [
      { ref: ring1Ref, direction: 1, delay: 0 },
      { ref: ring2Ref, direction: -1, delay: 1 },
      { ref: ring3Ref, direction: 1, delay: 2 },
    ];

    rings.forEach(({ ref, direction, delay }) => {
      if (ref.current) {
        gsap.to(ref.current, {
          rotation: 360 * direction,
          duration: 20,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          delay,
          transformOrigin: "50% 50%",
        });
      }
    });

    return () => {
      rings.forEach(({ ref }) => {
        if (ref.current) gsap.killTweensOf(ref.current);
      });
    };
  }, [active]);

  //Don't show anything once loading is complete
  if (!active) return null;
  if (!visible) return null;
  return (
    <div
      ref={containerRef}
      role="site loader"
      className="fixed inset-0 flex items-center justify-center bg-[#F2F2F2] dark:bg-[#0C0C0D] text-[#0C0C0D] dark:text-[#F2F2F2] overflow-hidden z-[999]"
    >
      <div className="relative w-[100vmin] h-[100vmin]">
        {/* Rotating Rings */}
        {createTextRing(
          "FOCUS-ENERGY-CALM-TRUST-CENTER-",
          20,
          62,
          "ring1",
          ring1Ref
        )}
        {createTextRing(
          "PRESENCE-BALANCE-LISTEN-STILLNESS-",
          30,
          69,
          "ring2",
          ring2Ref
        )}
        {createTextRing(
          "AWARENESS-INTUITION-OBSERVE-CLARITY-",
          40,
          82,
          "ring3",
          ring3Ref
        )}

        {/* Static Arcs */}
        {createTextArc(
          "Test-|||-Deploy-|||-Monitor-|||-",
          25,
          32,
          "ring2",
          0,
          180
        )}
        {createTextArc(
          "Plan-||-Code-||-Compile-||-Debug-||-",
          35,
          32,
          "ring2",
          180,
          360
        )}

        {/* Centered Progress Text */}
        <div className="absolute inset-0 flex items-center justify-center text-xs pointer-events-none">
          Loading {progress.toFixed(0)}%
        </div>
      </div>
    </div>
  );
};

export default Loader;
