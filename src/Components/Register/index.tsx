import React, { useState, useEffect } from "react";
import "./Register.styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import { LoginProps } from "../../types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";

const Register = ({ setComponents, setActiveComponent }: LoginProps) => {
  useEffect(() => {
    setComponents(true);
    setActiveComponent("register");
  }, []);
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  const [pwd, setPwd] = useState<string>("");

  const [checkPwd, setCheckPwd] = useState<string>("");

  const register = async (
    e: React.FormEvent<EventTarget | HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, pwd);
      const docRef = await addDoc(collection(db, "users"), {
        nick: userName,
        email: email,
        points: 0,
      });
      navigate("/quiz-appka/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="loginSection">
      <form className="container" onSubmit={register}>
        <h2 className="welcomeText">Zarejestruj</h2>
        <div className="inputBox">
          <FaUser style={{ fill: "#6a5ae0", fontSize: "1.5rem" }} />
          <input
            className="nick"
            type="text"
            placeholder="nick"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <FaEnvelope style={{ fill: "#6a5ae0", fontSize: "1.5rem" }} />
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
        <div className="inputBox">
          <FaLock style={{ fill: "#6a5ae0", fontSize: "1.5rem" }} />
          <input
            className="pwdCheck"
            placeholder="powtórz hasło"
            type="password"
            value={checkPwd}
            onChange={(e) => setCheckPwd(e.target.value)}
          />
        </div>
        <div className="buttonContainer">
          <button className="loginButton" type="submit">
            Zarejestruj
          </button>
        </div>
      </form>
      <Link to={"/quiz-appka/login"}>
        <button className="registerButton">Logowanie</button>
      </Link>
    </section>
  );
};

export default Register;
