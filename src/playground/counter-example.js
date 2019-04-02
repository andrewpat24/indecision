// An example of manual data binding
let count = 0; 

const addOne = () => {
    console.log("Add one")
    count++; 
    renderApp(); 
}
const subOne = () => {
    console.log("Sub one")
    count--; 
    renderApp(); 
}
const resetCount = () => {
    console.log("reset")
    count = 0; 
    renderApp(); 
}


const appRoot = document.getElementById("app");

const renderApp = () => {

    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} id="add-count">+1</button>
            <button onClick={subOne} id="sub-count">-1</button>
            <button onClick={resetCount} id="reset-count">reset</button>

        </div>
    )

    ReactDOM.render(templateTwo, appRoot);

}

renderApp(); 