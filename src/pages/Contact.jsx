import PenScene from "../components/PenScene";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const overlayVariants = {
    initial: { scaleY: 0 },
    animate: { scaleY: 0 },
    exit: { scaleY: 1 },
};

const reverseOverlayVariants = {
    initial: { scaleY: 1 },
    animate: { scaleY: 0 },
    exit: { scaleY: 0 },
};

const Contact = () => {
    const location = useLocation();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(false);
    }, [location.pathname]);

    return (
        <motion.div
            key={location.pathname}
            className="relative"
            role="page transition loader"
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={() => {
                setTimeout(() => setShowContent(true), 100);
            }}
        >
            <motion.div
                className="absolute top-0 left-0 w-full h-screen bg-[#D9D9D9] dark:bg-[#2A2A2A] origin-top z-50 pointer-events-none"
                variants={overlayVariants}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                className="absolute top-0 left-0 w-full h-screen bg-[#D9D9D9] dark:bg-[#2A2A2A] origin-bottom z-50 pointer-events-none"
                variants={reverseOverlayVariants}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
            />
            {showContent && (
                <>
                    <PenScene />
                    <main id="contact" className="w-full h-screen">
                        {/* background lines are these divs  */}
                        <div className="fixed top-[65px] bottom-0 left-[12%] w-px bg-[#0C0C0D] dark:bg-[#F2F2F2] opacity-20 z-[2]">
                            <div className="absolute top-[9.2%] left-[-30px] w-6 h-[10%] border-b-[1px] border-r-[1px] border-[#0C0C0D] dark:border-[#F2F2F2] opacity-80" />
                            <div className="absolute bottom-[5%] md:bottom-[10%] left-2 w-[40vw] h-[10%] border-t-[1px] border-l-[1px] border-[#0C0C0D] dark:border-[#F2F2F2] opacity-80" />
                        </div>
                        <h1 className='w-[76%] left-1/2 -translate-x-1/2 fixed bottom-[0] p-2 ps-10 font-thin font-["Bebas-Neue"] text-[clamp(4rem,10vw,20rem)] z-10 pointer-events-none leading-none md:translate-y-[12%]'>
                            Contact
                        </h1>

                        <div className="z-10 w-[74%] mx-auto  h-screen flex flex-col justify-center items-center relative px-6 text-center -translate-y-10 md:-translate-y-4">
                            <p className="text-[2rem] md:text-[4rem] font-['Bebas-Neue'] mb-6 font-light leading-none">
                                Collaborate, Hire, Partner, Connect
                            </p>
                            <p className="mb-4">let's build something remarkable.</p>
                            <a
                                href="mailto:shybold.inc@gmail.com"
                                aria-label="Send an email to shybold.inc@gmail.com"
                                className="relative inline-block px-8 py-3 text-lg font-medium border bg-[#0C0C0D] dark:bg-[#F2F2F2] rounded-full transition-all duration-300 hover:bg-red-700 hover:border-red-900 hover:text-[#F2F2F2] text-[#F2F2F2] dark:text-[#0C0C0D]"
                            >
                                Let's build it!
                            </a>
                        </div>
                    </main>
                    <Footer />
                </>
            )}
        </motion.div>
    );
};

export default Contact;
