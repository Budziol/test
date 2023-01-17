import React, { useEffect, useState } from "react";
import Welcome from "./Components/Welcome";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Logo from "./Components/Logo";
import {
  SquareFour,
  SquareOne,
  SquareThree,
  SquareTwo,
} from "./Components/BackgroundElements";
import "./Styles/app.styles.scss";
import Footer from "./Components/Footer";
import Quizes from "./Components/Quizes";
import Rank from "./Components/Rank";
import Media from "./Components/Media";
import Quiz from "./Components/Quiz";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import PrivateRoute from "./PrivateRoute";
import { UserDetails } from "./types";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const location = useLocation();
  const [components, setComponents] = useState<boolean>(true);
  const [activeComponent, setActiveComponent] = useState<string | undefined>(
    undefined
  );

  const [user, setUser] = useState<any>();
  const [userDetails, setUserDetails] = useState<UserDetails | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
  }, []);

  const [allQuizes, setAllQuizes] = useState<any[]>([]);

  const [allUsers, setAllUsers] = useState<any[]>([]);

  const [rank, setRank] = useState<any[]>([]);

  const [quizEnded, setQuizEnded] = useState<boolean>(false);

  useEffect(() => {
    const getUserDoc = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setAllUsers(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getUserDoc();
  }, [user, quizEnded]);

  useEffect(() => {
    const getQuizesDoc = async () => {
      const querySnapshot = await getDocs(collection(db, "quizes"));
      setAllQuizes(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getQuizesDoc();
  }, [user]);

  useEffect(() => {
    setRank(allUsers.sort((a, b) => a.points - b.points).reverse());
  }, [allUsers, userDetails]);

  useEffect(() => {
    setUserDetails(allUsers.find((item) => item?.email === user?.email));
  }, [user, allUsers, quizEnded]);

  return (
    <main className={components ? "App" : "Home"}>
      <Logo />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <Welcome
                setComponents={setComponents}
                setActiveComponent={setActiveComponent}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setComponents={setComponents}
                setActiveComponent={setActiveComponent}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                setComponents={setComponents}
                setActiveComponent={setActiveComponent}
              />
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute user={user} isLoading={isLoading}>
                <Home
                  setComponents={setComponents}
                  setActiveComponent={setActiveComponent}
                  user={user}
                  setUserDetails={setUserDetails}
                  userDetails={userDetails}
                  rank={rank}
                  allUsers={allUsers}
                  allQuizes={allQuizes}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/quizes"
            element={
              <PrivateRoute user={user} isLoading={isLoading}>
                <Quizes
                  setComponents={setComponents}
                  setActiveComponent={setActiveComponent}
                  allQuizes={allQuizes}
                />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/quiz/:id"
            element={
              <PrivateRoute user={user} isLoading={isLoading}>
                <Quiz
                  setComponents={setComponents}
                  setActiveComponent={setActiveComponent}
                  allQuizes={allQuizes}
                  userDetails={userDetails}
                  setUserDetails={setUserDetails}
                  setQuizEnded={setQuizEnded}
                  quizEnded={quizEnded}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/rank"
            element={
              <PrivateRoute user={user} isLoading={isLoading}>
                <Rank
                  setComponents={setComponents}
                  setActiveComponent={setActiveComponent}
                  rank={rank}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/media"
            element={
              <PrivateRoute user={user} isLoading={isLoading}>
                <Media
                  setComponents={setComponents}
                  setActiveComponent={setActiveComponent}
                />
              </PrivateRoute>
            }
          />
        </Routes>
      </AnimatePresence>
      <SquareOne />
      <SquareTwo />
      <SquareThree />
      <SquareFour />
      <AnimatePresence mode="wait">
        {(activeComponent === "home" ||
          activeComponent === "quizes" ||
          activeComponent === "rank" ||
          activeComponent === "media") && (
          <Footer activeComponent={activeComponent} setUser={setUser} />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
