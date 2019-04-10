import React from 'react'

class AddOption extends React.Component {
    state = {
        error: undefined, 
        thing: 'something'
    }
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption = (e) =>  {

        e.preventDefault(); 
        const option = e.target.elements.option.value.trim();
        

        const err = this.props.handleAddOption(option);
        this.setState( () => ({ 
            error: err
        }) );

        if(!err) {
            e.target.elements.option.value = ''; 
        }
        
    }

    render() {
        return (
            <section className="AddOption">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button className="button">Add option</button>
                </form>
            </section>
        )
    }
}

export default AddOption;