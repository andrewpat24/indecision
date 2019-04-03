"use strict";

console.log("app.js is running");

var appRoot = document.getElementById("app");

var app = {
    title: 'Visibility Toggle',
    detailsVisible: false,
    detailsText: 'These are my details'
};

var toggleDetails = function toggleDetails() {
    app.detailsVisible = !app.detailsVisible;
    renderDOM();
};

var renderDOM = function renderDOM() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            " ",
            app.title,
            " "
        ),
        React.createElement(
            "button",
            { onClick: toggleDetails },
            app.detailsVisible ? 'Hide details' : 'Show details'
        ),
        app.detailsVisible && React.createElement(
            "p",
            null,
            app.detailsText
        )
    );
    ReactDOM.render(template, appRoot);
};

renderDOM();
