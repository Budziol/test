import React, { useState, useEffect } from "react";
import "./Login.styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import { LoginProps } from "../../types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const Login = ({ setComponents, setActiveComponent }: LoginProps) => {
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
      // getUserDetails();
      navigate("/quiz-appka/home");
    } catch (error) {
      console.log(error);
    }
  };

  // const usersColectionRef = collection(db, "users");

  // const getUserDetails = async () => {
  //   const q = query(usersColectionRef, where("email", "==", email));
  //   const getDetails = await getDocs(q);
  //   const userRef = doc(db, "users", getDetails.docs[0].id);
  //   const docSnap = await getDoc(userRef);
  //   if (docSnap.exists()) {
  //     setUserDetails({
  //       nick: docSnap.data().nick,
  //       email: docSnap.data().email,
  //       points: docSnap.data().points,
  //     });
  //   } else {
  //     console.log("No such document!");
  //   }
  // };

  return (
    <section className="loginSection">
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
      <Link to={"/quiz-appka/register"}>
        <button className="registerButton">Rejestracja</button>
      </Link>
    </section>
  );
};

export default Login;
