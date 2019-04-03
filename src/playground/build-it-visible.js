console.log("app.js is running");

const appRoot = document.getElementById("app");

const app = {
    title: 'Visibility Toggle', 
    detailsVisible: false, 
    detailsText: 'These are my details'
};

const toggleDetails = () => {
    app.detailsVisible = !app.detailsVisible; 
    renderDOM(); 
};

const renderDOM = () => {
    const template = (
        <div> 
            <h1> {app.title} </h1> 
            <button onClick={toggleDetails}>{app.detailsVisible ? 'Hide details' : 'Show details'}</button>
            {app.detailsVisible && <p>{app.detailsText}</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderDOM(); 