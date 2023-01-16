import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState("red");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const changeBtnColor = () => {
    if (currentColor === "red") {
      setCurrentColor("blue");
    } else {
      setCurrentColor("red");
    }
  };

  const disableBtn = (event) => {
    const value = event.target.checked;
    setBtnDisabled(value);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: currentColor }}
        onClick={changeBtnColor}
        disabled={btnDisabled}
      >
        {currentColor === "red" ? "Change to blue" : "Change to red"}
      </button>
      <input type="checkbox" onChange={(event) => disableBtn(event)} />
    </div>
  );
}

export default App;
