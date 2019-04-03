console.log("app.js is running");

const appRoot = document.getElementById("app");
const app = {
    title: 'Indecision App', 
    subtitle: 'For making decisions for you.', 
    options: []
};

const clearOptions = (e) => {
    app.options = []; 
    renderDOM(); 
}

const onFormSubmit = (e) => {
    e.preventDefault(); 
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = ''; 
        renderDOM(); 
    }
}

const selectRandomOption = () => {
    const randInt = Math.floor((Math.random() * (app.options.length)));
    const option = app.options[randInt];
    console.log(option);
}

const renderDOM = () => {
    const template = (
        <div> 
            <h1> {app.title} </h1> 
            {app.subtitle && <p> {app.subtitle} </p>}
            <button disabled={app.options.length === 0}  onClick={selectRandomOption}>What am I to do?</button>
            <p>{ (app.options.length > 0) ? 'Here are your options:' : 'no options' } </p>
            <ol>
                {app.options.map( (option) => ( <li key={option}>{option}</li> ) )}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
            <button onClick={clearOptions}>Clear</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
}



renderDOM(); 


