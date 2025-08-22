import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLocation, NavLink, Link } from "react-router-dom";
import Menu from "./Menu";

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isHome) return;
  }, [isHome]);

  const ListItems = () => {
    const navItems = [
      { name: "About", path: "/about" },
      { name: "Projects", path: "/project" },
      { name: "Contact", path: "/contact" },
    ];
    return (
      <>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `cursor-pointer text-[16px] mr-4 transition duration-300 ${
                isActive
                  ? "text-red-600 text-shadow-xs text-shadow-red-600"
                  : "text-[#0C0C0D] dark:text-[#F2F2F2] hover:text-red-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </>
    );
  };
  return (
    <>
      <nav className="flex justify-between py-3 px-6 fixed top-4 z-60 w-full">
        <Link
          to="/"
          className="text-xl font-bold text-[#0C0C0D] dark:text-[#F2F2F2] 
               text-center flex items-center justify-center 
               leading-none ml-2 z-50"
        >
          SamuelU<span className="text-red-700">k</span>
        </Link>
        <span className="flex items-center">
          {!isHome ? (
            <>
              <ul className="flex items-center justify-center text-sm max-[768px]:hidden">
                <ListItems />
                <ThemeToggle />
              </ul>
              <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
            </>
          ) : (
            <ThemeToggle />
          )}
        </span>
        <div className="absolute top-[65px] bottom-0 right-[12%] w-px h-[68vh] bg-[rgba(14,14,14,0.2)] dark:bg-[rgba(247,231,206,0.2)] z-40">
          <div className="absolute top-[27%] left-2 w-6 h-[30vh] border-t-[1px] border-l-[1px] border-[rgba(14,14,14,0.2)] dark:border-[rgba(247,231,206,0.2)]" />

         <ul className="absolute list-none p-0 space-y-2 bottom-[0%] left-3">
  {[
    { icon: "fab fa-twitter", href: "https://twitter.com/shybold", label: "Samuel Ukachukwu's Twitter page" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/samuel-ukachukwu-85190723a/", label: "Samuel Ukachukwu's LinkedIn page" },
    { icon: "fab fa-github", href: "https://github.com/SamuelUkachukwu", label: "Samuel Ukachukwu's GitHub page" },
    { icon: "fas fa-envelope", href: "mailto:shybold.inc@gmail.com", label: "Samuel Ukachukwu's Email address" },
  ].map(({ icon, href, label }) => (
    <li key={label}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`text-1xl transition-colors ${
          isOpen ? "text-white" : "text-gray-800 dark:text-white"
        } hover:text-red-700`}
      >
        <i className={icon} />
      </a>
    </li>
  ))}
</ul>

        </div>
      </nav>
    </>
  );
};

export default NavBar;
