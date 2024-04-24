import { useState } from "react";
import "./App.scss";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  const deleteFunction = () => {
    setResult(result.slice(0, -1));
  };

  const resetFunction = () => {
    setResult("");
  };

  const finalResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("");
      setResult("Error");
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="calculatorHeader">
          <div className="calculatorName">react calc</div>
          <div className="themeChangeTitle">THEME</div>
        </div>
        <div className="calculatorResult">{result}</div>
        <div className="calculatorBody">
          <button className="calculatorButton" onClick={handleClick} value="7">
            7
          </button>
          <button className="calculatorButton" onClick={handleClick} value="8">
            8
          </button>
          <button className="calculatorButton" onClick={handleClick} value="9">
            9
          </button>
          <button className="deleteButton" onClick={deleteFunction}>
            DEL
          </button>
          <button className="calculatorButton" onClick={handleClick} value="4">
            4
          </button>
          <button className="calculatorButton" onClick={handleClick} value="5">
            5
          </button>
          <button className="calculatorButton" onClick={handleClick} value="6">
            6
          </button>
          <button className="calculatorButton" onClick={handleClick} value="+">
            +
          </button>
          <button className="calculatorButton" onClick={handleClick} value="1">
            1
          </button>
          <button className="calculatorButton" onClick={handleClick} value="2">
            2
          </button>
          <button className="calculatorButton" onClick={handleClick} value="3">
            3
          </button>
          <button className="calculatorButton" onClick={handleClick} value="-">
            -
          </button>
          <button className="calculatorButton" onClick={handleClick} value=".">
            .
          </button>
          <button className="calculatorButton" onClick={handleClick} value="0">
            0
          </button>
          <button className="calculatorButton" onClick={handleClick} value="/">
            /
          </button>
          <button className="calculatorButton" onClick={handleClick} value="*">
            x
          </button>
          <button className="resetButton" onClick={resetFunction}>
            RESET
          </button>
          <button className="equalButton" onClick={finalResult}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
