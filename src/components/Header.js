import React from 'react';

// stateless functional component (faster than class-based)
const Header = (props) => (
    
        <div className="header">
            <h1 className="header__title">{props.title}</h1>
            <h2 className="header__subtitle">{props.subtitle}</h2>
        </div>
    
)

export {Header as default};