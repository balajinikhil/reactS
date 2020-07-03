// import react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
/*
const App = () => {
    return <div>Hello World</div>;
};

// take react component and render it on screen
ReactDOM.render(<App />, document.getElementById("root"));

*=========================================================================*
*/

/*

const btn = "click me";
let style = { backgroundColor: "blue", color: "white" };

const App = () => {
  return (
    <div>
      <label htmlFor="name">Enter Name:</label>
      <input id="name"></input>
      <button style={style}>{btn}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

=======================================================================
*/

let getTime = () => {
  return new Date().toLocaleTimeString();
};

const App = () => {
  return (
    <div>
      <p>Time is :</p>
      <p>{getTime()}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
