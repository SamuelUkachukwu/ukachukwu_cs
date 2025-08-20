import React, { useEffect, useRef } from "react";
import DateToday from "../components/DateToday";
import Scene from "../components/Scene";
import { HeroNav } from "../components/NavBar";
import HeroText from "../components/HeroText";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import TransPageWrap from "../components/TransPageWrap";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const Home = () => {
  // const ulRef = useRef();

  useEffect(() => {
    //Scroll page to top and prevent 3D model wrong position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Fallback in case browser didn't scroll to top early enough
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=100%",
          scrub: 2,
          // markers: true,
          onLeave: () => {
            tl.pause();
          },
        },
      },
      100
    );

    // Panels tween
    tl.to("#left-panel", { x: "-100%", duration: 4, ease: "none" }, 0);
    tl.to("#right-panel", { x: "100%", duration: 4, ease: "none" }, 0);

    tl.fromTo(
      ".hero-nav",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "none" },
      6
    );

    return () => {
      // cleanup
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <TransPageWrap>
      <section id="hero" className="w-full h-[200vh] relative">
        {" "}
        {/* the small blocks */}
        <div className="fixed top-[65px] bottom-0 left-[12%] w-px bg-[#0C0C0D] dark:bg-[#F2F2F2] opacity-20 z-[2]">
          <div className="absolute top-[9.2%] left-[-30px] w-6 h-[10%] border-b-[1px] border-r-[1px] border-[#0C0C0D] dark:border-[#F2F2F2] opacity-80" />
          <div className="absolute bottom-[10%] left-2 w-[40vw] h-[10%] border-t-[1px] border-l-[1px] border-[#0C0C0D] dark:border-[#F2F2F2] opacity-80" />
        </div>
        <Scene />
        <DateToday />
        <div className="fixed inset-0 z-20 flex flex-col md:flex-row">
          {/* Left Panel */}
          <div
            id="left-panel"
            className="w-full md:w-1/2 h-1/2 md:h-full bg-[#F2F2F2] dark:bg-[#0C0C0D] flex justify-center md:justify-end items-end md:items-center p-5"
          >
            <HeroText />
          </div>

          {/* Right Panel */}
          <div
            id="right-panel"
            className="w-full md:w-1/2 h-1/2 md:h-full bg-[#F2F2F2] dark:bg-[#0C0C0D] flex items-start md:items-center justify-center md:justify-start p-5"
          >
            <div className="text-center md:text-start w-full">
              <h1 className="text-1xl lg:text-2xl font-semibold mb-2">
                I am a Fullstack Developer
              </h1>
              <p className="text-xs lg:text-base leading-relaxed max-w-[60%] lg:max-w-[70%] m-auto md:m-0">
                Passionate about designs and the arts. <br />
                Capable of creating effective user interfaces and appealing web
                designs.
              </p>
            </div>
          </div>
          {/* <HeroNav ref={ulRef} /> */}
          <ul className="hero-nav absolute top-[40%] left-[55%] md:left-[52%] z-30 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold md:font-extrabold tracking-widest text-[#0C0C0D] dark:text-[#F2F2F2] animate-fade-in font-['Bebas-Neue']">
            <li>
              <a
                href="/about"
                className="text-[clamp(2rem,3vw,4rem)] hover:text-rose-700 transition duration-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/project"
                className="text-[clamp(2rem,3vw,4rem)] hover:text-rose-700 transition duration-400"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-[clamp(2rem,3vw,4rem)] hover:text-rose-700 transition duration-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </section>
    </TransPageWrap>
  );
};

export default Home;
