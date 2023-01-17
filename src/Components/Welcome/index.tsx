import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Welcome.styles.scss";
import { WelcomeProps } from "../../types";
import { motion } from "framer-motion";

const Welcome = ({ setComponents, setActiveComponent }: WelcomeProps) => {
  useEffect(() => {
    setComponents(true);
    setActiveComponent("welcome");
  }, []);

  return (
    <motion.section
      className="WelcomeSection"
      key="WelcomeSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="container">
        <h2 className="welcomeText">
          Witaj w <span>QuizzApce</span>
        </h2>
        <p className="welcomeParagraph">zaloguj się lub zarejetruj by zagrać</p>
        <div className="buttonContainer">
          <Link to={"/login"}>
            <button className="loginButton">Logowanie</button>
          </Link>
          <Link to={"/register"}>
            <button className="registerButton">Rejestracja</button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Welcome;
