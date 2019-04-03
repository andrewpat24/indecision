class Header extends React.Component {
    render() {
        return (
            <section className="Header">
               <h1>Indecision</h1>
               <h2>We'll make the decision for you</h2>
            </section>
        );
    }
}

class Action extends React.Component {
    render () {
        return (
            <section className="Action">
                <button>
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
                <h3>Options</h3>
            </section>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <section className="AddOption">
                <form >
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </section>
        )
    }
}

const jsx = (
    <div>
        <h1>
            Title
        </h1>
        <Header /> 
        <Action /> 
        <Option />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'));