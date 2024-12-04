import React, { useState } from "react";

function ConditionalRendering() {
  const [isLightOn, setIsLightOn] = useState(true);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>The light is {isLightOn ? "ON" : "OFF"}</h1>
      <img
        src={isLightOn ? "/images/pic_bulbon.gif" : "/images/pic_bulboff.gif"}
        alt={isLightOn ? "Light On" : "Light Off"}
        style={styles.image}
      />
      <button
        onClick={() => setIsLightOn(!isLightOn)}
        style={{
          ...styles.button,
          backgroundColor: isLightOn ? "#f44336" : "#4CAF50",
        }}
      >
        {isLightOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  },
  heading: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  image: {
    width: "150px",
    height: "auto",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    transition: "all 0.3s ease",
  },
};

export default ConditionalRendering;
