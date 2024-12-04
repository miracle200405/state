import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

 
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  const toggleTimer = () => setIsRunning(!isRunning);

 
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setCount((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

 
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
      fontFamily: "'Arial', sans-serif",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px 40px",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    counter: {
      fontSize: "4rem",
      color: "#333",
      marginBottom: "20px",
    },
    buttonContainer: {
      display: "flex",
      gap: "15px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    increment: {
      backgroundColor: "#4CAF50",
      color: "#fff",
    },
    decrement: {
      backgroundColor: "#f44336",
      color: "#fff",
    },
    reset: {
      backgroundColor: "#007BFF",
      color: "#fff",
    },
    timer: {
      backgroundColor: isRunning ? "#ff9800" : "#9e9e9e",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.counter}>{count}</div>
        <div style={styles.buttonContainer}>
          <button
            style={{ ...styles.button, ...styles.increment }}
            onClick={handleIncrease}
          >
            Increase
          </button>
          <button
            style={{ ...styles.button, ...styles.decrement }}
            onClick={handleDecrease}
          >
            Decrease
          </button>
          <button
            style={{ ...styles.button, ...styles.reset }}
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            style={{ ...styles.button, ...styles.timer }}
            onClick={toggleTimer}
          >
            {isRunning ? "Stop Timer" : "Start Timer"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
