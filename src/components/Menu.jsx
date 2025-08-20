import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Menu({ isOpen, setIsOpen }) {
  const [position, setPosition] = useState({ x: 85, y: 3 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const startDrag = (e) => {
    setDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      offset.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    }
  };

  const onDrag = (e) => {
    if (!dragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const newX = clientX - offset.current.x;
    const newY = clientY - offset.current.y;

    const percentX = (newX / window.innerWidth) * 100;
    const percentY = (newY / window.innerHeight) * 100;

    setPosition({ x: percentX, y: percentY });
  };

  const stopDrag = () => {
    setDragging(false);
  };

  const handleClick = () => {
    if (!dragging) {
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    const stopScrolling = (e) => e.preventDefault();

    if (isOpen) {
      document.documentElement.addEventListener("touchmove", stopScrolling, {
        passive: false,
      });
      document.documentElement.addEventListener("wheel", stopScrolling, {
        passive: false,
      });
    } else {
      document.documentElement.removeEventListener("touchmove", stopScrolling);
      document.documentElement.removeEventListener("wheel", stopScrolling);
    }

    return () => {
      document.documentElement.removeEventListener("touchmove", stopScrolling);
      document.documentElement.removeEventListener("wheel", stopScrolling);
    };
  }, [isOpen]);

  return (
    <>
      {/* Draggable hamburger button */}
      <span
        ref={menuRef}
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={startDrag}
        onTouchMove={onDrag}
        onTouchEnd={stopDrag}
        onClick={handleClick}
        className="z-60 cursor-pointer bg-red-700 hover:bg-red-900 transition-colors duration-300 p-2 justify-center items-center w-10 h-10 rounded-full hidden max-[768px]:flex"
        style={{
          position: "fixed",
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
      >
        <span
          className={`w-[30px] h-[19.5px] flex flex-col justify-between items-end ${
            isOpen ? "open" : ""
          }`}
        >
          <span className="w-full h-[3px] rounded-[5px] bg-white transition-all duration-300 ease-in-out" />
          <span className="w-[80%] h-[3px] rounded-[5px] bg-white transition-all duration-300 ease-in-out" />
          <span className="w-[60%] h-[3px] rounded-[5px] bg-white transition-all duration-300 ease-in-out" />

          <style>{`
            .open > span:nth-child(1) {
              transform: translateY(8px) rotate(45deg);
            }
            .open > span:nth-child(2) {
              opacity: 0;
            }
            .open > span:nth-child(3) {
              width: 100%;
              transform: translateY(-8px) rotate(-45deg);
            }
          `}</style>
        </span>
      </span>

      {/* Offcanvas menu */}
      <div
        className={`fixed inset-0 bg-[rgba(14,14,14,0.9)] w-screen h-screen z-20 
          transform transition-transform duration-400 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="w-[74%] h-screen bg-[#D9D9D9] dark:bg-[#2A2A2A] text-[#0C0C0D] dark:text-[#F2F2F2] flex flex-col justify-center p-[40px] ps-[60px]">
          <ul className="text-2xl space-y-6 font-bold">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/project" onClick={() => setIsOpen(false)}>
                Project
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <span onClick={() => setIsOpen(false)}>
                <ThemeToggle />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
