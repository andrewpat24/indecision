console.log("app.js is running");

var template = <p>This is JSX from app.js. Updated using babel</p>; 
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);