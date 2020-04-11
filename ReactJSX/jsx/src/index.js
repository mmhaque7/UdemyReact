//imort the React and the ReactDOM Library
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click on me";
}
//create a React components
const App = () => {
  const buttonText = { text: "click me" };
  const labelText = "Enter Name: ";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

//take the react comp and show it on screen
ReactDOM.render(<App />, document.querySelector("#root"));
