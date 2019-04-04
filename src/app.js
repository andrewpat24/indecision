

class Header extends React.Component {
    render() {
        return (
            <section className="Header">
               <h1>{this.props.title}</h1>
               <h2>{this.props.subTitle}</h2>
            </section>
        );

    }
}

class Action extends React.Component {
    handlePick () {
        alert('handle pick')
    }

    render () {
        return (
            <section className="Action">
                <button onClick={this.handlePick}>
                    What should I do? 
                </button>
            </section>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <section className="Option">
                <p>{this.props.text}</p>
            </section>
        )
    }
}

class Options extends React.Component {
    constructor (props) {
        super(props);
        this.handleClearOptions = this.handleClearOptions.bind(this);
    }

    generateOptions () {
        const options = this.props.options; 
        const jsxOptions = options.map( (option) => {
            return <Option key={option} text={option}/> 
        } ); 


        return jsxOptions; 
    }

    handleClearOptions () {
        console.log(this.props.options)
    }

    render() {
        return (
            <section className="Option">
                Options:
                {this.props.options.length}
                <button onClick={this.handleClearOptions.bind(this)}>Clear Options</button>
                {this.generateOptions()}
            </section>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault(); 
        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = ''; 
        if(!option) {
            return alert('No text provided');
        }
        alert(option);
    }

    render() {
        return (
            <section className="AddOption">
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </section>
        )
    }
}

class App extends React.Component {
    render() {
        const title = "Indecision";
        const subTitle = "We'll make the decision for you";
        const options = [
            'Thing one', 
            'Thing two', 
            'Thing ten'
        ];

        return (
            <section className="App">
                <Header title={title} subTitle={subTitle}/> 
                <Action /> 
                <Options options={options}/> 
                <AddOption /> 
            </section>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));