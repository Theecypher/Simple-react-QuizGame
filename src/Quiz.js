import { useState } from "react";
import { quiz } from "./quizQuestion";

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (userAnswer, index) => {
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((index) => index + 1);
      if (userAnswer === correctAnswer) {
        setScore((prevScore) => prevScore + 5);
      }
    } else {
      setSelectedAnswerIndex(null);
    }
  };

  const { questions } = quiz;

  const { question, choices, correctAnswer } = questions[activeQuestion];

  return (
    <>
      <div
        id="container"
        className={selectedAnswerIndex !== null ? "show" : "hide"}
      >
        <h1>Project 5: Simple Quiz App</h1>
        <h2>{question}</h2>
        <ul>
          {choices.map((item, index) => (
            <li onClick={() => handleAnswer(item, index)}>{item}</li>
          ))}
          {/* <div className="buttons">
         {choices.map((item, index) => (
             <button onClick={() => handleAnswer(item, index)}>{ item }</button>
         ))} */}
        </ul>

        <div className="result">
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{score}</span>
          </p>
        </div>
      </div>

      <div
        id="container"
        className={selectedAnswerIndex !== null ? "hide" : "show"}
      >
        <p>
          Congratulations! You scored:
          <span>{score}</span>
        </p>
        <button>Replay</button>
      </div>
    </>
  );
};

export default Quiz;
