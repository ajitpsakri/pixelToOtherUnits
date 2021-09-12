import { useState } from "react";
import "./styles.css";

export default function App() {
  const [cssUnit, setCssUnit] = useState("");
  const [desiredCss, setDesiredCss] = useState("");

  const handleCodeChange = (event) => {
    //
    let inputCssCode = event.target.value;
    if (cssUnit !== "") {
      setDesiredCss(() => {
        let exptectedCssCode = inputCssCode.replace(
          /([+-]?\d+\.?\d*)px/g,
          function (match, p1) {
            return p1 * 0.0625 + cssUnit;
          }
        );
        return exptectedCssCode;
      });
    } else {
      setDesiredCss(inputCssCode);
    }
  };
  return (
    <div className="App">
      <div className="left">
        <h1>MnRem</h1>
        <small>Tool made by Ajit, Clone of Matthew Kosloski pixem tool</small>
        <label htmlFor="base-pixel-size">
          <h2>Base Pixel Size</h2>
        </label>
        <small>?</small>
        <input type="number" id="base-pixel-size" />
        <label htmlFor="affected-properties">
          <h2>Affected properties</h2>
        </label>
        <small>?</small>
        <input type="text" id="affected-properties" />
        <label htmlFor="conversion-unit">
          <h2>Conversion Unit</h2>
        </label>
        <small>?</small>
        EM
        <input
          onChange={() => {
            setCssUnit("em");
          }}
          name="conversion-unit"
          value="em"
          type="radio"
          id="conversion-unit"
        />
        REM
        <input
          onChange={() => setCssUnit("rem")}
          name="conversion-unit"
          value="rem"
          type="radio"
          id="conversion-unit"
        />
        <label htmlFor="preserve-original-value">
          <h2>Preserve original Value</h2>
        </label>
        <small>?</small>
        <input type="checkbox" id="preserve-original-value" />
      </div>
      <div className="right">
        <div className="code">
          <h3>Your Code</h3>
          <textarea
            className="text-area"
            rows="10"
            onChange={handleCodeChange}
            id="code-textarea"
          ></textarea>
        </div>
        <hr />
        <div className="result">
          <h3>Result</h3>
          <textarea
            className="text-area"
            readOnly
            type="text"
            rows="10"
            value={desiredCss}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
