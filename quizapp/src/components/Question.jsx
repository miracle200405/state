import React from "react";

function Question({ questionData, questionNumber, totalQuestions }) {
  const questionStyle = {
    padding: "20px",
    marginBottom: "20px",
  };

  const progressStyle = {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  };

  return (
    <div style={questionStyle}>
      <div style={progressStyle}>
        Question {questionNumber} of {totalQuestions}
      </div>
      <h2 style={{ margin: "10px 0" }}>{questionData.question}</h2>
    </div>
  );
}

export default Question; 
