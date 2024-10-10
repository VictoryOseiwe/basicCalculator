import React, { useState } from "react";
import Button from "./component/common/Button";

export default function App() {
  const [input, setInput] = useState("");
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  function handleClick(value) {
    if (isResultDisplayed) {
      setInput(value);
      setIsResultDisplayed(false);
    } else {
      setInput(input + value);
    }
  }

  function calculateResult() {
    try {
      const result = eval(input);
      setInput(result.toString());
      setIsResultDisplayed(true);
    } catch (error) {
      setInput("Error: " + error.message);
      setIsResultDisplayed(true);
    }
  }

  function clearResult() {
    setInput("");
    setResult("");
  }

  return (
    <div className="calculator-container">
      <div>
        <input type="text" value={input} readOnly />
      </div>
      <div className="calculator-grid">
        <div className="calculator-grid-item">
          <Button text="7" onClick={() => handleClick("7")} />
          <Button text="8" onClick={() => handleClick("8")} />
          <Button text="9" onClick={() => handleClick("9")} />
          <Button text="X" onClick={() => handleClick("*")} />
        </div>
        <div className="calculator-grid-item">
          <Button text="4" onClick={() => handleClick("4")} />
          <Button text="5" onClick={() => handleClick("5")} />
          <Button text="6" onClick={() => handleClick("6")} />
          <Button text="/" onClick={() => handleClick("/")} />
        </div>
        <div className="calculator-grid-item">
          <Button text="1" onClick={() => handleClick("1")} />
          <Button text="2" onClick={() => handleClick("2")} />
          <Button text="3" onClick={() => handleClick("3")} />
          <Button text="+" onClick={() => handleClick("+")} />
        </div>
        <div className="calculator-grid-item">
          <Button text="C" onClick={() => clearResult()} />
          <Button text="0" onClick={() => handleClick("0")} />
          <Button text="=" onClick={() => calculateResult()} />
          <Button text="-" onClick={() => handleClick("-")} />
        </div>
      </div>
      <p>copyright @victoryoseiwe</p>
    </div>
  );
}
