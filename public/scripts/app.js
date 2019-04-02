'use strict';

console.log("app.js is running");

var app = {
    title: 'Indecision App',
    subtitle: 'For making decisions for you.',
    options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        ' ',
        app.subtitle,
        ' '
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'no options',
        ' '
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add option'
        )
    )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
