class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visible: false, 
            description: 'This is a description with stuff in it.'
        }
    }

    handleToggle () {
        this.setState( (prevState) => {
            return {
                visible: !prevState.visible
            }
        } );
    }

    render() {
        return (
            <section className="Visibility">
                <h1>Visibility</h1>
                <button onClick={this.handleToggle}>{this.state.visible ? 'Hide' : 'Show'}</button>
                {this.state.visible && <p>{this.state.description}</p>}
            </section>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));