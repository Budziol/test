import React, { useEffect } from "react";
import "./Home.styles.scss";
import { FaUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HomeProps } from "../../types";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { DynamicFaIcon } from "../../DynamicIcons";
import { Link } from "react-router-dom";

const Home = ({
  setComponents,
  setActiveComponent,
  user,
  setUserDetails,
  userDetails,
  rank,
  allUsers,
  allQuizes,
}: HomeProps) => {
  useEffect(() => {
    setComponents(false);
    setActiveComponent("home");
  }, []);

  const section = {
    initial: { height: 0 },
    animate: { height: "85%", transition: { easeIn: "linear", duration: 0.4 } },
    exit: { height: 0, transition: { easeIn: "linear", duration: 0.4 } },
  };

  return (
    <motion.section
      className="homeSection"
      key="homeSection"
      variants={section}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
    >
      <h2 className="userGreeting">
        Witaj <span>{userDetails?.nick}</span> twój ranking wynosi: #
        {rank?.findIndex((item) => item.email === user.email) + 1}
      </h2>
      <Swiper
        className="swiper"
        slidesPerView={1}
        freeMode={false}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        speed={500}
      >
        <h3 className="swiperTitle">Top quizy</h3>
        {allQuizes.map((item, i) => {
          return (
            i < 5 && (
              <SwiperSlide className="categoryWrapper" key={i}>
                <Link to={`/quiz/${item.id}`} className="categoryInnerWrapper">
                  <DynamicFaIcon name={item.icon} />
                  <h3 className="categoryName">{item.title}</h3>
                </Link>
              </SwiperSlide>
            )
          );
        })}
      </Swiper>
      <Swiper
        className="swiper"
        slidesPerView={1}
        freeMode={false}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        speed={500}
      >
        <h3 className="swiperTitle">Top rankingu</h3>
        {rank
          .slice()
          .sort((a, b) => a.points - b.points)
          .reverse()
          .map((item, i) => {
            return (
              i < 5 && (
                <SwiperSlide className="categoryWrapper" key={i}>
                  <Link to={`/rank`} className="categoryInnerWrapper">
                    <FaUser style={{ fill: "#fff", fontSize: "2.5rem" }} />
                    <h3 className="categoryName">{item.nick}</h3>
                  </Link>
                </SwiperSlide>
              )
            );
          })}
      </Swiper>
    </motion.section>
  );
};

export default Home;
