console.log("[APP.JS]");

const app = {
    title: "Indecision",
    subtitle: "Delegate your thinking!",
    options: ['One', 'Two']
}

const template = (
    <div>
        <h2>{app.title}</h2> 
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options && app.options.length > 0 ? <p>Here are your options</p> : <p>No options found</p>}
        <ol>
            <li>One</li>
            <li>Two</li>
        </ol>
    </div>
);

// set up the wrapper using HTML ID
const appRoot = document.getElementById("app");

const user = {
    name: "Alam Torowski",
    age: 25,
    location: "Lopenhagen"
}

function getLocation(location){

    if(location){
        return <p>Location: {location}</p>
    }
}

const templateLegacy = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        <p>{user.age && user.age >= 18 ? "Age: "+user.age : ""}</p>
        {getLocation(user.location)}
    </div>
);

let count = 0;

const plusOne = () => {
    console.log("plus one");
    count++
    renderCounterApp();
}

const minusOne = () => {
    console.log("minus one");
    count--
    renderCounterApp();
}

const resetCounter = () => {
    console.log("reset counter");
    count=0;
    renderCounterApp();
}

const renderCounterApp = () => {

    const templateTwo = (
        <div>
        <h1>count: {count}</h1>
        <button onClick={plusOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetCounter}>reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot);

}

renderCounterApp();