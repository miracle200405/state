import React from "react";
import Quiz from "./components/quiz";

function App() {
  const appStyle = {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  };

  return (
    <div style={appStyle}>
      <Quiz />
    </div>
  );
}

export default App;
