class App extends React.Component {
    constructor (props) {
        super(props);

        this.handleClearOptions = this.handleClearOptions.bind(this);
        this.handlePickAction = this.handlePickAction.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this); 
        this.handleRemoveOption = this.handleRemoveOption.bind(this);

        this.state = {
            options: props.options
        }
       
    }

    componentDidMount () {
        console.log('Component did mount!');
    }

    componentDidUpdate (prevProps, prevState) {
        console.log('Component did update!');
    }

    componentWillUnmount () {
        console.log('Component will unmount')
    }

    handleClearOptions () {
        this.setState( () => ({ 
            options: [] 
        } ) );
    }

    handleRemoveOption (optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    handlePickAction () {
        const randInt = Math.floor((Math.random() * (this.state.options.length)));
        const selectedOption = this.state.options[randInt];
        alert(selectedOption);
    }

    handleAddOption (option) {
        console.log(option);

        if(!option) {
            return 'Please enter valid text input.';
        }
        else if(this.state.options.indexOf(option) >= 0) {  
            return 'You cannot add duplicate entries.';
        }

       this.setState( (prevState) => ({
            options: prevState.options.concat(option)
        }) );
    }

    render() {
        const title = "Indecision";
        const subTitle = "We'll choose for you";

        return (
            <section className="App">
                <Header title={title} subTitle={subTitle}/> 
                <Action 
                    hasOptions={!!this.state.options.length}
                    handlePickAction={this.handlePickAction}
                /> 
                <Options 
                    options={this.state.options}
                    handleClearOptions={this.handleClearOptions}
                    handleRemoveOption={this.handleRemoveOption}
                /> 
                <AddOption
                    handleAddOption={this.handleAddOption}
                    handleClearOptions={this.handleClearOptions}
                    test={"test"}
                /> 
            </section>
        )
    }
}

App.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
    <section className="Header">
        <h1>{props.title}</h1>
        {props.subTitle && <h2>{props.subTitle}</h2>}
     </section>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <section className="Action">
            <button 
                onClick={props.handlePickAction}
                disabled={!props.hasOptions}
            >
                What should I do? 
            </button>
        </section>
    )
}

const Options = (props) => {
    return (
        <section className="Option">
            <button onClick={props.handleClearOptions}>Clear Options</button>

            {props.options.map((option) => (
                <div 
                    key={option}
                >
                    <Option 
                        text={option}
                        handleRemoveOption={props.handleRemoveOption}
                    /> 
                </div> 
            ) ) }

        </section>
    )
}

const Option = (props) => {
    return (
        <section className="Option">
            <p>
                {props.text}
                <button 
                    onClick={(e) => {
                        props.handleRemoveOption(props.text)
                    }}>
                    Remove Option
                </button>
            </p>
        </section>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined, 
            thing: 'something'
        }
    }

    handleAddOption(e) {

        e.preventDefault(); 
        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = ''; 

        const err = this.props.handleAddOption(option);
        this.setState( () => ({ 
            error: err
        }) );
        
    }

    render() {
        return (
            <section className="AddOption">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </section>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));