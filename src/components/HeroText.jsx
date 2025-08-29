import React from "react";

const HeroText = () => {
  const firstName = "Samuel";
  const lastName = "Ukachukwu";
  const coloredIndices = [0, 1 ]; 
  const color = "#c10007";

  const formattedLastName = lastName.split("").map((char, index) => {
    return coloredIndices.includes(index) ? (
      <span key={index} style={{ color }}>
        {char}
      </span>
    ) : (
      char
    );
  });

  return (
    <div className="text-center md:text-end w-full">
      <div className="font-semibold md:font-extrabold text-[clamp(4.5rem,6vw,8rem)] leading-none font-['Bebas-Neue']">
        {firstName}
      </div>
      <div className="font-semibold md:font-extrabold text-[clamp(4.5rem,6vw,8rem)] leading-none font-['Bebas-Neue']">
        {formattedLastName}
      </div>
    </div>
  );
};

export default HeroText;
