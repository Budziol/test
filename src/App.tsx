import React, { useEffect, useState } from "react";
import Welcome from "./Components/Welcome";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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

function App() {
  const location = useLocation();
  const [components, setComponents] = useState<boolean>(true);
  const [activeComponent, setActiveComponent] = useState<string | undefined>(
    undefined
  );

  const [user, setUser] = useState<object | null>({});
  const [userDetails, setUserDetails] = useState<any>({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <main className={components ? "App" : "Home"}>
        <Logo />

        <Routes location={location} key={location.key}>
          <Route
            path="/quiz-appka/"
            element={
              <Welcome
                setComponents={setComponents}
                setActiveComponent={setActiveComponent}
              />
            }
          />
          <Route
            path="/quiz-appka/login"
            element={
              <Login
                setComponents={setComponents}
                setActiveComponent={setActiveComponent}
              />
            }
          />
          <Route
            path="/quiz-appka/register"
            element={
              <Register
                setComponents={setComponents}
                setActiveComponent={setActiveComponent}
              />
            }
          />
          <Route
            path="/quiz-appka/home"
            element={
              <PrivateRoute user={user}>
                <Home
                  setComponents={setComponents}
                  setActiveComponent={setActiveComponent}
                  user={user}
                  setUserDetails={setUserDetails}
                  userDetails={userDetails}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/quiz-appka/quizes"
            element={
              <PrivateRoute user={user}>
                <Quizes
                  setComponents={setComponents}
                  setActiveComponent={setActiveComponent}
                />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/quiz-appka/quiz/:quizId"
            element={
              <PrivateRoute user={user}>
                <Quiz
                  setComponents={setComponents}
                  setActiveComponent={setActiveComponent}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/quiz-appka/rank"
            element={
              <PrivateRoute user={user}>
                <Rank
                  setComponents={setComponents}
                  setActiveComponent={setActiveComponent}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/quiz-appka/media"
            element={
              <PrivateRoute user={user}>
                <Media
                  setComponents={setComponents}
                  setActiveComponent={setActiveComponent}
                />
              </PrivateRoute>
            }
          />
        </Routes>
        <SquareOne />
        <SquareTwo />
        <SquareThree />
        <SquareFour />

        {(activeComponent === "home" ||
          activeComponent === "quizes" ||
          activeComponent === "rank" ||
          activeComponent === "media") && (
          <Footer activeComponent={activeComponent} setUser={setUser} />
        )}
      </main>
    </AnimatePresence>
  );
}

export default App;
