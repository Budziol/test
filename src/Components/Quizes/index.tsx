import React, { useEffect } from "react";
import { QuizesProps } from "../../types";
import "./Quizes.styles.scss";
import "swiper/css/grid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DynamicFaIcon } from "../../DynamicIcons";

const Quizes = ({
  setComponents,
  setActiveComponent,
  allQuizes,
}: QuizesProps) => {
  useEffect(() => {
    setComponents(false);
    setActiveComponent("quizes");
  }, []);

  const section = {
    initial: { height: 0 },
    animate: { height: "80%", transition: { easeIn: "linear", duration: 0.4 } },
    exit: { height: 0, transition: { easeIn: "linear", duration: 0.4 } },
  };

  return (
    <motion.section
      className="quizesSection"
      key="quizesSection"
      variants={section}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
    >
      <h2 className="sectionName">Wszystkie quizy</h2>
      <div className="categories">
        {allQuizes.map((item, i) => {
          return (
            <Link to={`/quiz/${item.id}`} className="categoryWrapper" key={i}>
              <DynamicFaIcon name={item.icon} />
              <h3 className="categoryName">{item.title}</h3>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Quizes;
