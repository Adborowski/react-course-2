import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Header = () => (
    <header className="header">
        <h1 className="header__headline">Expensify</h1>
        <div className="header__navbar">
            <div className="header__linkbox"><NavLink exact={true} activeClassName="header__navlink--active" className="header__navlink" to="/">Dashboard</NavLink></div>
            <div className="header__linkbox"><NavLink activeClassName="header__navlink--active" className="header__navlink" to="/create">Create Expense</NavLink></div>
            <div className="header__linkbox"><NavLink activeClassName="header__navlink--active" className="header__navlink" to="/edit">Edit Expense</NavLink></div>
            <div className="header__linkbox"><NavLink activeClassName="header__navlink--active" className="header__navlink" to="/help">Help</NavLink></div>
        </div>
    </header>
);

export default Header;