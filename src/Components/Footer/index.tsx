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

const Footer = ({ activeComponent, setUser }: any) => {
  const navigate = useNavigate();

  const logout = async () => {
    await auth.signOut();
    setUser(undefined);
    navigate("/quiz-appka/");
  };

  return (
    <footer className="footer">
      <div className="footerIcon">
        <Link to={"/quiz-appka/home"}>
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
      </div>
      <div className="footerIcon">
        <Link to={"/quiz-appka/quizes"}>
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
      </div>
      <div className="footerIcon">
        <Link to={"/quiz-appka/rank"}>
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
      </div>
      <div className="footerIcon">
        <Link to={"/quiz-appka/media"}>
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
      </div>
      <div className="footerIcon">
        <FaSignOutAlt
          style={{
            color: "rgba(106, 90, 224, 0.7)",
            fontSize: "1.5rem",
          }}
          onClick={() => logout()}
        />
      </div>
    </footer>
  );
};

export default Footer;
