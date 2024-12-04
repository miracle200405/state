import React, { useState } from "react";
import Question from "./Question";
import Options from "./options";
import quizData from "./data/questiondata.json";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const quizStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    backgroundColor: "white",
  };

  return (
    <div style={quizStyle}>
      {showScore ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h2>Quiz Complete!</h2>
          <p>
            Your score: {score} out of {quizData.questions.length}
          </p>
          <button
            onClick={restartQuiz}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4a90e2",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <Question
            questionData={quizData.questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            totalQuestions={quizData.questions.length}
          />
          <Options
            options={quizData.questions[currentQuestion].options}
            onAnswerClick={handleAnswerClick}
          />
        </>
      )}
    </div>
  );
}

export default Quiz;
