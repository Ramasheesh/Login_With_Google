import React from "react";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const errorStyle = {
    color: "red",
    textAlign: "center",
    marginTop: "60px",
    padding: "10px",
    fontSize: "1.5rem", // Default font size
    "@media (max-width: 768px)": {
      // Tablet and smaller devices
      fontSize: "1.2rem",
    },
    "@media (max-width: 480px)": {
      // Mobile devices
      fontSize: "1rem",
    },
  };
  const navigate = useNavigate();
  return (
    <>
      <div style={errorStyle}>Error: Something went wrong.
      <button
        style={{
          backgroundcolor: "white",
          textAlign: "center",
          marginLeft: "20px",
          fontWidth: " 1rem Bold",
          cursor: "ponter",
        }}
        onClick={() => navigate("/")}
      >
        Back to home
      </button>
      </div>
    </>
  );
};

export default Error;
