import React, { useEffect, useState } from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HomeProps } from "../../types";
import Logo from "../Logo";
import ProgressBar from "./progressBar";
import "./Quiz.styles.scss";

const Quiz = ({ setComponents, setActiveComponent }: HomeProps) => {
  useEffect(() => {
    setComponents(false);
    setActiveComponent("quizes");
  }, []);

  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const [completed, setCompleted] = useState(0);
  const [quizEnded, setQuizEnded] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);

  useEffect(() => {
    if (startQuiz) {
      setActiveComponent("quiz");
      const timer = setInterval(() => setCompleted((prev) => prev + 1), 100);
      setTimeout(function () {
        clearInterval(timer);
        setQuizEnded(true);
        setActiveComponent("quizes");
      }, 10000);
    }
  }, [startQuiz]);

  return (
    <section className="quizSection">
      <div
        className="container"
        style={{
          marginBottom: startQuiz && !quizEnded ? "0rem" : "15rem",
          alignItems: quizEnded ? "center" : "normal",
        }}
      >
        {quizEnded ? (
          correctAnswer ? (
            <>
              <Logo />
              <div className="categoryWrapper">
                <h3 className="sectionName">Podsumowanie</h3>
                <p className="pointsText">Gratulacje zdobyłeś 10pkt.</p>
                <Link to="/quiz-appka/quizes">
                  <button className="linkBtn">Quizy</button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <Logo />
              <div className="categoryWrapper">
                <h3 className="sectionName">Podsumowanie</h3>
                <p className="pointsText">
                  Niestety tym razem nie udało ci się zdobyć punktów
                </p>
                <Link to="/quiz-appka/quizes">
                  <button className="linkBtn">Quizy</button>
                </Link>
              </div>
            </>
          )
        ) : (
          <>
            <div className="categoryWrapper">
              {startQuiz ? (
                <div className="questionContainer">
                  <h3 className="sectionName">Stolicą Polski jest?</h3>
                  <ProgressBar completed={completed} />
                </div>
              ) : (
                <>
                  <FaGlobeAfrica style={{ fill: "#fff", fontSize: "4.5rem" }} />
                  <h3 className="sectionName">Geografia</h3>
                </>
              )}
            </div>
            <div className="categories">
              {startQuiz ? (
                <div className="quizContainer">
                  <button
                    className="answerBtn"
                    onClick={() => setCorrectAnswer(false)}
                  >
                    Kraków
                  </button>
                  <button
                    className="answerBtn"
                    onClick={() => setCorrectAnswer(true)}
                  >
                    Warszawa
                  </button>
                  <button
                    className="answerBtn"
                    onClick={() => setCorrectAnswer(false)}
                  >
                    Gdańsk
                  </button>
                  <button
                    className="answerBtn"
                    onClick={() => setCorrectAnswer(false)}
                  >
                    Poznań
                  </button>
                </div>
              ) : (
                <button className="startBtn" onClick={() => setStartQuiz(true)}>
                  Rozpocznij
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Quiz;
