import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

// since we're using the arrow function, this is a stateless functional component. we're using normal brackets (xyz) as shorthand for {return(xyz)}
const AddExpensePage = (props) => (
    <div className="component">
    This is the AddExpensePage component.
    <ExpenseForm

    onSubmit={ (expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
    }}

    />
    </div>
);

export default connect()(AddExpensePage);