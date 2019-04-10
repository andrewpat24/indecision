import React from 'react';
// Components 
import Options from './Options';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class App extends React.Component {

    state = {
        options: this.props.options,
        selectedOption: undefined
    }

    handleClearOptions = () => {
        this.setState( () => ({ 
            options: [] 
        } ) );
    }

    handleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    handlePickAction = () => {
        const randInt = Math.floor((Math.random() * (this.state.options.length)));
        const selectedOption = this.state.options[randInt];
        this.setState(() => {
            return {
                selectedOption
            }
        });
    }

    handleAddOption = (option) => {
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

    handleCloseModal = () => {
        this.setState( () => {
            return {
                selectedOption: undefined
            }
        } )
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

    render() {
        const title = "Indecision";
        const subTitle = "We'll choose for you";

        return (
            <section className="App">
                <Header title={title} subTitle={subTitle}/> 
                    <div className="container">
                        <Action 
                            hasOptions={!!this.state.options.length}
                            handlePickAction={this.handlePickAction}
                        /> 
                        <div className="widget">
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
                        </div>
                    </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                /> 
            </section>
        )
    }
}

App.defaultProps = {
    options: []
}

export default App; 