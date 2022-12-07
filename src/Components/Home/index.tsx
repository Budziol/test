import React, { useEffect } from "react";
import "./Home.styles.scss";
import { FaGlobeAfrica } from "react-icons/fa";
import Footer from "../Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Hprops } from "../../types";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

const Home = ({
  setComponents,
  setActiveComponent,
  user,
  setUserDetails,
  userDetails,
}: Hprops) => {
  useEffect(() => {
    setComponents(false);
    setActiveComponent("home");
  }, []);

  useEffect(() => {
    const usersColectionRef = collection(db, "users");

    const getUserDetails = async () => {
      const q = query(usersColectionRef, where("email", "==", user.email));
      const getDetails = await getDocs(q);
      const userRef = doc(db, "users", getDetails.docs[0].id);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        setUserDetails({
          nick: docSnap.data().nick,
          email: docSnap.data().email,
          points: docSnap.data().points,
        });
      } else {
        console.log("No such document!");
      }
    };
    getUserDetails();
  }, [user]);

  return (
    <section className="homeSection">
      <div className="container">
        {userDetails === undefined || userDetails === null ? (
          <h1>Loading</h1>
        ) : (
          <>
            <h2
              className="userGreeting"
              onClick={() => console.log(userDetails)}
            >
              Witaj <span>{userDetails?.nick}</span> twój ranking wynosi: #
              {userDetails?.points}
            </h2>
            <Swiper
              className="swiper"
              slidesPerView={1}
              freeMode={false}
              speed={500}
            >
              <h3 className="swiperTitle">Top quizy</h3>
              <SwiperSlide className="categoryWrapper">
                <div className="categoryInnerWrapper">
                  <FaGlobeAfrica style={{ fill: "#fff", fontSize: "3.5rem" }} />
                  <h3 className="categoryName">Geografia</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="categoryWrapper">
                <div className="categoryInnerWrapper">
                  <FaGlobeAfrica style={{ fill: "#fff", fontSize: "3.5rem" }} />
                  <h3 className="categoryName">Sport</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="categoryWrapper">
                <div className="categoryInnerWrapper">
                  <FaGlobeAfrica style={{ fill: "#fff", fontSize: "3.5rem" }} />
                  <h3 className="categoryName">Historia</h3>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              className="swiper"
              slidesPerView={1}
              freeMode={false}
              speed={500}
            >
              <h3 className="swiperTitle">Top rankingu</h3>
              <SwiperSlide className="categoryWrapper">
                <h3 className="categoryName">TopGraczPl</h3>
              </SwiperSlide>
              <SwiperSlide className="categoryWrapper">
                <h3 className="categoryName">ADAWdwd22</h3>
              </SwiperSlide>
              <SwiperSlide className="categoryWrapper">
                <h3 className="categoryName">dawdad2</h3>
              </SwiperSlide>
            </Swiper>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
