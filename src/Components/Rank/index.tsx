import React, { useEffect } from "react";
import { RankProps } from "../../types";
import "./Rank.styles.scss";
import { motion } from "framer-motion";

const Rank = ({ setComponents, setActiveComponent, rank }: RankProps) => {
  useEffect(() => {
    setComponents(false);
    setActiveComponent("rank");
  }, []);

  const section = {
    initial: { height: 0 },
    animate: { height: "85%", transition: { easeIn: "linear", duration: 0.4 } },
    exit: { height: 0, transition: { easeIn: "linear", duration: 0.4 } },
  };

  return (
    <motion.section
      className="rankSection"
      key="rankSection"
      variants={section}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
    >
      <h2 className="sectionName">Ranking</h2>
      <div className="categories">
        {rank.map((item, i) => {
          return (
            <div className="rankItem" key={i}>
              <span className="categoryName index">#{i + 1}</span>
              <h3 className="categoryName nickName">{item.nick}</h3>
              <p className="categoryName points">{item.points}pkt.</p>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Rank;
