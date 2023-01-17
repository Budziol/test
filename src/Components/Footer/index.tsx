import React, { useState } from "react";
import {
  FaHome,
  FaQuestion,
  FaMedal,
  FaLink,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.styles.scss";
import { auth } from "../../firebase-config";
import { motion } from "framer-motion";

const Footer = ({ activeComponent, setUser }: any) => {
  const navigate = useNavigate();

  const logout = async () => {
    await auth.signOut();
    setUser(undefined);
    navigate("/");
  };

  return (
    <motion.footer
      className="footer"
      key="footer"
      initial={{ height: 0 }}
      animate={{
        height: "70px",
        transition: { easeIn: "linear", duration: 0.4 },
      }}
      exit={{ height: 0, transition: { easeIn: "linear", duration: 0.4 } }}
    >
      <motion.div
        className="footerIcon"
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      >
        <Link to={"/home"}>
          <FaHome
            style={{
              color:
                activeComponent === "home"
                  ? "#6a5ae0"
                  : "rgba(106, 90, 224, 0.7)",
              fontSize: "1.5rem",
            }}
          />
        </Link>
      </motion.div>
      <motion.div
        className="footerIcon"
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      >
        <Link to={"/quizes"}>
          <FaQuestion
            style={{
              color:
                activeComponent === "quizes"
                  ? "#6a5ae0"
                  : "rgba(106, 90, 224, 0.7)",
              fontSize: "1.5rem",
            }}
          />
        </Link>
      </motion.div>
      <motion.div
        className="footerIcon"
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      >
        <Link to={"/rank"}>
          <FaMedal
            style={{
              color:
                activeComponent === "rank"
                  ? "#6a5ae0"
                  : "rgba(106, 90, 224, 0.7)",
              fontSize: "1.5rem",
            }}
          />
        </Link>
      </motion.div>
      <motion.div
        className="footerIcon"
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      >
        <Link to={"/media"}>
          <FaLink
            style={{
              color:
                activeComponent === "media"
                  ? "#6a5ae0"
                  : "rgba(106, 90, 224, 0.7)",
              fontSize: "1.5rem",
            }}
          />
        </Link>
      </motion.div>
      <motion.div
        className="footerIcon"
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      >
        <FaSignOutAlt
          style={{
            color: "rgba(106, 90, 224, 0.7)",
            fontSize: "1.5rem",
          }}
          onClick={() => logout()}
        />
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
