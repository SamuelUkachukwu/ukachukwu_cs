import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

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

const TransPageWrap = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      className="relative"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Slide In Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-screen bg-[#D9D9D9] dark:bg-[#2A2A2A] origin-top z-50 pointer-events-none"
        variants={overlayVariants}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Slide Out Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-screen bg-[#D9D9D9] dark:bg-[#2A2A2A] origin-bottom z-50 pointer-events-none"
        variants={reverseOverlayVariants}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      {children}
    </motion.div>
  );
};

export default TransPageWrap;
