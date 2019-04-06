'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.handleClearOptions = _this.handleClearOptions.bind(_this);
        _this.handlePickAction = _this.handlePickAction.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);

        _this.state = {
            options: []
        };

        return _this;
    }

    _createClass(App, [{
        key: 'handleClearOptions',
        value: function handleClearOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handlePickAction',
        value: function handlePickAction() {
            var randInt = Math.floor(Math.random() * this.state.options.length);
            var selectedOption = this.state.options[randInt];
            alert(selectedOption);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            console.log(option);

            if (!option) {
                return 'Please enter valid text input.';
            } else if (this.state.options.indexOf(option) >= 0) {
                return 'You cannot add duplicate entries.';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecision";
            var subTitle = "We'll make the decision for you";

            return React.createElement(
                'section',
                { className: 'App' },
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, {
                    hasOptions: !!this.state.options.length,
                    handlePickAction: this.handlePickAction
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleClearOptions: this.handleClearOptions
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption,
                    handleClearOptions: this.handleClearOptions,
                    test: "test"
                })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'section',
                { className: 'Header' },
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subTitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function Action(props) {
    return React.createElement(
        'section',
        { className: 'Action' },
        React.createElement(
            'button',
            {
                onClick: props.handlePickAction,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

var Option = function (_React$Component3) {
    _inherits(Option, _React$Component3);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'section',
                { className: 'Option' },
                React.createElement(
                    'p',
                    null,
                    this.props.text
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'generateOptions',
        value: function generateOptions() {

            var options = this.props.options;
            var jsxOptions = options.map(function (option) {
                return React.createElement(
                    'div',
                    { key: option, tag: option },
                    React.createElement(Option, { text: option })
                );
            });
            return jsxOptions;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'section',
                { className: 'Option' },
                React.createElement(
                    'button',
                    { onClick: this.props.handleClearOptions },
                    'Clear Options'
                ),
                this.generateOptions()
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this5.handleAddOption = _this5.handleAddOption.bind(_this5);

        _this5.state = {
            error: undefined,
            thing: 'something'
        };
        return _this5;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {

            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            e.target.elements.option.value = '';

            var err = this.props.handleAddOption(option);
            console.log('error:', err);

            this.setState(function () {
                return {
                    error: err
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'section',
                { className: 'AddOption' },
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var User = function User(props) {
    return React.createElement(
        'section',
        { className: 'User' },
        React.createElement(
            'p',
            null,
            'Name: ',
            props.name
        ),
        React.createElement(
            'p',
            null,
            'Age: ',
            props.age
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
