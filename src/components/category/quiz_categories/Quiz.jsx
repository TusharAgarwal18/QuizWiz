import { useState } from "react";
import Categories from "./Categories.json";
import "./quiz.css";
import { useParams } from "react-router-dom";

export const Quiz = () => {
  const { category } = useParams();
  var Questionbank = Categories.filter(function (c) {
    return c[category];
  });
  Questionbank = Questionbank[0][category];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <>
      <div className="quiz">
        {showScore ? (
          <div className="score-section">
            <div className="score-result">
              <p>
                You have scored {score} out of {Questionbank.length}.
              </p>
              <p>Scored : {Math.round((score / Questionbank.length) * 100)}%</p>
            </div>
            <>
              <button type="submit" onClick={resetQuiz}>
                Play Again!!
              </button>
            </>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>{currentQuestion + 1}</span>/{Questionbank.length}
              </div>

              <div className="question-text">
                {Questionbank[currentQuestion].Question}
              </div>
            </div>

            <div className="answer-section">
              {Questionbank[currentQuestion].Answers.map((answer) => (
                <button
                  key={answer.key}
                  onClick={() => handleAnswerResponse(answer.isCorrect)}
                >
                  {answer.Answer}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
