import { useEffect, useState } from "react";
// import { flushSync } from "react-dom";
import "./styles.css";

export default function App() {
  const [cssUnit, setCssUnit] = useState("");
  const [desiredCss, setDesiredCss] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [basePixel, setBasePixel] = useState(16);
  const handleInputCode = (event) => {
    setInputCode(event.target.value);
    // let inputCssCode = event.target.value;
    // // console.log(inputCssCode)
    // if (cssUnit !== "") {
    //   setDesiredCss(() => {
    //     let exptectedCssCode = inputCssCode.replace(
    //       /([+-]?\d+\.?\d*)px/g,
    //       function (match, p1) {
    //         return p1 * (1 / basePixel) + cssUnit;
    //       }
    //     );
    //     return exptectedCssCode;
    //   });
    // } else {
    //   setDesiredCss(inputCssCode);
    // }
  };
  const handleBasePixelChange = (event) => {
    setBasePixel(event.target.value);
  };
  useEffect(() => {
    if (cssUnit !== "") {
      setDesiredCss(() => {
        let exptectedCssCode = inputCode.replace(
          /([+-]?\d+\.?\d*)px/g,
          function (match, p1) {
            return p1 * (1 / basePixel) + cssUnit;
          }
        );
        return exptectedCssCode;
      });
    } else {
      setDesiredCss(inputCode);
    }
  }, [basePixel, cssUnit, inputCode]);
  return (
    <div className="App">
      <div className="left">
        <h1>MnRem</h1>
        <small>Tool made by Ajit, Clone of Matthew Kosloski pixem tool</small>
        <label htmlFor="base-pixel-size">
          <h2>Base Pixel Size</h2>
        </label>
        <small>?</small>
        <input
          value={basePixel}
          onChange={(event) => {
            handleBasePixelChange(event);
          }}
          type="number"
          id="base-pixel-size"
        />
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
          onChange={() => {
            setCssUnit("rem");
          }}
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
            onChange={(event) => {
              handleInputCode(event);
            }}
            id="code-textarea"
          ></textarea>
        </div>
        <hr />
        <div className="result">
          <h3>Results</h3>
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
