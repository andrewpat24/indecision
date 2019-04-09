import React from 'react';
import ReactDOM from 'react-dom';
// Components
import Options from './components/Options';
import AddOption from './components/AddOption';
import Action from './components/Action';
import Header from './components/Header';

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
        try {   
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options)
                this.setState( () => {
                    return {
                        options
                    }
                });
        } catch (e) {
            console.log("error:", e);
        }
        
    }

    componentDidUpdate (prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
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

ReactDOM.render(<App />, document.getElementById('app'));