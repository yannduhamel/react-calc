import "./App.scss";
import Button from "./components/Button/Button";
import Result from "./components/Result/Result";

function App() {
  return (
    <>
      <div className="calculator">
        <div className="calculatorHeader">
          <div className="calculatorName">react calc</div>
          <div className="themeChangeTitle">THEME</div>
        </div>
        <Result />
        <div className="calculatorBody">
          <Button symbol="7" />
          <Button symbol="8" />
          <Button symbol="9" />
          <button className="deleteButton">DEL</button>
          <Button symbol="4" />
          <Button symbol="5" />
          <Button symbol="6" />
          <Button symbol="+" />
          <Button symbol="1" />
          <Button symbol="2" />
          <Button symbol="3" />
          <Button symbol="-" />
          <Button symbol="." />
          <Button symbol="0" />
          <Button symbol="/" />
          <Button symbol="x" />
          <button className="resetButton">RESET</button>
          <button className="equalButton">=</button>
        </div>
      </div>
    </>
  );
}

export default App;
