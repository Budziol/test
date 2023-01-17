import React from "react";
import "./Loader.styles.scss";
import { motion } from "framer-motion";

const Loader = () => {
  const ContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const DotVariants = {
    initial: {
      y: "0%",
    },
    animate: {
      y: "-100%",
    },
  };

  return (
    <motion.div
      className="loading"
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.span
        className="dot"
        variants={DotVariants}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.span>
      <motion.span
        className="dot middle"
        variants={DotVariants}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.span>
      <motion.span
        className="dot"
        variants={DotVariants}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.span>
    </motion.div>
  );
};

export default Loader;
