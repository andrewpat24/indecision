class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubOne = this.handleSubOne.bind(this);
        this.handleClearCounter = this.handleClearCounter.bind(this);
        console.log('Stored:', localStorage.getItem('count'));
        this.state = {
            count: 0
        }
    }

    handleAddOne () {
        this.setState( (prevState) => {
            return {
                count: prevState.count + 1
            }
        }); 
    }

    handleSubOne () {
        this.setState( (prevState) => {
            return {
                count: prevState.count - 1
            }
        }); 
    }

    handleClearCounter () {
        this.setState( () => {
            return {
                count: 0
            }
        }); 
    }

    componentDidMount () {
        try {

            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10)
            if(!isNaN(count))  
                this.setState( () => {
                    return {
                        count
                    }
                });

        } catch (e) {
            console.log("error:", e);
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }

    render() {
        return (
            <section className="Counter">
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubOne}>-1</button>
                <button onClick={this.handleClearCounter}>Reset</button>
            </section>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));