import React, { useState, useEffect } from "react";
import "./Login.styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import { WelcomeProps } from "../../types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { motion } from "framer-motion";

const Login = ({ setComponents, setActiveComponent }: WelcomeProps) => {
  useEffect(() => {
    setComponents(true);
    setActiveComponent("login");
  }, []);

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");

  const [pwd, setPwd] = useState<string>("");

  const login = async (e: React.FormEvent<EventTarget | HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, pwd);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.section
      className="loginSection"
      key="loginSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <form className="container" onSubmit={login}>
        <h2 className="welcomeText">Zaloguj</h2>
        <div className="inputBox">
          <FaUser style={{ fill: "#6a5ae0", fontSize: "1.5rem" }} />
          <input
            className="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <FaLock style={{ fill: "#6a5ae0", fontSize: "1.5rem" }} />
          <input
            className="pwd"
            placeholder="hasło"
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <div className="buttonContainer">
          <button className="loginButton" type="submit">
            Zaloguj
          </button>
        </div>
      </form>
      <Link to={"/register"}>
        <button className="registerButton">Rejestracja</button>
      </Link>
    </motion.section>
  );
};

export default Login;
