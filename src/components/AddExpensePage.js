import React from 'react';
import ExpenseForm from './ExpenseForm';

// since we're using the arrow function, this is a stateless functional component. we're using normal brackets (xyz) as shorthand for {return(xyz)}
const AddExpensePage = () => (
    <div className="component">
    This is the AddExpensePage component.
    <ExpenseForm/>
    </div>
);

export default AddExpensePage;