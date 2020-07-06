import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

const App = () => {
  return (
    <div>
      <Message
        heading="Changes in policy"
        message="We just updated our privacy policy"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
