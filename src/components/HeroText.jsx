import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

// const defaultChars =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const HeroText = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const [isScrambling, setIsScrambling] = useState(false);

  const lastName = "Ukachukwu";
  const coloredIndex = 6;

  useEffect(() => {
    const scramble = (target, text, onComplete) => {
      setIsScrambling(true);

      target.innerText = "A";
      gsap.to(target, {
        duration: 2,
        ease: "sine.inOut",
        scrambleText: {
          text,
          chars: "upperCase",
          speed: 2,
        },
        onComplete: () => {
          if (onComplete) onComplete();
          setIsScrambling(false); 
        },
      });
    };

    const first = firstNameRef.current;
    const last = lastNameRef.current;

    // index 6 is colored
    const colorLetter = () => {
      const letters = lastName.split("");
      letters[
        coloredIndex
      ] = `<span style="color:#c10007">${letters[coloredIndex]}</span>`;
      last.innerHTML = letters.join("");
    };

    // Initial scramble
    scramble(first, "Samuel");
    scramble(last, lastName, colorLetter);
    // Cleanup
  }, []);

   useEffect(() => {
    const stopScrolling = (e) => e.preventDefault();

    if (isScrambling) {
      document.documentElement.addEventListener("wheel", stopScrolling, { passive: false });
      document.documentElement.addEventListener("touchmove", stopScrolling, { passive: false });
    } else {
      document.documentElement.removeEventListener("wheel", stopScrolling);
      document.documentElement.removeEventListener("touchmove", stopScrolling);
    }

    return () => {
      document.documentElement.removeEventListener("wheel", stopScrolling);
      document.documentElement.removeEventListener("touchmove", stopScrolling);
    };
  }, [isScrambling]);

  return (
    <div className="text-center md:text-end w-full">
      <div
        ref={firstNameRef}
        className="font-semibold md:font-extrabold text-[clamp(4.5rem,6vw,8rem)] leading-none font-['Bebas-Neue']"
      />
      <div
        ref={lastNameRef}
        className="font-semibold md:font-extrabold text-[clamp(4.5rem,6vw,8rem)] leading-none font-['Bebas-Neue']"
      />
    </div>
  );
};

export default HeroText;
