import React from "react";
import { motion } from "framer-motion";
import "./BackgroundsElements.styles.scss";

const one = {
  animate: {
    rotate: 360,
    transition: { ease: "linear", duration: 7, repeat: Infinity },
  },
};
const two = {
  animate: {
    rotate: -360,
    transition: { ease: "linear", duration: 13, repeat: Infinity },
  },
};
const three = {
  animate: {
    rotate: 360,
    transition: { ease: "linear", duration: 12, repeat: Infinity },
  },
};
const four = {
  animate: {
    rotate: -360,
    transition: { ease: "linear", duration: 9, repeat: Infinity },
  },
};

export const SquareOne = () => {
  return (
    <motion.svg
      className="square one"
      variants={one}
      animate="animate"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12.7722"
        y="-1"
        width="25"
        height="25"
        rx="5"
        transform="rotate(33.4283 12.7722 -1)"
        fill="#A194FF"
        fillOpacity="0.3"
      />
    </motion.svg>
  );
};

export const SquareTwo = () => {
  return (
    <motion.svg
      className="square two"
      variants={two}
      animate="animate"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="19.9668"
        y="-1"
        width="25"
        height="25"
        rx="5"
        transform="rotate(57 19.9668 -1)"
        fill="#5AC1E0"
        fillOpacity="0.3"
      />
    </motion.svg>
  );
};

export const SquareThree = () => {
  return (
    <motion.svg
      className="square three"
      variants={three}
      animate="animate"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="19.9668"
        y="-1"
        width="25"
        height="25"
        rx="5"
        transform="rotate(57 19.9668 -1)"
        fill="#E05ACB"
        fillOpacity="0.3"
      />
    </motion.svg>
  );
};

export const SquareFour = () => {
  return (
    <motion.svg
      className="square four"
      variants={four}
      animate="animate"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-1"
        y="8.61218"
        width="25"
        height="25"
        rx="5"
        transform="rotate(-22.6121 -1 8.61218)"
        fill="#E0A65A"
        fillOpacity="0.3"
      />
    </motion.svg>
  );
};
