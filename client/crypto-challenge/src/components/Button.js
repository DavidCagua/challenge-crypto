import React from "react";
import "./Button.css";

function Button({ onClick }) {
  return <button onClick={() => onClick()}>Open price chart</button>;
}

export default Button;
