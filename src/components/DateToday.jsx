import React from "react";
import { useEffect, useState } from "react";

const DateToday = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
    }, 1 * 60 * 1000); 

    return () => clearInterval(interval); 
  }, []);

  const today = new Date();

  const monthShort = today.toLocaleString("en-US", { month: "short" }); 
  const day = today.getDate().toString().padStart(2, "0");
  const year = today.getFullYear();

  return (
    <div
      key={refreshKey}
      className="fixed bottom-[-19px] right-[17px] text-center z-[100]"
    >
      <p className="flex items-center justify-center gap-1">
        <span className="flex absolute bottom-[46px] right-[71px]">
          {monthShort.split("").map((char, index) => (
            <span
              key={index}
              className={` 
                ${
                  index === 0
                    ? "text-red-600 text-3xl font-bold mx-0.5 uppercase"
                    : "mx-0.5 lowercase text-[#0C0C0D] dark:text-[#F2F2F2]"
                }
              `}
            >
              {char}
            </span>
          ))}
        </span>
        <span className='font-thin font-["GravitasOne-Regular"] text-[clamp(6rem,2.5vw,12rem)] text-[#B0B0B0] dark:text-[#2A2A2A]'>
          {day}
        </span>
        <span className="flex flex-col items-center text-xs text-[#0C0C0D] dark:text-[#F2F2F2]">
          {year
            .toString()
            .split("")
            .map((digit, index) => (
              <span key={index}>{digit}</span>
            ))}
        </span>
      </p>
    </div>
  );
};

export default DateToday;
