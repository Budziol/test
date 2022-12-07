import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HomeProps } from "../../types";
import "./Media.styles.scss";

const Media = ({ setComponents, setActiveComponent }: HomeProps) => {
  useEffect(() => {
    setComponents(false);
    setActiveComponent("media");
  }, []);
  return (
    <section className="mediaSection">
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
    </section>
  );
};

export default Media;
