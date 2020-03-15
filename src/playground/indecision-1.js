console.log("[APP.JS]");

const app = {
    title: "Indecision",
    subtitle: "Delegate your thinking!",
    options: ["go", "stay", "jump", "sleep"]
}

const numbers = [50, 100, 400];

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    // let's dig into the input field
    const option = e.target.elements.option.value;
    console.log(option);

    // option is always a string, an empty string is falsey
    if(option){
        app.options.push(option); // add it to the app array
        e.target.elements.option.value = 'x'; // clear the input
        console.log(app.options);
        console.log("Length of options array: "+app.options.length);
        render();
    }
}

// set up the wrapper using HTML ID
const appRoot = document.getElementById("app");

const removeAllOptions = () => {
    app.options = [];
    render();
}

const makeDecision = () => {
    const randomOptionIndex = Math.floor(Math.random()*app.options.length);
    const randomOption = app.options[randomOptionIndex];
    console.log("Decision: "+randomOptionIndex + " - " + randomOption);
}

const render = () => {

    const template = (
        <div>
            <h2>{app.title}</h2> 
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options && app.options.length > 0 ? <p>Here are your options</p> : <p>No options found</p>}
    
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAllOptions}>Remove all</button>

            <ol>
            {
                app.options.map( (option, index)=>{
                    const newId = "option-"+index;
                    return <li key={index} id={newId}>{option}</li>
                } )
            }
            </ol>
            
            <form onSubmit={onFormSubmit}>
    
                <input type="text" name="option" defaultValue="x"></input>
                <button>submit</button>
            
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

}

render();