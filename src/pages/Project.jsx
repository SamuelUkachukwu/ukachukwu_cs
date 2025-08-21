import React, { useEffect, useRef } from "react";
import TransPageWrap from "../components/TransPageWrap";

import pickNStrumImage from "../assets/projects/picknstrum.png";
import connectPlusImage from "../assets/projects/connectplus_pridemonth.png";
import storyBaseImage from "../assets/projects/storybase.png";
import quizMeImage from "../assets/projects/quizme.webp";
import lotusForeverImage from "../assets/projects/lotusforever.webp";
import hackHaltImage from "../assets/projects/hackhalt.png";
import medPlusImage from "../assets/projects/medplus.png";
import abcRealEstateImage from "../assets/projects/abcRealEstate.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textData = [
  {
    id: 1,
    title: "PicknStrum",
    programs: [
      "HTML-5",
      "CSS-3",
      "Python",
      "JavaScript",
      "Django",
      "Bootstrap",
    ],
    link: "https://picknstrum.onrender.com",
    github: "https://github.com/SamuelUkachukwu/PICKnSTRUM",
    content:
      "PicknStrum is an eCommerce site for stringed instruments and accessories, built to offer customers a smooth, secure, and user-friendly shopping experience.",
    image: pickNStrumImage,
    borderColor: "border-[#F2F2F2] dark:border-[#0C0C0D]",
  },
  {
    id: 2,
    title: "CONNECT+",
    programs: ["HTML-5", "CSS-3", "JavaScript", "MaterializeCSS"],
    link: "https://keironchaudhry.github.io/june-pride-hackathon-2023/",
    github: "https://github.com/keironchaudhry/june-pride-hackathon-2023",
    content:
      "CONNECT+ is a digital hub for the LGBTQ+ community, offering curated podcasts, historical insights, and engaging quizzes to educate and inspire.",
    image: connectPlusImage,
    borderColor: "border-[#D9D9D9] dark:border-[#2A2A2A]",
  },
  {
    id: 3,
    title: "storyBASE",
    programs: [
      "HTML-5",
      "CSS-3",
      "Python",
      "JavaScript",
      "Django",
      "Bootstrap",
    ],
    link: "https://storybase.onrender.com",
    github: "https://github.com/SamuelUkachukwu/storyBase",
    content:
      "StoryBase is a blogging platform for storytellers to share original works in admin-defined categories. Registered users can post and engage with creative content.",
    image: storyBaseImage,
    borderColor: "border-[#F2F2F2] dark:border-[#0C0C0D]",
  },
  {
    id: 4,
    title: "Quiz Me Game",
    programs: ["HTML-5", "CSS-3", "JavaScript"],
    link: "https://samuelukachukwu.github.io/quiz-me/",
    github: "https://github.com/SamuelUkachukwu/quiz-me",
    content:
      "QUIZ ME is a fun educational app where kids (7+) answer random questions and discover global 'Did you know...' trivia. Adults will enjoy it too!",
    image: quizMeImage,
    borderColor: "border-[#D9D9D9] dark:border-[#2A2A2A]",
  },
  {
    id: 5,
    title: "Lotusforever",
    programs: ["HTML-5", "CSS-3"],
    link: "https://samuelukachukwu.github.io/lotusforever-yoga-website/",
    github: "https://github.com/SamuelUkachukwu/lotusforever-yoga-website",
    content:
      "Lotusforever is a yoga website for users aged 15+, offering guided video sessions that can be streamed at home for a calming, studio-free experience.",
    image: lotusForeverImage,
    borderColor: "border-[#F2F2F2] dark:border-[#0C0C0D]",
  },
  {
    id: 6,
    title: "Hack Halt",
    programs: [
      "HTML-5",
      "CSS-3",
      "Express.js",
      "JavaScript",
      "Node.js",
      "Bootstrap",
    ],
    link: "https://hackhalt.onrender.com/",
    github: "https://github.com/SamuelUkachukwu/hackhalt",
    content:
      "Hack Halt promotes cybersecurity awareness using gamification, feedback, and peer comparison. Users earn rewards for strong security habits in a fun interface.",
    image: hackHaltImage,
    borderColor: "border-[#D9D9D9] dark:border-[#2A2A2A]",
  },
  {
    id: 7,
    title: "Medplus Pharmacy",
    programs: ["HTML-5", "Python", "JavaScript"],
    link: "https://medplus-pharmacy.herokuapp.com/",
    github: "https://github.com/SamuelUkachukwu/medplus-pharmacy",
    content:
      "Medplus is a data-driven pharmacy app that helps manage and track medications, with a focus on dispensing and logging Zidovudine (AZT) efficiently.",
    image: medPlusImage,
    borderColor: "border-[#F2F2F2] dark:border-[#0C0C0D]",
  },
  {
    id: 8,
    title: "ABC Real Estate",
    programs: ["HTML-5", "CSS-3", "JavaScript", "PHP", "Bootstrap, MYSQL"],
    link: "https://your-abc-realestate-live-link.com",
    github: "https://github.com/SamuelUkachukwu/abc-realestate",
    content:
      "ABC Real Estate is a sleek, responsive site that showcases properties with filtering, testimonials, and intuitive navigation for clients across Ireland.",
    image: abcRealEstateImage,
    borderColor: "border-[#D9D9D9] dark:border-[#2A2A2A]",
  },
];

