import React from "react";
import ReactDom from "react-dom";
import Hello from "./components/Hello";
const App = () => {
  return (
    <div>
      <h1>你好呀</h1>
      <Hello />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
if (module.hot) module.hot.accept();
