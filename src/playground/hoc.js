console.log("[HOC.JS]");
// higher order components render other components

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (

        <div>
            {props.isAdmin && <h2>This is a secret</h2>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please log in</p>}

        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

const appRoot = document.getElementById("app");

// ReactDOM.render(<AdminInfo isAdmin={true} info="you are sick"/>, appRoot); // you can straight up stick your component JSX tag in there
ReactDOM.render(<AuthInfo isAuthenticated={true} info="you are sick"/>, appRoot); 