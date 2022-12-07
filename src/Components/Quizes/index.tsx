import React, { useEffect } from "react";
import { HomeProps } from "../../types";
import "./Quizes.styles.scss";
import { FaGlobeAfrica } from "react-icons/fa";
import "swiper/css/grid";
import { Link } from "react-router-dom";

const Quizes = ({ setComponents, setActiveComponent }: HomeProps) => {
  useEffect(() => {
    setComponents(false);
    setActiveComponent("quizes");
  }, []);

  return (
    <section className="quizesSection">
      <h2 className="sectionName">Wszystkie quizy</h2>
      <div className="categories">
        <Link to="/quiz-appka/quiz/4200" className="categoryWrapper">
          <FaGlobeAfrica style={{ fill: "#fff", fontSize: "3.5rem" }} />
          <h3 className="categoryName">Geografia</h3>
        </Link>
        <div className="categoryWrapper">
          <FaGlobeAfrica style={{ fill: "#fff", fontSize: "3.5rem" }} />
          <h3 className="categoryName">Geografia</h3>
        </div>
        <div className="categoryWrapper">
          <FaGlobeAfrica style={{ fill: "#fff", fontSize: "3.5rem" }} />
          <h3 className="categoryName">Geografia</h3>
        </div>
        <div className="categoryWrapper">
          <FaGlobeAfrica style={{ fill: "#fff", fontSize: "3.5rem" }} />
          <h3 className="categoryName">Geografia</h3>
        </div>
        <div className="categoryWrapper">
          <FaGlobeAfrica style={{ fill: "#fff", fontSize: "3.5rem" }} />
          <h3 className="categoryName">Geografia</h3>
        </div>
        <div className="categoryWrapper">
          <FaGlobeAfrica style={{ fill: "#fff", fontSize: "3.5rem" }} />
          <h3 className="categoryName">Geografia</h3>
        </div>
        <div className="categoryWrapper">
          <FaGlobeAfrica style={{ fill: "#fff", fontSize: "3.5rem" }} />
          <h3 className="categoryName">Geografia</h3>
        </div>
        <div className="categoryWrapper">
          <FaGlobeAfrica style={{ fill: "#fff", fontSize: "3.5rem" }} />
          <h3 className="categoryName">Geografia</h3>
        </div>
      </div>
    </section>
  );
};

export default Quizes;
