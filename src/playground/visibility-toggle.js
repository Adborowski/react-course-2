console.log("[APP.JS]");

const app = {
    title: "Visibility Toggle",
    subtitle: "Make something appear and disappear!",
    isVisible: false
}

// set up the wrapper using HTML ID
const appRoot = document.getElementById("app");

const toggleVisibility = () => {
    app.isVisible = !app.isVisible;
    console.log("New state. Is it visible? " + app.isVisible);
    render();
}

const render = () => {

    const template = (
        <div>
            <h2>{app.title}</h2> 
            {app.subtitle && <p>{app.subtitle}</p>}

            <button onClick={toggleVisibility}>
                {app.isVisible ? "hide" : "show"}
            </button>

            {app.isVisible && <p>Hello this is the content</p>}
            {/* the second value is always true. if the first one is false, the whole expression renders nothing. if the first one is true, both of them render, but since booleans get ignored, we only see the second */}
            
        </div>
    );

    ReactDOM.render(template, appRoot);

}

render();