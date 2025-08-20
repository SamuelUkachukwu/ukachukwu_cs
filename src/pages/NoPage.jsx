import React from "react";
import TransPageWrap from "../components/TransPageWrap";
import Image404 from "../assets/media/404.webp";

const NoPage = () => {
  return (
    <TransPageWrap>
      <section
        id="contact"
        className="w-full h-screen flex justify-center items-center"
      >
        {/* background lines are these divs  */}
        <div className="fixed top-[65px] bottom-0 left-[12%] w-px bg-[#0C0C0D] dark:bg-[#F2F2F2] opacity-20 z-[2]">
          <div className="absolute top-[9.2%] left-[-30px] w-6 h-[10%] border-b-[1px] border-r-[1px] border-[#0C0C0D] dark:border-[#F2F2F2] opacity-80" />
          <div className="absolute bottom-[5%] md:bottom-[10%] left-2 w-[40vw] h-[10%] border-t-[1px] border-l-[1px] border-[#0C0C0D] dark:border-[#F2F2F2] opacity-80" />
        </div>
        <h1 className='w-[76%] left-1/2 -translate-x-1/2 fixed bottom-[0] p-2 ps-10 font-thin font-["Bebas-Neue"] text-[clamp(4rem,10vw,20rem)] z-10 pointer-events-none leading-none md:translate-y-[12%]'>
          404
        </h1>

        <div className="w-[60%] max-w-[500px] flex justify-center items-center rounded-[10px] border-1 border-[rgba(14,14,14,0.2)] dark:border-[rgba(247,231,206,0.2)] p-3 -translate-y-7 md:-translate-y-7">
          <img
            src={Image404}
            alt="404 error illustration"
            className="h-auto object-contain rounded-[10px]"
          />
        </div>
      </section>
    </TransPageWrap>
  );
};

export default NoPage;
