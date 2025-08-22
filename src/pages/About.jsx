import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TransPageWrap from "../components/TransPageWrap";

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
    {
        title: "What do I do?",
        text: `I’m a Full Stack Developer with a broad mix of technical and real-world experience. 
I enjoy building practical, user-focused applications and bring problem-solving skills, creativity, 
and years of business knowledge to every project I work on.`,
    },
    {
        title: "How do I do it?",
        text: `I focus on creating applications that are fast, secure, and reliable. 
Clear communication is important to me, and I work just as well in a team environment 
as I do independently. My goal is always to deliver code that is clean, efficient, and maintainable.`,
    },
    {
        title: "Why work with me?",
        text: `When you work with me, you get more than just technical skills. 
I combine a strong development background with real business insight, 
so I understand both the technical side and the bigger picture. 
I’m proactive, easy to work with, and committed to delivering results that matter.`,
    },
];

const About = () => {
    const wrapperRef = useRef(null);
    const slidesRef = useRef([]);

    useEffect(() => {
        const slides = slidesRef.current;
        const delay = 0.5;

        const tl = gsap.timeline({
            defaults: {
                ease: "power1.inOut",
                transformOrigin: "center center -150px",
            },
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top top",
                end: `+=${(slides.length - 1) * 50}%`,
                pin: true,
                scrub: 3,
                //markers: true,
            },
        });

        gsap.set(slides, {
            rotationX: (i) => (i ? -90 : 0),
            transformOrigin: "center center -150px",
        });

        slides.forEach((slide, i) => {
            const nextSlide = slides[i + 1];
            if (!nextSlide) return;
            tl.to(
                slide,
                {
                    rotationX: 90,
                    onComplete: () => gsap.set(slide, { rotationX: -90 }),
                },
                `+=${delay}`
            ).to(
                nextSlide,
                {
                    rotationX: 0,
                },
                "<"
            );
        });

        tl.to({}, { duration: delay });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            tl.kill();
        };
    }, []);

    return (
        <>
            <TransPageWrap>
                <main id="about" className="w-full min-h-screen relative">
                    {/* background lines are these divs  */}
                    <div className="fixed top-[65px] bottom-0 left-[12%] w-px bg-[#0C0C0D] dark:bg-[#F2F2F2] opacity-20">
                        <div className="absolute top-[9.2%] left-[-30px] w-6 h-[10%] border-b-[1px] border-r-[1px] border-[#0C0C0D] dark:border-[#F2F2F2] opacity-80" />
                        <div className="absolute bottom-[5%] md:bottom-[10%] left-2 w-[40vw] h-[10%] border-t-[1px] border-l-[1px] border-[#0C0C0D] dark:border-[#F2F2F2] opacity-80" />
                    </div>
                    <h1 className='w-[76%] left-1/2 -translate-x-1/2 fixed bottom-[0] p-2 ps-10 font-thin font-["Bebas-Neue"] text-[clamp(4rem,10vw,20rem)] z-10 pointer-events-none leading-none md:translate-y-[12%]'>
                        About
                    </h1>

                    <div
                        ref={wrapperRef}
                        className="flex flex-col md:flex-row items-center justify-center h-screen w-full container mx-auto px-4"
                    >
                        {/* SLIDER SIDE */}
                        <div className="w-full md:w-2/3 flex justify-center md:justify-end items-end md:items-center h-1/2 md:h-full">
                            <div className="relative w-[65vw] max-w-[75%] h-[80vw] max-h-[280px] perspective-[500px] md:perspective-[1972px] md:me-10 me-0 -translate-y-8 md:-translate-y-4">
                                {/* Dashed Outline */}
                                <div className="absolute top-[-1rem] bottom-[-1rem] left-[-1rem] right-[-1rem] rounded-[10px] border border-[rgba(14,14,14,0.2)] dark:border-[rgba(247,231,206,0.2)] pointer-events-none" />

                                {slidesData.map((slide, i) => (
                                    <div
                                        key={i}
                                        ref={(el) => (slidesRef.current[i] = el)}
                                        className="absolute top-0 left-0 w-full h-full text-white text-xl flex items-center justify-center rounded-xl backface-hidden"
                                    >
                                        <div className="bg-[#0C0C0D] dark:bg-[#F2F2F2] text-[#F2F2F2] dark:text-[#0C0C0D] rounded-[10px] p-3 w-full h-full flex flex-col justify-center">
                                            <h4 className="font-semibold px-4">{slide.title}</h4>
                                            <p className="text-sm md:text-lg p-4">{slide.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RED BLOCK SIDE */}
                        <div className="w-full md:w-1/3 h-1/2 md:h-full flex items-start md:items-center justify-center md:justify-start">
                            <div className="w-[60%] h-[60%] rounded-xl shadow-lg mt-10 md:mt-0 ms-0 md:ms-10 card-header-img -translate-y-8 md:-translate-y-4" />
                        </div>
                    </div>
                </main>
            </TransPageWrap>
        </>
    );
};

export default About;
