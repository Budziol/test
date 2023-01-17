import React, { useEffect, useRef, useState } from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Answers, DataTypes, QuizProps, QuizQuestion } from "../../types";
import Logo from "../Logo";
import ProgressBar from "./progressBar";
import "./Quiz.styles.scss";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { db } from "../../firebase-config";
import { updateDoc, doc } from "firebase/firestore";
import Loader from "../Loader";
import axios from "axios";

const Quiz = ({
  setComponents,
  setActiveComponent,
  allQuizes,
  userDetails,
  setUserDetails,
  setQuizEnded,
  quizEnded,
}: QuizProps) => {
  useEffect(() => {
    setComponents(false);
    setActiveComponent("quizes");
    setQuizEnded(false);
  }, []);
  //do poprawy

  const { id } = useParams();
  const [quiz, setQuiz] = useState<any | undefined>(undefined);
  const [question, setQuestion] = useState<QuizQuestion | undefined>(undefined);
  const [step, setStep] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const [endpoints, setEndpoints] = useState<string[]>([]);
  const [data, setData] = useState<DataTypes>();
  const [formattedData, setFormattedData] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setQuiz(allQuizes?.find((quiz) => quiz.id === id));
  }, [userDetails]);

  useEffect(() => {
    setEndpoints([quiz?.easy.url, quiz?.medium.url, quiz?.hard.url]);
  }, [quiz]);

  //prettier-ignore
  useEffect(() => {
    if (endpoints.length !== 0) {
      axios
      .all(
        endpoints.map((endpoint) =>
        axios.get(endpoint, {
          headers: { 'Accept': "application/sparql-results+json" },
        })
        )
        )
        .then(axios.spread((easy, medium, hard) => {
          setData([ easy.data.results.bindings, medium.data.results.bindings, hard.data.results.bindings ]);
          setLoading(false)
        }));
      }
    }, [endpoints]);

  useEffect(() => {
    setFormattedData(
      data?.map((item: any) =>
        item.map((q: any) => {
          return {
            question: q.questionLabel?.value,
            answer: q.answerLabel?.value,
          };
        })
      )
    );
  }, [data]);

  useEffect(() => {
    if (formattedData !== undefined) {
      const generator = (question: any, category: any) => {
        let quest =
          formattedData[category][
            Math.floor(Math.random() * formattedData[category].length)
          ];
        setQuestion({
          question: `${question}${quest.question}?`,
          answers: [
            { answer: quest.answer, correct: 1 },
            {
              answer:
                formattedData[category][
                  Math.floor(Math.random() * formattedData[category].length)
                ].answer,
              correct: 0,
            },
            {
              answer:
                formattedData[category][
                  Math.floor(Math.random() * formattedData[category].length)
                ].answer,
              correct: 0,
            },
            {
              answer:
                formattedData[category][
                  Math.floor(Math.random() * formattedData[category].length)
                ].answer,
              correct: 0,
            },
          ],
        });
      };
      if (step === 0) {
        generator(quiz?.easy.question, 0);
      } else if (step === 1) {
        generator(quiz?.medium.question, 1);
      } else if (step === 2) {
        generator(quiz?.hard.question, 2);
      }
    }
  }, [formattedData, step]);

  useEffect(() => {
    if (question !== undefined) {
      const shuffleArray = (array: any) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      };
      shuffleArray(question?.answers);
    }
  }, [question]);

  useEffect(() => {
    console.log(question);
  }, [question]);

  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const [completed, setCompleted] = useState(0);

  const timer = useRef<ReturnType<typeof setTimeout>>();
  const interval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (startQuiz) {
      setActiveComponent("quiz");
      interval.current = setInterval(() => {
        if (interval.current) {
          setCompleted((prev) => prev + 1);
        }
      }, 100);
      timer.current = setTimeout(() => {
        if (timer.current) {
          clearTimeout(timer.current);
          clearInterval(interval.current);
          setCompleted(0);
          setStep((prev) => prev + 1);
        }
      }, 10000);
      if (step >= 3) {
        setQuizEnded(true);
        setActiveComponent("quizes");
        clearTimeout(timer.current);
        if (points > 0) {
          if (userDetails !== undefined) {
            setUserDetails({
              points: userDetails.points + points,
              email: userDetails.email,
              nick: userDetails.nick,
              id: userDetails.id,
            });
          }
        }
      }
    }
  }, [startQuiz, step]);

  useEffect(() => {
    if (quizEnded) {
      if (points > 0) {
        const upadteUser = async (id: any) => {
          const userRef = doc(db, "users", id);
          await updateDoc(userRef, { points: userDetails?.points });
        };
        upadteUser(userDetails?.id);
      }
    }
  }, [quizEnded]);

  const handleAnswerClick = ({ correct }: Answers) => {
    if (correct === 1) {
      if (step === 0) {
        setPoints((prev) => prev + 10);
      } else if (step === 1) {
        setPoints((prev) => prev + 20);
      } else if (step === 2) {
        setPoints((prev) => prev + 30);
      }
      setStep((prev) => prev + 1);
      clearTimeout(timer.current);
      clearInterval(interval.current);
      setCompleted(0);
    } else {
      setStep((prev) => prev + 1);
      clearTimeout(timer.current);
      clearInterval(interval.current);
      setCompleted(0);
    }
  };

  return (
    <motion.section
      className="quizSection"
      key="quizSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      {quiz !== undefined ? (
        <div
          className="container"
          style={{
            marginBottom: startQuiz && !quizEnded ? "0rem" : "15rem",
            alignItems: quizEnded ? "center" : "normal",
          }}
        >
          {quizEnded ? (
            points !== 0 ? (
              <>
                <Logo />
                <div className="categoryWrapper" style={{ marginTop: "5rem" }}>
                  <h3 className="sectionName">Podsumowanie</h3>
                  <p className="pointsText">Gratulacje zdobyłeś {points}pkt.</p>
                  <Link to="/quizes">
                    <button className="linkBtn">Quizy</button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Logo />
                <div className="categoryWrapper" style={{ marginTop: "5rem" }}>
                  <h3 className="sectionName">Podsumowanie</h3>
                  <p className="pointsText">
                    Niestety tym razem nie udało ci się zdobyć punktów
                  </p>
                  <Link to="/quizes">
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
                    <h3 className="sectionName">{question?.question}</h3>
                    <ProgressBar completed={completed} />
                  </div>
                ) : (
                  <>
                    <FaGlobeAfrica
                      style={{ fill: "#fff", fontSize: "4.5rem" }}
                    />
                    <h3 className="sectionName">{quiz?.title}</h3>
                  </>
                )}
              </div>
              <div className="categories">
                {startQuiz ? (
                  <div className="quizContainer">
                    {question?.answers.map((item, i) => {
                      return (
                        <button
                          className="answerBtn"
                          key={i}
                          onClick={() => handleAnswerClick(item)}
                        >
                          {item.answer}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <button
                    className="startBtn"
                    disabled={loading}
                    onClick={() => setStartQuiz(true)}
                  >
                    Rozpocznij
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </motion.section>
  );
};

export default Quiz;