const ProjectImages = ({ imageRefs, textRefs }) => {
  return (
    <div className="fixed top-0 overscroll-none w-screen h-screen flex flex-nowrap z-20">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 flex justify-center items-center flex-col h-screen w-[74%] z-10">
        <div className="image_box w-[95%] md:w-[76%] h-[30%] md:h-[40%] overflow-hidden relative rounded-lg -translate-y-4 md:translate-y-0">
          {textData.map((data, index) => (
            <a
              key={index}
              href={data.link}
              ref={(el) => (imageRefs.current[index] = el)}
              target="_blank"
              rel="noreferrer"
              className="image absolute w-full h-full"
              aria-label="visit project page (opens in a new tab)"
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>

        <div className="w-[95%] h-[30%] md:me-20 mt-5 md:-mt-10 md:w-[50%] md:self-end z-10 relative perspective-[500px] md:perspective-[1972px] -translate-y-4 md:translate-y-0">
          {textData.map((slide, i) => (
            <div
              key={i}
              ref={(el) => (textRefs.current[i] = el)}
              className="absolute top-0 left-0 w-full h-full text-xl flex items-center justify-center rounded-xl backface-hidden"
            >
              <div
                className={`bg-[#0C0C0D] dark:bg-[#F2F2F2] text-[#F2F2F2] dark:text-[#0C0C0D] rounded-[10px] p-3 w-full h-full flex flex-col justify-center md:border-[6px] ${slide.borderColor} `}
              >
                <h4 className="text-3xl px-4 font-['Bebas-Neue']">
                  {slide.title}
                </h4>
                <p className="text-sm md:text-base p-4">{slide.content}</p>
              </div>
              <div className="absolute w-full bottom-0 flex justify-end -mb-6">
                <a
                  className="w-12 h-12 flex items-center justify-center text-2xl bg-red-700 text-white rounded-full me-5 hover:bg-red-900 transition-colors duration-300"
                  href={slide.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="visit my github project page (opens in a new tab)"
                >
                  <i className="fs-4 fa-brands fa-github"></i>
                </a>
                <a
                  className="w-12 h-12 flex items-center justify-center text-2xl bg-red-700 text-white rounded-full me-5 hover:bg-red-900 transition-colors duration-300"
                  href={slide.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="visit project page (opens in a new tab)"
                >
                  <i className="fs-4 fa-solid fa-square-arrow-up-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const containerRef = useRef(null);
  const panelRefs = useRef([]);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  const panels = [
    { label: "01", bgColor: "bg-[#F2F2F2] dark:bg-[#0C0C0D]" },
    { label: "02", bgColor: "bg-[#D9D9D9] dark:bg-[#2A2A2A]" },
    { label: "03", bgColor: "bg-[#F2F2F2] dark:bg-[#0C0C0D]" },
    { label: "04", bgColor: "bg-[#D9D9D9] dark:bg-[#2A2A2A]" },
    { label: "05", bgColor: "bg-[#F2F2F2] dark:bg-[#0C0C0D]" },
    { label: "06", bgColor: "bg-[#D9D9D9] dark:bg-[#2A2A2A]" },
    { label: "07", bgColor: "bg-[#F2F2F2] dark:bg-[#0C0C0D]" },
    { label: "08", bgColor: "bg-[#D9D9D9] dark:bg-[#2A2A2A]" },
  ];

  useEffect(() => {
    gsap.defaults({ duration: 1, ease: "power3.out" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=900%",
        scrub: 1,
        pin: true,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: 0.5,
          delay: 0.5,
          ease: "power1.inOut",
        },
      },
    });

    //clued gsap demo
    gsap.set(textRefs.current, {
      rotationX: (i) => (i ? -90 : 0),
      transformOrigin: "center center -150px",
    });

    //Animate panels, images, texts
    panelRefs.current.slice(1).forEach((panel, index) => {
      const image = imageRefs.current[index + 1];
      const textSlide = textRefs.current[index + 1];
      const prevTextSlide = textRefs.current[index];

      //Slides Panels
      tl.fromTo(panel, { x: "100%" }, { x: "0%" });

      //Slides Images
      if (image) {
        tl.fromTo(image, { x: "-100%" }, { x: "0%" }, "<");
      }

      //Rotate Text
      if (textSlide && prevTextSlide) {
        tl.to(
          prevTextSlide,
          {
            rotationX: 90,
            onComplete: () => gsap.set(prevTextSlide, { rotationX: -90 }),
          },
          "<"
        ).to(
          textSlide,
          {
            rotationX: 0,
          },
          "<"
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [panels.length]);

  return (
    <TransPageWrap>
      <section>
        {/* background lines are these divs  */}
        <div className="fixed top-[65px] bottom-0 left-[12%] w-px bg-[#0C0C0D] dark:bg-[#F2F2F2] opacity-20 z-[2]">
          <div className="absolute top-[9.2%] left-[-30px] w-6 h-[10%] border-b-[1px] border-r-[1px] border-[#0C0C0D] dark:border-[#F2F2F2] opacity-80" />
          <div className="absolute bottom-[5%] md:bottom-[10%] left-2 w-[40vw] h-[10%] border-t-[1px] border-l-[1px] border-[#0C0C0D] dark:border-[#F2F2F2] opacity-80" />
        </div>
        <ProjectImages imageRefs={imageRefs} textRefs={textRefs} />
        <h1 className="w-[76%] left-1/2 -translate-x-1/2 fixed bottom-0 p-2 ps-10 font-thin font-['Bebas-Neue'] text-[clamp(4rem,10vw,20rem)] z-10 pointer-events-none leading-none md:translate-y-[12%]">
          Project
        </h1>
        <div
          className="overscroll-none w-screen h-screen overflow-hidden relative"
          ref={containerRef}
        >
          {panels.map((panel, index) => (
            <div
              key={index}
              ref={(el) => (panelRefs.current[index] = el)}
              className={`absolute w-screen h-screen text-[#0C0C0D] dark:text-[#F2F2F2] ${panel.bgColor}`}
            >
              <h4 className="absolute underline top-[12%] md:right-[22.5%] right-[24%] font-extrabold text-3xl">
                .{panel.label}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </TransPageWrap>
  );
};

export default Project;
