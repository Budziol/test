import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Welcome.styles.scss";
import { HomeProps } from "../../types";

const Welcome = ({ setComponents, setActiveComponent }: HomeProps) => {
  useEffect(() => {
    setComponents(true);
    setActiveComponent("welcome");
  }, []);

  return (
    <section className="WelcomeSection">
      <div className="container">
        <h2 className="welcomeText">
          Witaj w <span>QuizzApce</span>
        </h2>
        <p className="welcomeParagraph">zaloguj się lub zarejetruj by zagrać</p>
        <div className="buttonContainer">
          <Link to={"/quiz-appka/login"}>
            <button className="loginButton">Logowanie</button>
          </Link>
          <Link to={"/quiz-appka/register"}>
            <button className="registerButton">Rejestracja</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
