import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// function createObject() {
//   console.log('outermost this', this);
//   return {
//     arrowFunction: () => {
//       console.log('arrowFunction this', this);
//     },
//     functionKeyWordFunction: function() {
//       console.log('functionKeyWordFunction this', this);
//     }
//   }
// }
// const obj = createObject();
// console.log('obj', obj);

// obj.arrowFunction();
// obj.functionKeyWordFunction();


