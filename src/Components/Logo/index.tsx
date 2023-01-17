import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "./Logo.styles.scss";

const Logo = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="logo"
        key="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <h1 className="logoLetter">Q</h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default Logo;
