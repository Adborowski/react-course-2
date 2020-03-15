import React from 'react';

// stateless functional component (faster than class-based)
const Header = (props) => (
    
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    
)

export {Header as default};