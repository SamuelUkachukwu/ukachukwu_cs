import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const skills = [
    "HTML & CSS",
    "Bootstrap",
    "React",
    "Linux",
    "MongoDB",
    "jQuery",
    "MySQL",
    "Git",
    "PHP",
    "SQL",
    "JavaScript",
    "Node.js",
    "Java",
    "Python",
    "Leadership Skills",
    "Communication Skills",
    "Effective Time Management",
    "Fast Learner",
    "Ability to Work Under Pressure",
    "Adaptability",
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full min-h-screen flex items-center justify-center p-8 text-[#0C0C0D] dark:text-[#F2F2F2]">
      <div className="w-[74%] max-w-6xl space-y-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="space-y-2">
            <h3 className="font-semibold text-[16px]">Menu</h3>
           <ul className="space-y-1">
  <li>
    <Link to="/" className="transition duration-300 hover:text-red-700">
      Home
    </Link>
  </li>
  <li>
    <Link to="/project" className="transition duration-300 hover:text-red-700">
      Projects
    </Link>
  </li>
  <li>
    <Link to="/about" className="transition duration-300 hover:text-red-700">
      About
    </Link>
  </li>
</ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-[16px]">Legal</h3>
           <ul className="space-y-1">
  <li>
    <Link to="/sitemap" className="transition duration-300 hover:text-red-700">
      Sitemap
    </Link>
  </li>
  <li>
    <Link to="/privacy" className="transition duration-300 hover:text-red-700">
      Privacy Policy
    </Link>
  </li>
  <li>
    <Link to="/cookies" className="transition duration-300 hover:text-red-700">
      Cookie Policy
    </Link>
  </li>
  <li>
    <Link to="/accessibility" className="transition duration-300 hover:text-red-700">
      Accessibility Statement
    </Link>
  </li>
</ul>
          </div>

          <div className="space-y-2 lg:col-span-1 sm:col-span-2">
            <h3 className="font-semibold text-[16px]">Credits</h3>
            <ul className="space-y-1">
              <li>Designed</li>
              <li>Developed</li>
              <li>3D assets by Samuel Ukachukwu</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-[16px]">Skills:</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[#0C0C0D] dark:bg-[#F2F2F2] text-[#F2F2F2] dark:text-[#0C0C0D] px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-[#0C0C0D] dark:border-[#F2F2F2] pt-6 text-center pb-32">
          <p className="text-sm">
            &copy;{" "}
            <span className="font-bold text-[#0C0C0D] dark:text-[#F2F2F2] ">
              SamuelU<span className="text-red-700">k&nbsp;</span>
            </span>
            <span>&nbsp;{currentYear}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
