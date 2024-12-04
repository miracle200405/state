import React from "react";

function Options({ options, onAnswerClick }) {
  const optionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
  };

  const optionButtonStyle = {
    padding: "15px",
    margin: "5px",
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
    borderRadius: "8px",
    backgroundColor: "#4a90e2",
    color: "white",
    border: "none",
    fontSize: "16px",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#357abd",
    },
  };

  return (
    <div style={optionStyle}>
      {options.map((option, index) => (
        <button
          key={index}
          style={optionButtonStyle}
          onClick={() => onAnswerClick(option)}
          className="optionButton"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
