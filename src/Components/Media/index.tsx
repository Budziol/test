import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { WelcomeProps } from "../../types";
import "./Media.styles.scss";
import { motion } from "framer-motion";

const Media = ({ setComponents, setActiveComponent }: WelcomeProps) => {
  useEffect(() => {
    setComponents(false);
    setActiveComponent("media");
  }, []);

  const section = {
    initial: { height: 0 },
    animate: { height: "85%", transition: { easeIn: "linear", duration: 0.4 } },
    exit: { height: 0, transition: { easeIn: "linear", duration: 0.4 } },
  };

  return (
    <motion.section
      className="mediaSection"
      key="mediaSection"
      variants={section}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
    >
      <h2 className="sectionName">Nasze sociale</h2>
      <div className="categories">
        <div className="categoryWrapper">
          <FaFacebook style={{ fill: "#fff", fontSize: "3.5rem" }} />
          <h3 className="categoryName">Facebook</h3>
        </div>
        <div className="categoryWrapper">
          <FaInstagram style={{ fill: "#fff", fontSize: "3.5rem" }} />
          <h3 className="categoryName">Instagram</h3>
        </div>
        <div className="categoryWrapper">
          <FaTwitter style={{ fill: "#fff", fontSize: "3.5rem" }} />
          <h3 className="categoryName">Twitter</h3>
        </div>
      </div>
    </motion.section>
  );
};

export default Media;
