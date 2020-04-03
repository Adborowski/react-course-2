import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

// since we're using the arrow function, this is a stateless functional component. we're using normal brackets (xyz) as shorthand for {return(xyz)}
const ExpenseDashboardPage = () => (
    <div className="component">This is my dashboard component.</div>
);

const AddExpensePage = () => (
    <div className="component">This is my AddExpense component.</div>
);

const EditExpensePage = () => (
    <div className="component">This is my EditExpense component.</div>
);

const HelpPage = () => (
    <div className="component">This is my Help component.</div>
);

const NotFoundPage = () => (
    <div className="component">404</div>
);

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

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route exact={true} path="/" component={ExpenseDashboardPage}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;