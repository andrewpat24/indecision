"use strict";

console.log("app.js is running");

var template = React.createElement(
  "p",
  null,
  "This is JSX from app.js. Updated using babel"
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
