import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newElem = text.toUpperCase();
    setText(newElem);
  };

  const handleDownClick = () => {
    let newElem = text.toLowerCase();
    setText(newElem);
  };

  const clearClick = () => {
    let newElem = "";
    setText(newElem);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const grammarCorrection = (text) => {
    let correctedText = text.replace("your", "you're");
    return correctedText;
  };

  const handleGrammarClick = () => {
    let correctedText = grammarCorrection(text);
    setText(correctedText);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container p-2" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb3">
          <textarea
            className="form-control border border-success"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="text-center">

        <button
          type="button"
          className="btn btn-outline-primary  mx-1 my-3"
          onClick={handleUpClick}
          >
          To Uppercase
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary my-3 mx-1"
          onClick={handleDownClick}
          >
          To Lowercase
        </button>
        <button
          type="button"
          className="btn btn-outline-success  mx-1 my-3"
          onClick={handleGrammarClick}
          >
          Improve Grammar
        </button>
        <button
          type="button"
          className="btn btn-outline-danger  mx-1 my-3"
          onClick={clearClick}
          >
          Clear
        </button>
          </div>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter(word => word.length > 0).length} words, {text.length} characters
        </p>
        <h3>Preview</h3>
        <p className="container">{text}</p>
      </div>
    </>
  );
}
