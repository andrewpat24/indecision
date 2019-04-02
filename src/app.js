console.log("app.js is running");

const app = {
    title: 'Indecision App', 
    subtitle: 'For making decisions for you.', 
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault(); 
}

const template = (
    <div> 
        <h1> {app.title} </h1> 
        {app.subtitle && <p> {app.subtitle} </p>}
        <p>{ (app.options.length > 0) ? 'Here are your options' : 'no options' } </p>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>
    </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
